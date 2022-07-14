import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    return (
      <span>
        <ul className="list-group container-sm">
          <li className="list-group-item">All Categories</li>
          <li className="list-group-item">Fruit</li>
          <li className="list-group-item">Snacks</li>
          <li className="list-group-item">Vegetable</li>
        </ul>
      </span>
    );
  }
}

export default ListGroup;
