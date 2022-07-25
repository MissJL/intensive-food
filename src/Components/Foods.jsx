import React, { Component } from "react";
import Favorite from "../Components/Common/Favorite";

class Foods extends Component {
  foodInCart() {
    const inCart = this.props.foods.length;
    return inCart === 0
      ? "No food in the database"
      : `Showing ${this.props.foods.length} foods in the database`;
  }

  render() {
    const { foods, onDelete, onFavorite } = this.props;
    return (
      <>
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
                    <Favorite food={food} onFavorite={onFavorite} />
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(food._id)}
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
