import React, { Component } from "react";

class Favorite extends Component {
  render() {
    const { food, onFavorite } = this.props;
    let classes = "fa-star fa-";
    classes += food.isFavorite ? "solid " : "regular";

    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={() => onFavorite(food)}
      />
    );
  }
}

export default Favorite;
