import React from "react";

import "./App.css";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
   }

   componentDidMount() {
      const { fetch } = this.props;
      if (fetch) {
         fetch();
      }
      this.timer = setTimeout(this.autoIncrementCount, 1000);
   }

   componentWillUnmount() {
      if (this.timer) {
         clearTimeout(this.timer);
         this.timer = undefined;
      }
   }

   autoIncrementCount = () => {
      this.setState((state) => ({ count: state.count + 1 }));
   };

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <p>
                  Edit <code>src/App.js</code> and save to reload.{" "}
                  <span>{this.state.count}</span>
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </header>
         </div>
      );
   }
}

export default App;
