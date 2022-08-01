import React, { Component } from "react";
import TableBody from "./Common/TableBody";
import TableHeader from "./Common/TableHeader";
import Favorite from "./Common/Favorite";

class FoodsTable extends Component {
  columns = [
    { label: "Name", path: "name" },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    {
      key: "Favorite",
      content: (food) => (
        <Favorite
          isFavorite={food.isFavorite}
          onFavorite={() => this.props.onFavorite(food)}
        />
      ),
    },
    {
      key: "Delete",
      content: (food) => (
        <button
          onClick={() => this.props.onDelete(food._id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { foods, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={foods} columns={this.columns} />
      </table>
    );
  }
}

export default FoodsTable;
