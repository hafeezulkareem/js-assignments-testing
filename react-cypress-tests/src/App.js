import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0),
    incrementCount = () => setCount(count + 1),
    decrementCount = () => setCount(count - 1);

  return (
    <div>
      <button id="decrementButton" onClick={decrementCount}>
        -
      </button>
      <span id="count">{count}</span>
      <button id="incrementButton" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}

export default App;
