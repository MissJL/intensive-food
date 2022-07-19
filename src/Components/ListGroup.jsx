import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { categories, onFilter } = this.props;
    return (
      <span>
        <ul className="list-group container-sm">
          {categories.map((category) => (
            <li
              key={category.name}
              className={
                category.isActive ? "list-group-item active" : "list-group-item"
              }
              onClick={() => onFilter(category)}
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
