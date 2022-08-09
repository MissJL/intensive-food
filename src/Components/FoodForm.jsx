import React, { Component } from "react";

class FoodForm extends Component {
  handleSave = () => {
    // this.props.history.push("/foods");
    // Push: går att backa tillbaka medans replace skriver över:
    this.props.history.replace("/");
  };

  render() {
    return (
      <div>
        <h1>Food Form {this.props.match.params._id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
console.log(this.props.match.params._id);
export default FoodForm;
