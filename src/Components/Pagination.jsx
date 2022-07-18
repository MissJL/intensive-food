import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="pagination pagination-sm">
            {this.props.pages.map((page) => (
              <li
                key={page.pageNr}
                className={page.active ? "page-item active" : "page-item"}
                onClick={() => this.props.onActive(page)}
              >
                <a className="page-link">{page.pageNr}</a>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}

export default Pagination;
