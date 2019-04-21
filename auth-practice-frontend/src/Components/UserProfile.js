import React, { Component } from "react";
import dotenv from "dotenv";

class UserProfile extends Component {
  componentDidMount() {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("user_token");
    // const decoded = jwt.verify(token, ENV["AUTH_KEY"], dotenv.config());
    const decoded = jwt.verify(token, "my_s3cr3t");
    // Ethan, how did you hide the secret key when you used jsonwebtoken at frontend?
    // Ethan, how did you use decoded jwt to find the user object? .find?

    console.log(
      "%c what is this",
      "background: #222; color: yellow",
      jwt,
      decoded,
      dotenv.config()
    );
  }

  render() {
    return (
      <div>
        <h3>profile</h3>
      </div>
    );
  }
}

export default UserProfile;
