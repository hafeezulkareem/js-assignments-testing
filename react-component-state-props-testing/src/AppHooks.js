import { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";

function App(props) {
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

App.propTypes = {
   text: PropTypes.string.isRequired,
};

export default App;
