import React, { Component } from "react";
import Foods from "./Components/Foods";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <Foods />
        </div>
      </div>
    );
  }
}

export default App;
