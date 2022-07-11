import React, { Component } from "react";
import { getFoods } from "../Services/fakeFoodService";
import "@fortawesome/fontawesome-free/css/all.css";
import Favorite from "./Favorite";

class Foods extends Component {
  state = {
    foods: getFoods(),
    // favorite: <i className="fa-solid fa-star" />,
    // noneFavorite: <i className="fa-regular fa-star" />,
  };

  handleDelete = (id) => {
    const updatedArray = this.state.foods.filter((item) => item._id !== id);
    this.setState({ foods: updatedArray });
  };

  foodInCart() {
    const inCart = this.state.foods.length;
    return inCart === 0
      ? "No food in the database"
      : `Showing ${this.state.foods.length} foods in the database`;
  }
  addFavorite = () => {
    const starStyle = this.state.noneFavorite
      ? this.state.favorite
      : this.state.noneFavorite;
    this.setState(starStyle);
  };

  render() {
    return (
      <div style={{ cursor: "pointer" }} className="container">
        <span>{this.foodInCart()}</span>
        {this.state.foods.length > 0 && (
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
              {this.state.foods.map((food) => (
                <tr key={food._id}>
                  <td>{food.name}</td>
                  <td>{food.category.name}</td>
                  <td>{food.numberInStock}</td>
                  <td>{food.price}</td>
                  <td>
                    <i
                      className="fa-regular fa-star"
                      onClick={() => this.addFavorite}
                    ></i>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(food._id)}
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
      </div>
    );
  }
}

export default Foods;
