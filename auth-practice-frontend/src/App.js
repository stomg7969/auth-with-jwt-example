import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UserSignup from "./Components/UserSignup";
import UserLogin from "./Components/UserLogin";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    // this get requests gives me my user profile
    // I can change 'profile' to 'users', it will authorize me to get an access to user index without touch backend.
    const token = localStorage.getItem("user_token");
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(data => this.setState({ user: data.user }));
  }
  // when new user is logged in, it will change the state and re renders the page.
  changeCurrentUser = data => {
    this.setState({ user: data.user });
  };

  // handles user log out
  clickListener = () => {
    this.setState({ user: "" });
    localStorage.removeItem("user_token");
    this.props.history.push("/");
  };
  // this page will render all buttons. when logged out, signup and log in button will render.
  // when logged in, profile and log out button will render.
  render() {
    console.log(
      "%c local Storage info: ",
      "background: #222; color: aqua",
      localStorage,
      localStorage.getItem("user_token"),
      this.state.user
    );
    return (
      <div className="App">
        <header className="App-header">
          {localStorage.length ? <h2>{this.state.user.name}</h2> : null}
          <Switch>
            <Route path="/signup" component={UserSignup} />
            <Route
              path="/login"
              render={() => <UserLogin currentUser={this.changeCurrentUser} />}
            />
            <Route path="/user/profile" component={UserProfile} />
          </Switch>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {!localStorage.length ? (
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          ) : null}
          {!localStorage.length ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : null}

          {localStorage.length ? (
            <Link to="/user/profile">
              <button>User Profile</button>
            </Link>
          ) : null}
          {localStorage.length ? (
            <button onClick={this.clickListener}>Logout</button>
          ) : null}
        </header>
      </div>
    );
  }
}

export default withRouter(App);
