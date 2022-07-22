import React, { Component } from "react";

class Favorite extends Component {
  getFavorite() {
    let classes = "fa-star fa-";
    classes += this.props.food.isFavorite ? "solid " : "regular";
    return classes;
  }

  render() {
    return (
      <i
        className={this.getFavorite()}
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onFavorite(this.props.food)}
      />
    );
  }
}

export default Favorite;
