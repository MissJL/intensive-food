import React, { Component } from "react";
import Favorite from "./Common/Favorite";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";
import { getFoods } from "../Services/fakeFoodService";
import { getCategories } from "../Services/fakeCategoryServices";
import { paginate } from "../Utils/Paginate";

const DEFAULT_CATEGORY = { _id: "", name: "All categories" };

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 4,
    selectedPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
  };

  componentDidMount() {
    const categories = [DEFAULT_CATEGORY, ...getCategories()];
    this.setState({ foods: getFoods(), categories });
  }

  render() {
    const {
      foods: allFoods,
      pageSize,
      selectedPage,
      categories,
      selectedCategory,
    } = this.state;
    const { handleDelete, handleFavorite, handlePageChange, handleItemSelect } =
      this;

    const filteredFoods = selectedCategory._id
      ? allFoods.filter((f) => f.category._id === selectedCategory._id)
      : allFoods;

    const foods = paginate(filteredFoods, selectedPage, pageSize);

    return (
      <div className="row">
        <div className="col-2 ">
          <ListGroup
            items={categories}
            onItemSelect={handleItemSelect}
            selectedItem={selectedCategory}
          />
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
          )}
          <Pagination
            itemCount={filteredFoods.length}
            pageSize={pageSize}
            selectedPage={selectedPage}
            onPageChange={handlePageChange}
          />
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

  handlePageChange = (page) => this.setState({ selectedPage: page });

  handleItemSelect = (item) =>
    this.setState({ selectedCategory: item, selectedPage: 1 });

  foodInCart() {
    const inCart = this.state.foods.length;
    return inCart === 0
      ? "No food in the database"
      : `Showing ${this.state.foods.length} foods in the database`;
  }
}

export default Foods;
