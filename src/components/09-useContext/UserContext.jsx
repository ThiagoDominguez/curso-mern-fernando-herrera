import { createContext } from "react";

export const UserContext = createContext(null);

//* 1. createContext nos permite crear un contexto en el cual le daremos un valor y todos los componentes que queden dentro de ese contexto , podran acceder a ese valor
