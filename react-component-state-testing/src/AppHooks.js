import { useState } from "react";

import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   const decrement = () => {
      setCount(count - 1);
   };
   const increment = () => {
      setCount(count + 1);
   };

   return (
      <div className="App">
         <button onClick={decrement} id="decrementButton">
            -1
         </button>
         <p>{count}</p>
         <button onClick={increment} id="incrementButton">
            +1
         </button>
      </div>
   );
}

export default App;
