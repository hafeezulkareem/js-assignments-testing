import React from "react";
import "./App.css";

class App extends React.Component {
  showAlert = () => {
    alert("Hi, this is alert");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.showAlert}>Click Me</button>
      </div>
    );
  }
}

export default App;
