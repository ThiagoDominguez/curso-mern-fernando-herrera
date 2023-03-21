import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    //* 2.Para que por ejemplo el component AppRouter pueda acceder a user hay que envolver dentro del context el component y el context debe tener la propiedad Provider y un atributo value donde pasaremos lo que queremos enviar

    // <UserContext.Provider value={user}> //? si queremos mandar un solo valor será de esta forma
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
