import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value = 10 }) {
  const [counter, setCounter] = useState( value );

  //console.log(nombre, setNombre);

  //1er forma
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  
  const decrement = () => {

    let vble = counter - 1 
    if(vble == -1){
      vble = 0 ;
    }
    setCounter(vble);
  };

  const reset = () =>{
    /* let counter = 0 ; */
    //Llega un argumento a nuestro componente CounterApp , value= 10 
    setCounter(value);

  }

  //2da forma
  /* const hadleAdd = () => {
    setCounter((c) => c + 1);
  }; */

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
