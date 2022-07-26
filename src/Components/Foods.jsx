import React, { Component } from "react";
import Favorite from "./Common/Favorite";
import { getFoods } from "../Services/fakeFoodService";
import { getCategories } from "../Services/fakeCategoryServices";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";

class Foods extends Component {
  state = {
    foods: getFoods(),
    pageSize: 3,
    selectedPage: 1,
    categories: [
      { name: "All Categories", isActive: true },
      ...getCategories(),
    ],
  };

  render() {
    const { foods, categories, pageSize, selectedPage } = this.state;
    const { handleDelete, handleFavorite, handleCategory, handlePageChange } =
      this;

    return (
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <ListGroup categories={categories} onCategory={handleCategory} />
          </div>
          <div className="col">
            <span>{this.foodInCart(foods)}</span>
            {foods.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {foods.map((food) => (
                    <tr key={food._id}>
                      <td>{food.name}</td>
                      <td>{food.category.name}</td>
                      <td>{food.numberInStock}</td>
                      <td>{food.price}</td>
                      <td>
                        <Favorite food={food} onFavorite={handleFavorite} />
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(food._id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}{" "}
            <Pagination
              itemCount={foods.length}
              pageSize={pageSize}
              selectedPage={selectedPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }

  handleFavorite = (food) => {
    const newFoods = [...this.state.foods];
    const index = newFoods.indexOf(food);
    newFoods[index] = { ...food };
    newFoods[index].isFavorite = !newFoods[index].isFavorite;
    this.setState({ foods: newFoods });
  };

  handleDelete = (id) => {
    const foods = this.state.foods.filter((item) => item._id !== id);
    this.setState({ foods });
  };

  handleCategory = (category) => {
    const newArray = this.state.categories.map((c) => ({
      ...c,
      isActive: false,
    }));
    const index = this.state.categories.indexOf(category);
    newArray[index].isActive = true;
    this.setState({ categories: newArray });
  };

  handlePageChange = (page) => this.setState({ selectedPage: page });

  foodInCart() {
    const inCart = this.state.foods.length;
    return inCart === 0
      ? "No food in the database"
      : `Showing ${this.state.foods.length} foods in the database`;
  }
}

export default Foods;
