import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class Favorite extends Component {
  state = {
    favorite: "fa-regular fa-star",
    noneFavorite: "fa-solid fa-star",
  };

  addFavorite = () => {
    const starStyle = this.state.noneFavorite
      ? this.state.favorite
      : this.state.noneFavorite;
    this.setState(starStyle);
  };
  render() {
    return;
    // <this.addFavorite />;
  }
}

export default Favorite;
