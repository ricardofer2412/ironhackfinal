import React, { Component } from "react";
import Navbar from "./Navbar";
import "./admin.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <Navbar />
        <div className="widget-container">
          <div className="widget-1">
            <h2 className="widget-title">Orders</h2>
            <h2 className="widget-count">9</h2>
          </div>
          <div className="widget-2">
            <h2 className="widget-title">Users</h2>
            <h2 className="widget-count">10</h2>
          </div>
          <div className="widget-3">
            <h2 className="widget-title">Products</h2>
            <h2 className="widget-count">8</h2>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
