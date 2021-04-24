import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth.service";

class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  service = new AuthService();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.service
      .signup(email, password)
      .then((response) => {
        // login(username, password).then(() => {
        //     this.props.history.push('/');
        // })
        console.log(response);
        this.props.setTheUser(response);
        this.props.history.push("/");
      })
      .catch(() => {});
  };

  render() {
    const { password, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Signup</button>
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
