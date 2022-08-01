import React, { Component } from "react";

class Favorite extends Component {
  render() {
    const { isFavorite, onFavorite } = this.props;
    let classes = "fa-star fa-";
    classes += isFavorite ? "solid " : "regular";

    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={() => onFavorite(isFavorite)}
      />
    );
  }
}

export default Favorite;
