import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Foods from "./Components/Foods";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import NotFound from "./Components/Common/NotFound";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import EditFood from "./Components/EditFood";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <NavBar />
          <Switch>
            <Route path="/foods/:_id" component={EditFood} />
            <Route path="/foods/new" component={EditFood} />
            <Route path="/foods" component={Foods} />
            <Route path="/customers" component={Customers} />
            <Route path="/orders" component={Orders} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/notfound" component={NotFound} />
            <Route exact path="/" component={Foods} />
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
