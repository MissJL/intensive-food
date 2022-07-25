import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { onActive, pages } = this.props;
    return (
      <>
        <nav>
          <ul className="pagination pagination-sm">
            {pages.map((page) => (
              <li
                key={page.pageNr}
                className={page.active ? "page-item active" : "page-item"}
                onClick={() => onActive(page)}
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
