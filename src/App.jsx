import React, { Component } from "react";
import Foods from "./Components/Foods";
import { getFoods } from "../src/Services/fakeFoodService";
import Pagination from "./Components/Pagination";
import ListGroup from "./Components/ListGroup";

class App extends Component {
  state = {
    foods: getFoods(),
    pages: [1, 2, 3, 4, 5],
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
            <Foods
              foods={this.state.foods}
              onDelete={this.handleDelete}
              onPage={this.handlePage}
              onActive={this.getActive}
            />
            <Pagination pages={this.state.pages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
