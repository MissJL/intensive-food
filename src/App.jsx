import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Foods from "./Components/Foods";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import NotFound from "./Components/Common/NotFound";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import RegisterForm from "./Components/RegisterForm";
import FoodForm from "./Components/FoodForm";
import { ToastContainer } from "react-toastify";
import auth from "./Services/authService";
import ProtectedRoute from "./Components/Common/ProtectedRoute";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="container mt-4">
        <ToastContainer />
        <div className="row">
          <NavBar user={user} />
          <Switch>
            <ProtectedRoute path="/foods/:_id" component={FoodForm} />
            <ProtectedRoute path="/foods/new" component={FoodForm} />
            <Route
              path="/foods"
              render={(props) => <Foods user={user} {...props} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/orders" component={Orders} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/notfound" component={NotFound} />
            <Redirect exact from="/" to="/foods" />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// en annan prop som route component har är render som används iställett för component. EX render={(props)=> <Foods/ {...props}>}.
// På så vis kan vi skicka in props till Foods.
// :id = kallas för route parameter. Vi kommer åt id:et genom match objektet.
