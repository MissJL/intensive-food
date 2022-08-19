import React, { Component } from "react";
import Table from "./Common/Table";
import Favorite from "./Common/Favorite";
import { Link } from "react-router-dom";
import { getFood } from "../Services/foodService";

class FoodsTable extends Component {
  columns = [
    {
      label: "Name",
      key: "Link",
      path: "name",
      content: (food) => (
        <Link to={`/foods/${food._id}`} onClick={() => getFood(food)}>
          {food.name}
        </Link>
      ),
    },
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
    const { onSort, foods, sortColumn } = this.props;
    return (
      <Table
        data={foods}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default FoodsTable;
