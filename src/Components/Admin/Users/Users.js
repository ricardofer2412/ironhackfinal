import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
         <Link to="/admin/createuser">Create Users</Link>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.usersList.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user._id}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">{user.userEmail}</TableCell>
              {user.active === true ?  (
            <TableCell align="right">Active</TableCell>
            ) : (
              <div>
             <TableCell align="right">Inactive</TableCell>
              </div>
            )
  }
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

       
 
        
      </div>
    );
  }
}
