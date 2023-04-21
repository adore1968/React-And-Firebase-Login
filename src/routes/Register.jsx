import React from "react";
import { useAppContext } from "../context/AppProvider";
import RegisterForm from "../components/RegisterForm";
import Alert from "../components/Alert";

function Register() {
  const { error } = useAppContext();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        {error.show && <Alert error={error} />}
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
