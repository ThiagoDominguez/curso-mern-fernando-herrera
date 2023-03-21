import React from "react";

const GifGridItem = (props) => {
  return (
    <div className="card animate__animated  animate__zoomIn">
      <img src={props.url} alt={props.title} />
      <p key={props.id}>{props.title}</p>
    </div>
  );
};

export default GifGridItem;
