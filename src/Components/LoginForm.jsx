import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi";
import Form from "./Common/Form";
import auth from "../Services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(2).label("Username"),
    password: Joi.string().required().min(4).label("Password"),
  });

  doSubmit = async () => {
    try {
      await auth.login(this.state.data);
      const { state } = this.props.location;
      window.location = state ? state.from : "/";
    } catch (error) {
      if (error.response.status === 400) {
        const errors = { username: error.response.data };
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
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
