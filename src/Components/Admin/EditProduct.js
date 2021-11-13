import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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
class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleProduct();
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getSingleProduct = () => {
    const { params } = this.props.match;

    axios
      .get(`http://localhost:5000/api/products/${params.id}`)
      .then((response) => {
        const product = response.data;
        this.setState({
          model: product.model,
          price: product.price,
          carrier: product.carrier,
          memory: product.memory,
          category: product.category,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("text");
    const { params } = this.props.match;
    const { model, price, carrier, memory, category } = this.state;
    console.log(params.id);

    axios
      .put(`http://localhost:5000/api/products/${params.id}`, {
        model,
        price,
        carrier,
        memory,
        category,
      })
      .then(() => {
        console.log("Updated");
        const { history } = this.props;
        history.push("/admin/products");
      })
      .catch((error) => console.log(error));
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
                  variant="outlined"
                  name="model"
                  value={model}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  select
                  label="Carrier"
                  InputProps={{ name: "carrier" }}
                  value={this.state.carrier}
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

export default EditProduct;
