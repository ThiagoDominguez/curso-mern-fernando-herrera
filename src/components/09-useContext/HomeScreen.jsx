import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  //* 3. Para acceder a ese value debemos llamar al hook useContext y pasarle el component que tiene el contexto base , en este caso UserContext

  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />

      <pre className="container">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomeScreen;
