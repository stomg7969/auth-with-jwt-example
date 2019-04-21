import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PasswordUpdate from "./PasswordUpdate";
// import dotenv from "dotenv";
// require("dotenv").config({ path: __dirname + "/./../../.env" });

class UserProfile extends Component {
  componentDidMount() {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("user_token");
    // const decoded = jwt.verify(token, ENV["AUTH_KEY"], dotenv.config());
    // process.env.AUTH_KEY
    const decoded = jwt.verify(token, "my_s3cr3t");

    console.log(
      "%c what is this",
      "background: #222; color: yellow",
      jwt,
      decoded
    );
  }

  render() {
    return (
      <div>
        <h3>profile</h3>
        <Switch>
          <Route path="/user/profile/udpate" component={PasswordUpdate} />
          <Route
            path="/user/profile"
            render={() => {
              return (
                <Link to="/user/profile/update">
                  <button>Change PW</button>
                </Link>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default UserProfile;
