import React, { Component } from "react";

class Favorite extends Component {
  render() {
    let classes = "fa-star fa-";
    classes += this.props.isFavorite ? "solid " : "regular";

    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onFavorite(food)}
      />
    );
  }
}

export default Favorite;
