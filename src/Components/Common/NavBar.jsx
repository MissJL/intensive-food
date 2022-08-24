import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  titles = [
    { label: "Foods", path: "/foods", auth: true, out: true },
    { label: "Customers", path: "/customers", auth: true, out: true },
    { label: "Orders", path: "/orders", auth: true, out: true },
    { label: "Login", path: "/login", auth: false, out: true },
    { label: "Register", path: "/register", auth: false, out: true },
    { label: [this.props.user.name], path: "/profile", auth: true, out: false },
    { label: "Logout", path: "/logout", auth: true, out: false },
  ];

  render() {
    const filteredTitleWithAuth = this.titles.filter(
      (title) => title.auth === true
    );
    const filteredTitleWithOut = this.titles.filter(
      (title) => title.out === true
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="container-fluid">
          <Link className="navbar-brand" to="/">
            Intensive Foods
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              {this.props.user &&
                filteredTitleWithAuth.map((title) => (
                  <NavLink
                    to={title.path}
                    key={title.label}
                    className="nav-link"
                  >
                    {title.label}
                  </NavLink>
                ))}
              {!this.props.user &&
                filteredTitleWithOut.map((title) => (
                  <NavLink
                    to={title.path}
                    key={title.label}
                    className="nav-link"
                  >
                    {title.label}
                  </NavLink>
                ))}
            </div>
          </div>
        </span>
      </nav>
    );
  }
}

export default NavBar;
