import React, { Component } from "react";
import authService from "../../auth/auth-services";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

const userRole = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "sales",
    label: "Sales",
  },
];

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
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <div className="new_product_div">
            <Typography component="h1" variant="h5">
              New User
            </Typography>
            <form onSubmit={this.handleFormSubmit}>
              <div className="new_product_div">
                <TextField
                  label="Username"
                  variant="outlined"
                  name="username"
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                />{" "}
                <TextField
                  select
                  label="Role"
                  InputProps={{ name: "role" }}
                  value={this.state.role}
                  onChange={(e) => this.handleChange(e)}
                  // style={{ width: 250 }}
                  SelectProps={{
                    MenuProps: {},
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {userRole.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div className="submit-div">
                  <Button
                    // style={{ backgroundColor: "#5e35b1", height: "px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                    a
                  >
                    Create
                  </Button>
                </div>
                <div className="submit-div">
                  <Button
                    id="cancelButton"
                    fullWidth
                    viant="contained"
                    to="/admin/users"
                    component={Link}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      // <div>
      //   <form onSubmit={this.handleFormSubmit}>
      //     CREATE NEW USER
      //     <label>
      //       First Name:
      //       <input
      //         type="text"
      //         name="firstName"
      //         value={this.state.firstName}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       Last Name:
      //       <input
      //         type="text"
      //         name="lastName"
      //         value={this.state.lastName}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       Role:
      //       <input
      //         type="text"
      //         name="role"
      //         value={this.state.role}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       Username:
      //       <input
      //         type="text"
      //         name="username"
      //         value={this.state.username}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       Password:
      //       <input
      //         type="password"
      //         name="password"
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       email:
      //       <input
      //         type="email"
      //         name="userEmail"
      //         value={this.state.userEmail}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <button type="submit"> Create User </button>
      //   </form>
      // </div>
    );
  }
}

export default CreateUser;
