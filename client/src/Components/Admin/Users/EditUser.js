import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
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

class EditUser extends Component {
  state = {
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    userEmail: "",
    role: "",
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const { params } = this.props.match;

    axios
      .get(`http://localhost:5000/api/users/${params.id}`)
      .then((response) => {
        const user = response.data;

        this.setState({
          role: user.role,
          userEmail: user.userEmail,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { role, userEmail } = this.state;
    const { params } = this.props.match;

    axios
      .put(`http://localhost:5000/api/users/${params.id}`, {
        role,
        userEmail,
      })
      .then(() => {
        console.log("Updated");
        const { history } = this.props;
        history.push("/admin/users");
      });
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
              Edit User
            </Typography>
            <form onSubmit={this.handleFormSubmit}>
              <div className="new_product_div">
                <TextField
                  label="Email"
                  variant="outlined"
                  name="userEmail"
                  InputProps={{ name: "userEmail" }}
                  value={this.state.userEmail}
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
                    Save
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
    );
  }
}

export default EditUser;
