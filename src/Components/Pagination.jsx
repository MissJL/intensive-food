import React, { Component } from "react";

class Pagination extends Component {
  state = {
    active: false,
  };

  getActive = () => {
    const page = !this.state.active;
    this.setState({ active: page });
  };

  render() {
    return (
      <nav>
        <ul className="pagination pagination-sm">
          {this.props.pages.map((page) => (
            <li
              key={page}
              className={this.state.active ? "page-item active" : "page-item"}
              onClick={() => this.getActive()}
            >
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
