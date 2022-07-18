import React, { Component } from "react";

class Pagination extends Component {
  state = {
    pages: [
      { pageNr: 1, active: false },
      { pageNr: 2, active: false },
      { pageNr: 3, active: false },
      { pageNr: 4, active: false },
      { pageNr: 5, active: false },
    ],
  };

  getActive = (page) => {
    const pages = this.state.pages.map((p) => ({ ...p, active: false }));
    pages[page.pageNr - 1].active = true;
    this.setState({ pages });
  };

  getFiltered = (filter) => {
    const filtered = this.props.categories.map((c) => ({
      ...c,
      isActive: false,
    }));
    filtered[filter.name - 1].isActive = true;
    this.setState({ filtered });
  };

  render() {
    return (
      <>
        <nav>
          <ul className="pagination pagination-sm">
            {this.state.pages.map((page) => (
              <li
                key={page.page}
                className={page.active ? "page-item active" : "page-item"}
                onClick={() => this.getActive(page)}
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
