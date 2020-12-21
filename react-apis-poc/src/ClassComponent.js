import React from "react";
import "./App.css";

class PlassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "something",
    };
  }

  doNetworkCallForItems = () => {
    fetch("https://reqres.in/api/products/")
      .then((response) => response.json())
      .then((result) => this.setState({ data: result["total"] }));
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h1>{this.state.data}</h1>
        <button onClick={this.doNetworkCallForItems}>Click Me</button>
      </div>
    );
  }
}

export default PlassComponent;
