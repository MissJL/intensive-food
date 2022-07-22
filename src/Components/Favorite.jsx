import React, { Component } from "react";

class Favorite extends Component {
  getFavorite() {
    let classes = "fa-star fa-";
    classes += this.props.food.isFavorite ? "solid " : "regular";
    return classes;
  }

  render() {
    const { food, onFavorite } = this.props;
    return (
      <i
        className={this.getFavorite()}
        style={{ cursor: "pointer" }}
        onClick={() => onFavorite(food)}
      />
    );
  }
}

export default Favorite;
