import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    return (
      <span>
        <ul className="list-group container-sm">
          {this.props.categories.map((category) => (
            <li
              key={category.name}
              className={
                category.isActive ? "list-group-item active" : "list-group-item"
              }
              onClick={() => this.props.onFilter(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </span>
    );
  }
}

export default ListGroup;
