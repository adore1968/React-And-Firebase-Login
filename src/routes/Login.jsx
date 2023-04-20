import React from "react";
import { useAppContext } from "../context/AppProvider";
import LoginForm from "../components/LoginForm";
import Alert from "../components/Alert";

function Login() {
  const { error } = useAppContext();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        {error.show && <Alert error={error} />}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
