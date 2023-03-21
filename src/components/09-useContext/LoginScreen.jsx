import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: new Date().getTime(),
            name: "Thiago Demian",
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
