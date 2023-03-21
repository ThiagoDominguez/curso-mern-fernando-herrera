import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [inpValue, setInpValue] = useState("");

  const handleInpChange = (e) => {
    setInpValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpValue.trim().length > 2) {
      // * Se puede utilizar el setCategory mediante esta arrow Function
      setCategory((category) => [inpValue, ...category]);
      setInpValue("");
    }

    // * O tambien trayendo como prop, categories
    //* setCategory([...category, "Stranger Things"]);
    // ? La forma que esta comentada seria mediante traer como prop el array categories desde <GifExpertApp/>
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inpValue} onChange={handleInpChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default AddCategory;
