import React, { Component } from "react";
import Foods from "./Components/Foods";
import { getFoods } from "../src/Services/fakeFoodService";
import Pagination from "./Components/Pagination";
import ListGroup from "./Components/ListGroup";
import { getCategories } from "./Services/fakeCategoryServices";
import { getPages } from "./Services/pages";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class App extends Component {
  state = {
    foods: getFoods(),
    categories: getCategories(),
    pages: getPages(),
  };

  handleDelete = (id) => {
    const foods = this.state.foods.filter((item) => item._id !== id);
    this.setState({ foods });
  };
  getActive = (page) => {
    const pages = this.state.pages.map((p) => ({ ...p, active: false }));
    pages[page.pageNr - 1].active = true;
    this.setState({ pages });
  };

  render() {
    return (
      <div className="container mt-4" style={{ cursor: "pointer" }}>
        <div className="row">
          <span className="col-2">
            <ListGroup categories={this.state.categories} />
          </span>
          <div className="col">
            <Foods foods={this.state.foods} onDelete={this.handleDelete} />
            <Pagination pages={this.state.pages} onActive={this.getActive} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
