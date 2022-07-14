import React, { Component } from "react";
import Foods from "./Components/Foods";
import { getFoods } from "../src/Services/fakeFoodService";
import Pagination from "./Components/Pagination";
import ListGroup from "./Components/ListGroup";
import { getPages } from "./Services/Pages";

class App extends Component {
  state = {
    foods: getFoods(),
    pages: getPages(),
  };

  handleActive = (nr) => {
    const pages = [...this.state.pages];
    const index = pages.indexOf(nr);
    pages[index] = { ...nr };
    pages[index].active = !this.state.pages.active;
    this.setState({ pages });
  };

  handleDelete = (id) => {
    const foods = this.state.foods.filter((item) => item._id !== id);
    this.setState({ foods });
  };

  render() {
    return (
      <div className="container mt-4" style={{ cursor: "pointer" }}>
        <div className="row">
          <span className="col-2">
            <ListGroup />
          </span>
          <div className="col">
            <Foods foods={this.state.foods} onDelete={this.handleDelete} />
            <Pagination pages={this.state.pages} onActive={this.handleActive} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
