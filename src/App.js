import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import AddAsset from "./components/asset/AddAsset";
import ListAsset from "./components/asset/ListAsset";
import EditAsset from "./components/asset/EditAsset";



class App extends Component {
  state = { loggedInUser: null };

  setTheUser = (user) => {
    this.setState({ loggedInUser: user });
  };

  render() {
    console.log(this.state.loggedInUser);
    return (
      <div className="App">
        <Route
          path="*"
          render={(props) => <Navbar loggedInUser={this.loggedInUser} />}
        />
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            exact
            path="/create-asset"
            render={(props) => (
              <AddAsset setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            exact
            path="/list-asset"
            render={(props) => (
              <ListAsset setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            exact
            path="/edit-asset"
            render={(props) => (
              <EditAsset setTheUser={this.setTheUser} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
