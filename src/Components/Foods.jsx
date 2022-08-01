import React, { Component } from "react";
import _ from "lodash";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";
import { getFoods } from "../Services/fakeFoodService";
import { getCategories } from "../Services/fakeCategoryServices";
import { paginate } from "../Utils/Paginate";
import FoodsTable from "./FoodsTable";

const DEFAULT_CATEGORY = { _id: "", name: "All categories" };

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 4,
    selectedPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const categories = [DEFAULT_CATEGORY, ...getCategories()];
    this.setState({ foods: getFoods(), categories });
  }

  handleFavorite = (food) => {
    const newFoods = [...this.state.foods];
    const index = newFoods.indexOf(food);
    newFoods[index] = { ...food };
    newFoods[index].isFavorite = !newFoods[index].isFavorite;
    this.setState({ foods: newFoods });
  };

  handleDelete = (id) => {
    const foods = this.state.foods.filter((food) => food._id !== id);
    this.setState({ foods });
  };

  handlePageChange = (page) => this.setState({ selectedPage: page });

  handleItemSelect = (item) =>
    this.setState({ selectedCategory: item, selectedPage: 1 });

  handleSort = (sortColumn) => this.setState({ sortColumn });

  getPaginatedFoods() {
    const {
      foods: allFoods,
      pageSize,
      selectedPage,
      selectedCategory,
      sortColumn,
    } = this.state;

    const filteredFoods = selectedCategory._id
      ? allFoods.filter((f) => f.category._id === selectedCategory._id)
      : allFoods;

    const sortedFoods = _.orderBy(
      filteredFoods,
      [sortColumn.path],
      [sortColumn.order]
    );

    const foods = paginate(sortedFoods, selectedPage, pageSize);

    return { foods, filteredCount: filteredFoods.length };
  }

  render() {
    const {
      foods: allFoods,
      pageSize,
      selectedPage,
      categories,
      selectedCategory,
      sortColumn,
    } = this.state;
    const {
      handleDelete,
      handleFavorite,
      handlePageChange,
      handleItemSelect,
      handleSort,
    } = this;

    const { foods, filteredCount } = this.getPaginatedFoods();

    return (
      <div className="row">
        <div className="col-2 ">
          <ListGroup
            items={categories}
            onItemSelect={handleItemSelect}
            selectedItem={selectedCategory}
          />
        </div>
        <div className="col">
          <p>Showing {filteredCount} foods in the database</p>
          {filteredCount > 0 && (
            <FoodsTable
              foods={foods}
              sortColumn={sortColumn}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              onSort={handleSort}
            />
          )}
          <Pagination
            itemCount={filteredCount}
            pageSize={pageSize}
            selectedPage={selectedPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Foods;
