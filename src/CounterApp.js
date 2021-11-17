import React from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
  //evento hadleAdd

  const hadleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={hadleAdd}>+1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
