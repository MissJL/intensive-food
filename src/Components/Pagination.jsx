import React, { Component } from "react";

class Pagination extends Component {
  state = {
    page: "page-item active",
  };
  //funkar inte
  turnActive() {
    const page = "page-item";
    page += this.state.page ? "page-item" : "page-item active";
    return page;
  }

  render() {
    return (
      <>
        <nav>
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <span className="page-link" href="#" onClick={this.turnActive}>
                1
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={this.turnActive}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={this.turnActive}>
                3
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Pagination;
