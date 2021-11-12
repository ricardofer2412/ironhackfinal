import React, { Component } from "react";
import SideBar from "./SideBar";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";

class Orders extends Component {
  state = {
    orderList: [],
  };

  componentDidMount() {
    console.log("Loding");
    this.getAllOrders();
  }

  getAllOrders = () => {
    axios.get("http://localhost:5000/api/orders").then((response) => {
      console.log("this is products", response);
      const list = response.data;
      console.log("list order", list);
      this.setState({
        orderList: list,
      });
    });
  };

  //   deleteProduct = (product, e) => {
  //     const { _id } = product;
  //     axios.delete(`http://localhost:5000/api/products/${_id}`).then(() => {
  //       alert("Product Deleted");
  //       const { history } = this.props;
  //       history.push("/admin/products");
  //     });
  //   };

  render() {
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <h3>Orders</h3>
          <div className="table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Order #</TableCell>
                    <TableCell align="right">Vendor Name</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">Payment</TableCell>
                    <TableCell align="right">Device</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.orderList.map((order) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{order.orderNumber}</TableCell>

                      <TableCell align="right">{order.vendor.name}</TableCell>
                      <TableCell align="right">{order.vendor.email}</TableCell>
                      <TableCell align="right">{order.paymentMethod}</TableCell>
                      <TableCell align="right">
                        {order.product.device} {order.product.carrier}
                        {order.product.storage}
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

export default withRouter(Orders);