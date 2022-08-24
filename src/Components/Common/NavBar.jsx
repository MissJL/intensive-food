import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    titles: [
      { label: "Foods", path: "/foods" },
      { label: "Customers", path: "/customers" },
      { label: "Orders", path: "/orders" },
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
      { label: "Profile", path: "/profile", auth: true },
      { label: "Logout", path: "/logout", auth: true },
    ],
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="container-fluid">
          <Link className="navbar-brand" to="/">
            Intensive Foods
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/foods">
                Foods
              </NavLink>
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
              {!this.props.user && (
                <>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </>
              )}
              {this.props.user && (
                <>
                  <NavLink className="nav-link" to="/profile">
                    {this.props.user.name}
                  </NavLink>
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </span>
      </nav>
    );
  }
}

export default NavBar;

// {this.state.titles.map((title) => (
// {title.auth ? this.props.user && <NavLink to={title.path} key={title.label} className="nav-link">
//      {title.label}
//   </NavLink> : <NavLink to={title.path} key={title.label} className="nav-link">
//      {title.label}
//   </NavLink>}
// ))}
