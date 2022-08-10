import React from "react";
import Joi from "joi";
import Form from "./Common/Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(2).label("Username"),
    password: Joi.string().required().min(4).label("Password"),
  });

  doSubmit = () => {
    console.log("LOGGA IN");
  };

  render() {
    return (
      <div className="container mt-4">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Log in")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
