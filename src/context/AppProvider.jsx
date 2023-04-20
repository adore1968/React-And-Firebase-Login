import { React, createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const userInitialState = {
  email: "",
  password: "",
};

const errorInitialState = {
  show: false,
  messagge: "",
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(userInitialState);
  const [error, setError] = useState({ errorInitialState });
  const [logUser, setLogUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const showAlert = (show = false, message = "") => {
    return setError({ show, message });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigate("/");
    } catch (error) {
      showAlert(true, error.message);
    }
    setUser(userInitialState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate("/");
    } catch (error) {
      showAlert(true, error.message);
    }
    setUser(userInitialState);
  };

  const provider = new GoogleAuthProvider();
  const handleLoginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      showAlert(true, error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      showAlert(true, error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      alert("Password reset email sent!");
    } catch (error) {
      showAlert(true, error.message);
    }
    setUser(userInitialState);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogUser(user);
      } else {
        setLogUser(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        error,
        logUser,
        loading,
        handleChange,
        handleRegister,
        showAlert,
        handleLogin,
        handleLoginGoogle,
        handleLogout,
        handleResetPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
