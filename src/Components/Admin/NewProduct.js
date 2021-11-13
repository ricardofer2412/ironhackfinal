import React, { Component } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const carriers = [
  {
    value: "verizon",
    label: "Verizon",
  },
  {
    value: "att",
    label: "AT&T",
  },
  {
    value: "t-mobile",
    label: "T-Mobile",
  },
  {
    value: "unlocked",
    label: "Unlocked",
  },
];

const memoryList = [
  {
    value: "64GB",
    label: "64GB",
  },
  {
    value: "128GB",
    label: "128GB",
  },
  {
    value: "32GB",
    label: "32GB",
  },
  {
    value: "256GB",
    label: "256GB",
  },
  {
    value: "512GB",
    label: "512GB",
  },
];

const categoryList = [
  {
    value: "iphone",
    label: "iPhone",
  },
  {
    value: "samsung",
    label: "Samsung",
  },
  {
    value: "pixel",
    label: "Pixel",
  },
];

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      carrier: "",
      memory: "",
      price: "",
      category: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { model, carrier, memory, price, category } = this.state;
    axios
      .post("http://localhost:5000/api/products", {
        model,
        carrier,
        memory,
        price,
        category,
      })
      .then(() => {
        this.setState({
          model: "",
          price: "",
          memory: "",
          carrier: "",
          category: "",
        });
        // alert("New Product Added");
        const { history } = this.props;
        history.push("/admin/products");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { model, carrier, memory, price, category } = this.state;
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <div className="new_product_div">
            <Typography component="h1" variant="h5">
              New Product
            </Typography>
            <form onSubmit={this.onSubmit}>
              <div className="new_product_div">
                <TextField
                  label="Model"
                  variant="outlined"
                  name="model"
                  value={model}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  select
                  label="Carrier"
                  InputProps={{ name: "carrier" }}
                  value={carrier}
                  onChange={(e) => this.handleChange(e)}
                  // style={{ width: 250 }}
                  SelectProps={{
                    MenuProps: {},
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {carriers.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Memory"
                  InputProps={{ name: "memory" }}
                  value={memory}
                  onChange={(e) => this.handleChange(e)}
                  SelectProps={{
                    MenuProps: {},
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {memoryList.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  select
                  label="Category"
                  InputProps={{ name: "category" }}
                  value={category}
                  onChange={(e) => this.handleChange(e)}
                  SelectProps={{
                    MenuProps: {},
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {categoryList.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  InputProps={{ name: "price" }}
                  label="Price"
                  variant="outlined"
                  name="price"
                  value={price}
                  onChange={(e) => this.handleChange(e)}
                />
                <div className="submit-div">
                  <Button
                    // style={{ backgroundColor: "#5e35b1", height: "px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                    a
                  >
                    Create
                  </Button>
                </div>
                <div className="submit-div">
                  <Button
                    id="cancelButton"
                    fullWidth
                    viant="contained"
                    to="/admin/products"
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

export default withRouter(NewProduct);
