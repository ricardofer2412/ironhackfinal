import React, { Component } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MenuItem from "@mui/material/MenuItem";

const orderStatusArr = [
  {
    value: "received",
    label: "Received",
  },
  {
    value: "processing",
    label: "Processing",
  },
  {
    value: "complete",
    label: "Complete",
  },
];

export default class EditOrder extends Component {
  state = {
    status: "",
  };
  getOrderInfo = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/orders/${params.id}`)
      .then((response) => {
        const order = response.data;
        console.log(order);
        this.setState({
          status: order.orderStatus,
        });
      });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    this.getOrderInfo();
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { params } = this.props.match;
    const { status } = this.state;
    console.log(status);

    axios
      .put(`http://localhost:5000/api/orders/${params.id}`, {
        status,
      })
      .then(() => {
        console.log("Updated");
        const { history } = this.props;
        history.push("/admin/orders");
      });
  };

  render() {
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <div className="new_product_div">
            <Typography component="h1" variant="h5">
              Edit Order Status
            </Typography>
            <form onSubmit={this.onSubmit}>
              <div className="new_product_div">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Status"
                  InputProps={{ name: "status" }}
                  value={this.state.status}
                  onChange={(e) => this.handleChange(e)}
                  margin="normal"
                  variant="outlined"
                >
                  {orderStatusArr.map((option) => (
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
                    Change Status
                  </Button>
                </div>
                <div className="submit-div">
                  <Button
                    id="cancelButton"
                    fullWidth
                    viant="contained"
                    to="/admin/orders"
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
