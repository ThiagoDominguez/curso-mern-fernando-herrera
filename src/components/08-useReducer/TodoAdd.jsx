import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddToDo }) => {
  const [{ description }, handleInpChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddToDo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Todo..."
          autoComplete="off"
          className="form-control"
          onChange={handleInpChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary btn btn-block mt-1 "
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
