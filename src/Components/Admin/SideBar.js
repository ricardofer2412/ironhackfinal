import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PeopleIcon from "@mui/icons-material/People";
import Divider from "@mui/material/Divider";
import "./admin.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 style={{ color: "white", fontWeight: "200", fontSize: "15px" }}>
          Version 1.0
        </h4>
      </div>
      <Divider style={{ color: "white" }} />
      <div className="sidebar-list">
        <div className="item-list">
          <HomeIcon style={{ marginTop: "10px" }} />
          <p>
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </p>
        </div>
        <div className="item-list">
          <PersonIcon style={{ marginTop: "10px" }} />
          <p>Profile</p>
        </div>

        <div className="item-list">
          <ShoppingCartIcon style={{ marginTop: "10px" }} />
          <p>
            <Link
              to="/admin/orders"
              style={{ textDecoration: "none", color: "white" }}
            >
              Orders
            </Link>
          </p>
        </div>

        <div className="item-list">
          <PhoneAndroidIcon style={{ marginTop: "10px" }} />
          <p>
            <Link
              to="/admin/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </p>
        </div>
        <div className="item-list">
          <PeopleIcon style={{ marginTop: "10px" }} />
          <p>
            <Link
              to="/admin/users"
              style={{ textDecoration: "none", color: "white" }}
            >
              Users
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
