import React, { Component } from "react";
import AssetService from "./asset-service";

class AddAsset extends Component {
  state = { name: "" };

  service = new AssetService();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;

    this.service
      .addAsset(name)
      .then((response) => {
        this.setState({ name: "" });
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
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <button type="submit"> Create </button>
        </form>
      </div>
    );
  }
}

export default AddAsset;
