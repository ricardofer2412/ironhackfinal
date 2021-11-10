import React, { Component } from "react";
import authService from "../../auth/auth-services";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  state = {
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    userEmail: "",
    role: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      role,
      userImg,
      firstName,
      lastName,
      active,
      userEmail,
    } = this.state;

    authService
      .signup(
        username,
        password,
        role,
        userImg,
        firstName,
        lastName,
        active,
        userEmail
      )
      .then((createdUser) => {
        console.log(createdUser.userEmail);
        this.setState({
          username: "",
          password: "",
          role: "",
          firstName: "",
          lastName: "",
          userEmail: "",
          active: true,
        });
        // this.props.getUser(response, true);
        this.props.history.push("/admin/users");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          CREATE NEW USER
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
            />
          </label>
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
          <label>
            email:
            <input
              type="email"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit"> Create User </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
