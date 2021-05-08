import React, { Component } from "react";
import AssetService from "./asset-service";

class EditAsset extends Component {
  state = { assets: [] };
  service = new AssetService();

  getAssets = () => {
    this.service
      .getAssets()
      .then((assets) => {
        this.setState({ assets: assets });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.getAssets();
  }
  render() {
    console.log(this.state.assets);
    return (
      <ul>
        {this.state.assets.map((asset) => {
          return <li key={asset._id}>{asset.name}</li>;
        })}
      </ul>
    );
  }
}

export default EditAsset;
