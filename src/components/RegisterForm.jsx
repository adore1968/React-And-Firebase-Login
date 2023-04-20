import React from "react";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

function RegisterForm() {
  const { user, handleChange, handleRegister } = useAppContext();
  return (
    <div className="container sm:max-w-md">
      <form
        onSubmit={(e) => handleRegister(e)}
        className="bg-white p-5 rounded shadow-md"
      >
        <label htmlFor="email" className="text-xl sm:text-2xl">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@company.ltd"
            required
            value={user.email}
            onChange={(e) => handleChange(e)}
            className="w-full border py-2 px-3 mt-1 shadow text-lg sm:text-xl rounded"
          />
        </label>
        <label htmlFor="password" className="text-xl sm:text-2xl my-5 block">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            required
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="w-full border py-2 px-3 mt-1 shadow text-lg sm:text-xl rounded"
          />
        </label>
        <button className="bg-blue-600 text-white py-1.5 px-4 rounded text-lg sm:text-xl hover:bg-blue-500 transition-colors inline-block">
          Register
        </button>
      </form>
      <div className="my-5 flex justify-between items-center text-lg sm:text-xl">
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
