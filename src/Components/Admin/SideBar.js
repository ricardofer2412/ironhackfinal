import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/admin">Home</Link>
      <h3>Profile</h3>
      <h3>Orders</h3>
      <Link to="/admin/products">Products</Link>

      <h3>Products</h3>
      <h3>Users</h3>
    </div>
  );
}
