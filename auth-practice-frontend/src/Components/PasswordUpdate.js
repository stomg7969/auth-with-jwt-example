import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PasswordUpdate extends Component {
  state = {
    currentPW: "",
    newPW: "",
    confirmPW: ""
  };

  changeListener = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitListener = e => {
    e.preventDefault();
    const { newPW, confirmPW } = this.state;
    if (newPW === confirmPW) {
      const jwt = require("jsonwebtoken");
      const token = localStorage.getItem("user_token");
      const decoded = jwt.verify(token, "my_s3cr3t");

      fetch(`http://localhost:3000/api/v1/users/${decoded.user_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user: { password: newPW }
        })
      }).then(() => {
        alert("success");
        this.props.history.push("/");
      });
    } else {
      alert("confirm again");
    }
  };

  render() {
    const { currentPW, newPW, confirmPW } = this.state;
    return (
      <div>
        <form onSubmit={this.submitListener}>
          {/* input type is text for testing purpose */}
          <input
            type="text"
            placeholder="current password"
            name="currentPW"
            value={currentPW}
            onChange={this.changeListener}
          />
          <br />
          <input
            type="text"
            placeholder="new password"
            name="newPW"
            value={newPW}
            onChange={this.changeListener}
          />
          <br />
          <input
            type="text"
            placeholder="confirm password"
            name="confirmPW"
            value={confirmPW}
            onChange={this.changeListener}
          />
          <br />
          <button>change</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PasswordUpdate);
