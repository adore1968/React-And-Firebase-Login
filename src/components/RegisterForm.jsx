import React from "react";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

function RegisterForm() {
  const { user, handleChange, handleRegister } = useAppContext();
  return (
    <div className="sm:max-w-md container mx-auto">
      <form
        onSubmit={(e) => handleRegister(e)}
        className="p-5 bg-white rounded shadow-md"
      >
        <label htmlFor="email" className="sm:text-2xl text-xl">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@company.ltd"
            required
            value={user.email}
            onChange={(e) => handleChange(e)}
            className="sm:text-xl w-full px-3 py-2 mt-1 text-lg border rounded shadow"
          />
        </label>
        <label htmlFor="password" className="sm:text-2xl block my-5 text-xl">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            required
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="sm:text-xl w-full px-3 py-2 mt-1 text-lg border rounded shadow"
          />
        </label>
        <button className="bg-blue-600 text-white py-1.5 px-4 rounded text-lg sm:text-xl hover:bg-blue-500 transition-colors inline-block">
          Register
        </button>
      </form>
      <div className="sm:text-xl flex items-center justify-between my-5 text-lg">
        <h3>Already have an Account?</h3>
        <Link
          to="/login"
          className="bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-500 transition-colors inline-block"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
