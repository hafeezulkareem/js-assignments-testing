import React from "react";

import "./App.css";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
   }

   decrement = () => {
      this.setState((state) => ({
         count: state.count - 1,
      }));
   };
   increment = () => {
      this.setState((state) => ({
         count: state.count + 1,
      }));
   };

   render() {
      return (
         <div className="App">
            <button onClick={this.decrement}>-1</button>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>+1</button>
         </div>
      );
   }
}

export default App;
