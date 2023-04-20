import React from "react";
import { useAppContext } from "../context/AppProvider";

function User() {
  const { logUser, handleLogout } = useAppContext();

  return (
    <div className="bg-white p-5 container sm:max-w-md shadow-md">
      <div className="flex items-center gap-5 justify-center">
        <h1 className="text-xl sm:text-2xl">
          Welcome {logUser.displayName || logUser.email}
        </h1>
        <img
          src={logUser.photoURL}
          alt={logUser.displayName || logUser.email}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleLogout()}
          className="bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-500 transition-colors inline-block text-lg sm:text-xl mt-5"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
