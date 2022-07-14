import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class Favorite extends Component {
  state = {
    favorite: true,
  };
  getFavorite = () => {
    const star = !this.state.favorite;
    this.setState({ favorite: star });
  };
  render() {
    return (
      <i
        className={
          this.state.favorite ? "fa-regular fa-star" : "fa-solid fa-star"
        }
        onClick={() => this.getFavorite()}
      />
    );
  }
}

export default Favorite;
