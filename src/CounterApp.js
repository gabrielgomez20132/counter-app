import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(0);

  //console.log(nombre, setNombre);

  //1er forma
  const hadleAdd = () => {
    setCounter(counter + 1);
  };

  //2da forma
  /* const hadleAdd = () => {
    setCounter((c) => c + 1);
  }; */

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={hadleAdd}>+1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
