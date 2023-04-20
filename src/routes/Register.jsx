import React from "react";
import { useAppContext } from "../context/AppProvider";
import RegisterForm from "../components/RegisterForm";
import Alert from "../components/Alert";

function Register() {
  const { error } = useAppContext();
  return (
    <div className="flex justify-center items-center min-h-screen">
      {error.show && <Alert error={error} />}
      <RegisterForm />
    </div>
  );
}

export default Register;
