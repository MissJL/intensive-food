import React, { Component } from "react";

class ListGroup extends Component {
  state = {
    filtered: false,
  };

  getFiltered = () => {
    const filtered = !this.state.filtered;
    this.setState({ filtered });
  };

  render() {
    return (
      <span>
        <ul className="list-group container-sm">
          <li
            className={
              this.state.filtered ? "list-group-item active" : "list-group-item"
            }
            onClick={() => this.getFiltered()}
          >
            All Categories
          </li>
          {this.props.categories.map((category) => (
            <li
              key={category.name}
              className={
                this.state.filtered
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
