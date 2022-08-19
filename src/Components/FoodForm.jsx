import React from "react";
import Joi from "joi";
import Form from "./Common/Form";
import { getCategories } from "../Services/categoryService";
import { saveFood, getFood } from "../Services/foodService";

class EditFood extends Form {
  state = {
    data: { name: "", categoryId: "", numberInStock: "", price: "" },
    errors: {},
    categories: [],
  };

  schema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.number().min(0).max(100).required().label("Stock"),
    price: Joi.number().min(0).max(10).required().label("Price"),
  });

  async componentDidMount() {
    await this.populateCategories();
    await this.populateFood();
  }

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }
  async populateFood() {
    try {
      const foodId = this.props.match.params._id;
      if (foodId === "new") return;

      const { data: food } = await getFood(foodId);
      this.setState({ data: this.mapToViewModel(food) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/notfound");
    }
  }

  mapToViewModel(food) {
    return {
      _id: food._id,
      name: food.name,
      categoryId: food.category._id,
      numberInStock: food.numberInStock,
      price: food.price,
    };
  }

  doSubmit = async () => {
    await saveFood(this.state.data);

    this.props.history.push("/foods");
    console.log("SAVED");
  };

  render() {
    return (
      <div>
        <div className="container mt-4">
          <h1>Food Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderSelect("categoryId", "Category", this.state.categories)}
            {this.renderInput("numberInStock", "Number in Stock")}
            {this.renderInput("price", "Price")}
            {this.renderButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default EditFood;
