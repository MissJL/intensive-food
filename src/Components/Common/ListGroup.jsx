import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { categories, onCategory } = this.props;
    return (
      <span>
        <ul className="list-group container-sm">
          {categories.map((category) => (
            <li
              key={category.name}
              className={
                category.isActive ? "list-group-item active" : "list-group-item"
              }
              onClick={() => onCategory(category)}
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
