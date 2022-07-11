import React, { Component } from "react";
import Foods from "./Components/Foods";
import { getFoods } from "../src/Services/fakeFoodService";

class App extends Component {
  state = {
    foods: getFoods(),
  };

  render() {
    return (
      <>
        <Foods
          foods={this.state.foods}
          onDelete={this.handleDelete}
          inCart={this.foodInCart}
          addFavorite={this.addFavorite}
        />
      </>
    );
  }

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
}

export default App;
