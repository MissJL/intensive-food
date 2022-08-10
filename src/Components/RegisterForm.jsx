import React from "react";
import _ from "lodash";
import Joi from "joi";
import Form from "./Common/Form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .min(2)
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().allow("").label("Name"),
  });

  doSubmit = () => {
    console.log("REGISTERED");
  };

  render() {
    return (
      <div className="container mt-4">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
