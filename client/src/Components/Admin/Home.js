import React, { Component } from "react";
import Navbar from "./Navbar";
import "./admin.css";
import axios from "axios";

export default class Home extends Component {
  state = {
    orderCount: "",
    usersCount: "",
    productsCount: "",
  };
  getOrdersCount = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders`).then((response) => {
      const orderCount = response.data.length;
      this.setState({
        orderCount: orderCount,
      });
    });
  };
  getUsersCount = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {
      const usersCount = response.data.length;
      this.setState({
        usersCount: usersCount,
      });
    });
  };
  getProductCount = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then((response) => {
      console.log("order count", response.data.length);

      const productsCount = response.data.length;
      this.setState({
        productsCount: productsCount,
      });
    });
  };

  componentDidMount() {
    this.getOrdersCount();
    this.getUsersCount();
    this.getProductCount();
  }
  render() {
    return (
      <div className="main-content">
        <Navbar />
        <div className="widget-container">
          <div className="widget-1">
            <h2 className="widget-title">Orders</h2>
            <h2 className="widget-count">{this.state.orderCount}</h2>
          </div>
          <div className="widget-2">
            <h2 className="widget-title">Users</h2>
            <h2 className="widget-count">{this.state.usersCount}</h2>
          </div>
          <div className="widget-3">
            <h2 className="widget-title">Products</h2>
            <h2 className="widget-count">{this.state.productsCount}</h2>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
