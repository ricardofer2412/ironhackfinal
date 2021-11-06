import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Users extends Component {
  state = {
    usersList: [],
  };
  componentDidMount() {
    console.log("render all users");
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      console.log("All Users", response);
      const list = response.data;
      console.log(list);
      this.setState({
        usersList: list,
      });
    });
  };
  render() {
    return (
      <div>
        This show all the users
        <Link to="/admin/createuser">Create Users</Link>
        {this.state.usersList.map((user) => (
          <div>
            <p>{user._id}</p>
            <p>{user.username}</p>
            <p>{user.role}</p>
            <p>{user.userEmail}</p>
          </div>
        ))}
      </div>
    );
  }
}
