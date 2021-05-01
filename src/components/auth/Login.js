import React, { Component } from "react";
import AuthService from "./auth.service";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = { email: "", password: "" };

  service = new AuthService();

  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     const email = this.state.username;
  //     const password = this.state.password;
  //     axios
  //       .post("http://localhost:5000/auth/sign-in", { email, password })
  //       .then((response) => {
  //         this.setState({ email: "", password: "" });
  //         this.props.setUser(response);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // axios
    //   .post(
    //     "http://localhost:5000/sign-in",
    //     { email, password },
    //     { withCredentials: true }
    //   )
    this.service
      .login(email, password)
      .then((response) => {
        this.setState({ email: "", password: "" });
        console.log(response);
        this.props.setTheUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="email"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    );
  }
}

export default Login;