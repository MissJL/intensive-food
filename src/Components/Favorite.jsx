import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class Favorite extends Component {
  state = {
    favorite: "fa-regular fa-star",
  };

  //   addFavorite() {
  //     const favorite = this.state.favorite;
  //     favorite === "fa-regular fa-star"
  //       ? "fa-solid fa-star"
  //       : "fa-regular fa-star";
  //     this.setState({ favorite });
  //   }
  render() {
    return;
    // <this.addFavorite />;
  }
}

export default Favorite;
