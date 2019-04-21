import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UserSignup from "./Components/UserSignup";
import UserLogin from "./Components/UserLogin";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  componentDidMount() {
    // this get requests gives me my user profile
    // I can change 'profile' to 'users', it will still work.
    const token = localStorage.getItem("user_token");
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(data =>
        console.log(
          "%c Authenticate to be authorized GET request",
          "background: #222; color: #bada55",
          data
        )
      );
  }

  clickListener = () => {
    localStorage.removeItem("user_token");
    this.props.history.push("/");
  };

  render() {
    console.log(
      "%c local Storage info: ",
      "background: #222; color: aqua",
      localStorage,
      localStorage.getItem("user_token")
    );
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/signup" component={UserSignup} />
            <Route path="/login" component={UserLogin} />
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
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
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
