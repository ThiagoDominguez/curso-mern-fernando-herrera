import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";
const FormWithCustomHook = () => {
  //* Como traemos los valores desde un custom hook , utilizamos ese custom hook en lugar del useState y utilizamos la funcion definida dentro del custom hook en este caso llamada desde este archivo con el nombre handleInpChange
  const [formValues, handleInpChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu Contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInpChange}
        />
      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
