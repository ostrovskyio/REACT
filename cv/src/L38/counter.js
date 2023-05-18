import React from "react";
import { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
  
  function countIncrement() {
    setCount(count + 1);
  }
  
  function countDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
    <div class='title'>Work experience in years:</div>
    <p></p>
    <div>{count}</div>
    <button onClick={countIncrement}>+</button>
    <button onClick={countDecrement}>-</button>
    <p></p>
    </div>
  );
  }

  export default Counter