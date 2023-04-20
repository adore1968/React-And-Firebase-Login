import React from "react";
import { useAppContext } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { logUser, loading } = useAppContext();

  if (loading) return <Loading />;

  if (!logUser) return navigate("/login");

  return <>{children}</>;
}

export default ProtectedRoute;
