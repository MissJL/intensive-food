import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="pagination pagination-sm">
            {this.state.pages.map((page) => (
              <li
                key={page.page}
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
