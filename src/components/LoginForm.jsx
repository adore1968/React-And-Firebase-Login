import React from "react";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

function LoginForm() {
  const {
    user,
    handleChange,
    handleLogin,
    handleLoginGoogle,
    handleResetPassword,
  } = useAppContext();
  return (
    <div className="container sm:max-w-md">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="bg-white p-5 flex flex-col rounded shadow-md"
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
        <label htmlFor="password" className="text-xl sm:text-2xl my-5">
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
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white py-1.5 px-4 rounded text-lg sm:text-xl hover:bg-blue-500 transition-colors inline-block">
            Login
          </button>
          <p
            className="text-lg sm:text-xl text-blue-600 hover:text-blue-500 transition-colors cursor-pointer"
            onClick={() => handleResetPassword()}
          >
            Forgot Password?
          </p>
        </div>
      </form>
      <div className="my-5 flex justify-between items-center text-lg sm:text-xl">
        <h3>Don't have an Account?</h3>
        <Link
          to="/register"
          className="bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-500 transition-colors inline-block"
        >
          Register
        </Link>
      </div>
      <div className="bg-slate-100 text-center py-2 text-lg sm:text-xl shadow-md rounded hover:bg-slate-50 transition-colors cursor-pointer">
        <button onClick={() => handleLoginGoogle()}>Google Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
