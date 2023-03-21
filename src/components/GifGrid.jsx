// import React, { useEffect, useState } from "react";
import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs({ category });

  return (
    <>
      <h3 className="animate__animated  animate__zoomIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash loading">Loading...</p>
      )}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

//* Al desestructurar img, recibimos como prop un nivel el objeto para trabajar directamente

export default GifGrid;
