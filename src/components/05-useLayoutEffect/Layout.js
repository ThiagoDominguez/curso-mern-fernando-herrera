import React, { useLayoutEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "../05-useLayoutEffect/Layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://dummyjson.com/quotes/${counter}`;

  const { data, error, loading } = useFetch(url);
  // console.log(data, error, loading);

  const pTag = useRef()

  const { quote } = !!data && data;
  // console.log(text, author);

  const [boxSize, setBoxSize] = useState({})


  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])





  return (
    <div>
      <h1>Amazing Quotes </h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote">
          <p ref={pTag} className="mb-2 mt-2 ">{quote}</p>
        </blockquote>
      )}

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>


      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>


    </div>
  );
};

export default Layout;
