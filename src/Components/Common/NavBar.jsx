import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    titles: [
      { label: "Foods", path: "/foods" },
      { label: "Customers", path: "/customers" },
      { label: "Orders", path: "/orders" },
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
    ],
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="container-fluid">
          <a className="navbar-brand">Intensive Foods</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.state.titles.map((title) => (
                <NavLink to={title.path} key={title.label} className="nav-link">
                  {title.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </span>
      </nav>
    );
  }
}

export default NavBar;
