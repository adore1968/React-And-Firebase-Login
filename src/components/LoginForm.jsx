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
    <div className="sm:max-w-md container mx-auto">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col p-5 bg-white rounded shadow-md"
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
        <label htmlFor="password" className="sm:text-2xl my-5 text-xl">
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
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white py-1.5 px-4 rounded text-lg sm:text-xl hover:bg-blue-500 transition-colors inline-block">
            Login
          </button>
          <p
            className="sm:text-xl hover:text-blue-500 text-lg text-blue-600 transition-colors cursor-pointer"
            onClick={() => handleResetPassword()}
          >
            Forgot Password?
          </p>
        </div>
      </form>
      <div className="sm:text-xl flex items-center justify-between my-5 text-lg">
        <h3>Don't have an Account?</h3>
        <Link
          to="/register"
          className="bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-500 transition-colors inline-block"
        >
          Register
        </Link>
      </div>
      <div className="bg-slate-100 sm:text-xl hover:bg-slate-50 py-2 text-lg text-center transition-colors rounded shadow-md cursor-pointer">
        <button onClick={() => handleLoginGoogle()}>Google Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
