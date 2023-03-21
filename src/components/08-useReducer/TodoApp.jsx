import React, { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

import "./style.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setTimeout(() => {
      setIsDark(!isDark);
    }, 200);
  };

  const handleDelete = (todoid) => {
    console.log(todoid);
    const action = {
      type: "delete",
      payload: todoid,
    };

    dispatch(action);
  };

  const handleToggle = (todoid) => {
    dispatch({
      type: "toggle",
      payload: todoid,
    });
  };

  const handleAddToDo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <h1>TodoApp( {todos.length} )</h1>
      <button
        className={`${isDark ? "btn btn-light" : "btn btn-dark"} m-4`}
        onClick={handleToggleTheme}
      >
        {isDark ? "Light" : "Dark"}
      </button>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddToDo={handleAddToDo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
