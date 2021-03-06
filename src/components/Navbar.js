import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth.service";

class Navbar extends Component {
  state = { loggedInUser: null };

service = new AuthService();

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.setUser(null);
    });
  };

  render() {
    console.log(this.state.loggedInUser);
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.email}</li>
            <li>
              <Link to="/">
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
          <nav className="nav-style">
              
          <ul>
            <li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;