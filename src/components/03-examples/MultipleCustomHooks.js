import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://dummyjson.com/quotes/${counter}`;

  const { data, error, loading } = useFetch(url);
  // console.log(data, error, loading);

  const { quote, author } = !!data && data;
  // console.log(text, author);

  return (
    <div>
      <h1>Amazing Quotes </h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote">
          <p className="mb-2 mt-2 ">{quote}</p>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};


export default MultipleCustomHooks;

