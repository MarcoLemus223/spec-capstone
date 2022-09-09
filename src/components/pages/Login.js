import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Login.module.css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // return alert("Welcome back", JSON.stringify(this.state));
    this.props.nav('/')
  }

  render() {
    return (
      <div className={classes.loginBox}>
        <h2 className={classes.h2}>Sign In</h2>
        <div className={classes.email} onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className={classes.emailInput}
            placeholder="Email"
            type="email"
            name='email'
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
          {/* {console.log(this.state)} */}
        </div>
        <div
          className={classes.password}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            className={classes.passwordInput}
            placeholder="Password"
            type="password"
            name='pass'
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
          />
        </div>
        <div
          className={classes.loginbtn}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <button
            className={classes.signinbtn}
            onClick={(e) => this.handleSubmit(e)}
          >
            Sign In
          </button>
        </div>
        <div className={classes.newAcc}>
          <h4>
            Don't have an account with us{" "}
            <NavLink className={classes.nav} to="/signup">
              Create Account
            </NavLink>{" "}
            here
          </h4>
        </div>
      </div>
    );
  }
}

export default Login;
