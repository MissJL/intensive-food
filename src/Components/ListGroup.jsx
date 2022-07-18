import React, { Component } from "react";

class ListGroup extends Component {
  getFiltered = (category) => {
    const filtered = this.props.categories.map((c) => ({
      ...c,
      isActive: false,
    }));
    filtered[category.name - 1].isActive = true;
    this.setState({ filtered });
  };

  render() {
    return (
      <span>
        <ul className="list-group container-sm">
          <li className="list-group-item">All Categories</li>
          {this.props.categories.map((category) => (
            <li
              key={category.name}
              className={
                this.props.categories.isActive
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => this.getFiltered()}
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
