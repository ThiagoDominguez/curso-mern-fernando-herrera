import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  // const categorias = ["One Punch", "Samurai X", "Dragon Ball"];//! De esta manera no se hace si esperamos que el valor del array varíe
  const [categories, setCat] = useState([""]);

  return (
    <div>
      <h2>Gif Search App</h2>
      <AddCategory setCategory={setCat} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      {categories.map((cat) => {
        return <GifGrid key={cat} category={cat} />;
      })}
    </div>
  );
};

export default GifExpertApp;
