import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";
import { getFoods, deleteFood } from "../Services/fakeFoodService";
import { getCategories } from "../Services/fakeCategoryServices";
import { paginate } from "../Utils/Paginate";
import FoodsTable from "./FoodsTable";
import SearchBox from "./Common/SearchBox";

const DEFAULT_CATEGORY = { _id: "", name: "All categories" };

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 4,
    selectedPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
    search: "",
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
    const foods = deleteFood(id);
    this.setState(foods);
  };

  handlePageChange = (page) => this.setState({ selectedPage: page });

  handleItemSelect = (item) =>
    this.setState({ selectedCategory: item, selectedPage: 1, search: "" });

  handleSort = (sortColumn) => this.setState({ sortColumn });

  handleSearch = (search) => {
    this.setState({ search, selectedCategory: null, selectedPage: 1 });
  };

  getPaginatedFoods() {
    const {
      foods: allFoods,
      pageSize,
      selectedPage,
      selectedCategory,
      sortColumn,
      search,
    } = this.state;
    console.log(allFoods, selectedCategory);

    let filteredFoods = allFoods;
    if (search)
      filteredFoods = allFoods.filter((f) =>
        f.name.toLowerCase().startsWith(search.toLowerCase())
      );
    else if (selectedCategory && selectedCategory._id)
      filteredFoods = allFoods.filter(
        (f) => f.category._id === selectedCategory._id
      );

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
      search,
    } = this.state;
    const {
      handleDelete,
      handleFavorite,
      handlePageChange,
      handleItemSelect,
      handleSort,
      handleSearch,
    } = this;

    const { foods, filteredCount } = this.getPaginatedFoods();

    return (
      <div className="row mt-4">
        <div className="col-2 ">
          <ListGroup
            items={categories}
            onItemSelect={handleItemSelect}
            selectedItem={selectedCategory}
          />
        </div>
        <div className="col">
          <Link to="/foods/new" className="btn btn-primary mb-3">
            New Food
          </Link>
          <p>Showing {filteredCount} foods in the database.</p>
          <SearchBox value={search} onChange={handleSearch} />
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
