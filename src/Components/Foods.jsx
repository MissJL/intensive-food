import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class Foods extends Component {
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
