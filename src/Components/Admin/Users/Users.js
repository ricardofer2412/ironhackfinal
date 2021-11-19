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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

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
      <div className="users-main">
        <SideBar />
        <div className="widget-container-div">
          <Navbar />
          <Link to="/admin/createuser">Create Users</Link>
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
                        <IconButton
                          component={Link}
                          to={`/admin/users/${user._id}`}
                          style={{ backgroundColor: "white" }}
                        >
                          <CreateIcon />
                        </IconButton>
                        {/* // <Link to={`/admin/products/${product._id}`}>
                        //   <p>Edit</p>
                        // </Link> */}
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
