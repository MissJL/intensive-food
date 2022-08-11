import React from "react";
import Joi from "joi";
import Form from "./Common/Form";
import { getCategories } from "../Services/fakeCategoryServices";
import { saveFood } from "../Services/fakeFoodService";

class FoodForm extends Form {
  state = {
    data: { name: "", categoryId: "", numberInStock: "", price: "" },
    errors: {},
    categories: getCategories(),
  };

  schema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required(),
    categoryId: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    price: Joi.number().min(0).max(10).required().label("Price"),
  });

  doSubmit = () => {
    saveFood(this.state.data);

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

export default FoodForm;
