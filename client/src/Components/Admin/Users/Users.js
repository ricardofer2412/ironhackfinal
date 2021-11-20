import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import "./users.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default class Users extends Component {
  state = {
    usersList: [],
    loggedInUserId: "",
    loggedInUserRole: "",
  };
  componentDidMount() {
    const user = this.props.userData;
    this.setState({
      loggedInUserId: user._id,
      loggedInUserRole: user.role,
    });
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {
      const list = response.data;
      this.setState({
        usersList: list,
      });
    });
  };

  deleteUser = (user, e) => {
    const { _id } = user;

    if (this.state.loggedInUserRole === "admin") {
      axios.delete(`${process.env.REACT_APP_API_URL}/users/${_id}`).then(() => {
        this.getAllUsers();
      });
    } else {
      alert("Sorry, you are not ADMIN");
    }
  };

  render() {
    return (
      <div className="users-main">
        <SideBar />
        <div className="widget-container-div">
          <Navbar />
          <div>
            <h3>Users</h3>
          </div>
          {this.state.loggedInUserRole === "admin" ? (
            <div className="add-div">
              <Button
                id="addProduct"
                viant="contained"
                to="/admin/createuser"
                startIcon={<AddIcon />}
                component={Link}
              >
                New User
              </Button>
            </div>
          ) : (
            <div></div>
          )}
          <div className="table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">User Id</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.usersList.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{user._id}</TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.role}</TableCell>
                      <TableCell align="right">{user.userEmail}</TableCell>
                      {user.active === true ? (
                        <TableCell align="right">Active</TableCell>
                      ) : (
                        <div>
                          <TableCell align="right">Inactive</TableCell>
                        </div>
                      )}
                      <TableCell align="right">
                        {this.state.loggedInUserRole === "admin" ? (
                          <IconButton
                            component={Link}
                            to={`/admin/users/${user._id}`}
                            style={{ backgroundColor: "white" }}
                          >
                            <CreateIcon />
                          </IconButton>
                        ) : (
                          <Tooltip title="Disable">
                            <IconButton>
                              <CreateIcon />
                            </IconButton>
                          </Tooltip>
                        )}

                        {this.state.loggedInUserRole === "admin" ? (
                          <DeleteIcon
                            style={{ color: "red" }}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this User"
                                )
                              ) {
                                this.deleteUser(user);
                              }
                            }}
                          />
                        ) : (
                          <Tooltip title="Disable">
                            <IconButton>
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
  }
}
