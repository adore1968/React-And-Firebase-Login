import { React, useEffect } from "react";
import { useAppContext } from "../context/AppProvider";

function Alert({ error }) {
  const { showAlert } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-red-100 border-red-500 border p-2 text-red-500 mb-1.5 sm:max-w-md container text-center">
      <p className="sm:text-xl text-lg">{error.message}</p>
    </div>
  );
}

export default Alert;
