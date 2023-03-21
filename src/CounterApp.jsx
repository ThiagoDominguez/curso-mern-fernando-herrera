import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [count, setCount] = useState(value);

  const handleSum = () => {
    setCount(count + 1);
  };
  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={handleSum}>Sumar</button>
      <button onClick={handleSubstract}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default CounterApp;

// * el snippet rafcp crea todo la estructura de este componente , importa react y proptypes, y hace el export default
