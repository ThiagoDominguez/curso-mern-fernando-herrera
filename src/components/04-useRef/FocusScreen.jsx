import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inpRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").select()
    inpRef.current.select();
    console.log(inpRef.current.value);
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input ref={inpRef} className="form-control" placeholder="su nombre" />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
