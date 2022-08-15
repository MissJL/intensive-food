import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log(sortColumn.path);
    this.props.onSort(sortColumn); //raise event för att uppdatera state:t högre upp
    console.log(sortColumn);
  };

  renderSortIcon(column) {
    const { sortColumn } = this.props;
    if (sortColumn.path !== column.path) return null;
    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down"></i>;
    return <i className="fa-solid fa-sort-up"></i>;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
