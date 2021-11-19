import React, { Component } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-admin">
        <div className="logo-div">
          <h3 className="logo">Dashboard</h3>
        </div>
        <div className="icon-div">
          <AccountCircleIcon style={{ color: "#5e35b1", fontSize: "35px" }} />
        </div>
      </div>
    );
  }
}
