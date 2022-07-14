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
      <>
        <nav>
          <ul className="pagination pagination-sm">
            <li
              className={this.state.active ? "page-item active" : "page-item"}
              onClick={() => this.getActive()}
            >
              <a className="page-link">1</a>
            </li>
            <li
              className={this.state.active ? "page-item active" : "page-item"}
              onClick={() => this.getActive()}
            >
              <a className="page-link">2</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Pagination;
