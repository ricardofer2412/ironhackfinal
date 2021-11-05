import React, { Component } from "react";
import authService from "./auth-services";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = { username: "", password: "" };

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (e) => {
    e.preventDefault();
    authService.signup(this.state).then((data) => {
      console.log({ data });
      this.setState({
        username: "",
        password: "",
      });

      // upon successfull
      this.props.history.push("/");
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit"> Signup </button>
        </form>

        <p>
          Already have an account?
          <Link to={"/"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
