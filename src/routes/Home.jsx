import React from "react";
import { useAppContext } from "../context/AppProvider";
import User from "../components/User";
import Alert from "../components/Alert";

function Home() {
  const { error } = useAppContext();
  return (
    <div className="flex justify-center items-center min-h-screen">
      {error.show && <Alert error={error} />}
      <User />
    </div>
  );
}

export default Home;
