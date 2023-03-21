import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  //* React recomienda utilizar un useEffect por cada vez que necesitemos que se haga algo
  useEffect(() => {
    // console.log("hola");
  }, []);

  useEffect(() => {
    // console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("Email cambió");
  }, [email]);

  const handleInpChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInpChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInpChange}
        />
      </div>
      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
