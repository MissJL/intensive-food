import React, { Component } from "react";
import Foods from "./Components/Foods";
import { getFoods } from "../src/Services/fakeFoodService";
import Pagination from "./Components/Pagination";
import ListGroup from "./Components/ListGroup";
import { getCategories } from "./Services/fakeCategoryServices";
import { getPages } from "./Services/pages";

class App extends Component {
  state = {
    foods: getFoods(),
    categories: [{ name: "All Categories" }, ...getCategories()],
    pages: getPages(),
  };

  render() {
    const { categories, foods, pages } = this.state;
    return (
      <div className="container mt-4" style={{ cursor: "pointer" }}>
        <div className="row">
          <span className="col-2">
            <ListGroup categories={categories} onFilter={this.handleFilter} />
          </span>
          <div className="col">
            <Foods foods={foods} onDelete={this.handleDelete} />
            <Pagination pages={pages} onActive={this.handlePage} />
          </div>
        </div>
      </div>
    );
  }
  handleDelete = (id) => {
    const foods = this.state.foods.filter((item) => item._id !== id);
    this.setState({ foods });
  };

  handlePage = (page) => {
    const pages = this.state.pages.map((p) => ({ ...p, active: false }));
    pages[page.pageNr - 1].active = true;
    this.setState({ pages });
  };

  handleFilter = (category) => {
    const newArray = this.state.categories.map((c) => ({
      ...c,
      isActive: false,
    }));
    const index = this.state.categories.indexOf(category);
    newArray[index].isActive = true;
    this.setState({ categories: newArray });
  };
}

export default App;
