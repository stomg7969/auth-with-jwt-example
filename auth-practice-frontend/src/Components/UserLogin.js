import React from "react";
import { withRouter } from "react-router-dom";

class UserLogin extends React.Component {
  state = {
    name: "",
    password: ""
  };
  // listens to changes and sets states
  changeListener = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // listens to submit and lets user log in
  submitListener = e => {
    e.preventDefault();
    const { name, password } = this.state;
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: name,
          password: password
        }
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          this.setState({ name: "", password: "" });
          this.props.history.push("/login");
        } else {
          this.props.currentUser(data);
          localStorage.setItem("user_token", data.jwt);
          this.props.history.push("/");
        }
      });
  };

  render() {
    const { name, password } = this.state;
    return (
      <form onSubmit={this.submitListener}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.changeListener}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.changeListener}
        />
        <br />
        <button>Login</button>
      </form>
    );
  }
}

export default withRouter(UserLogin);
