import React, { Component } from "react";
import Favorite from "./Favorite";

class Foods extends Component {
  foodInCart() {
    const inCart = this.props.foods.length;
    return inCart === 0
      ? "No food in the database"
      : `Showing ${this.props.foods.length} foods in the database`;
  }

  render() {
    return (
      <>
        <span>{this.foodInCart(this.props.foods)}</span>
        {this.props.foods.length > 0 && (
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
              {this.props.foods.map((food) => (
                <tr key={food._id}>
                  <td>{food.name}</td>
                  <td>{food.category.name}</td>
                  <td>{food.numberInStock}</td>
                  <td>{food.price}</td>
                  <td>
                    <Favorite />
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(food._id)}
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
      </>
    );
  }
}

export default Foods;
