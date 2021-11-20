import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const carrierList = [
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

  getSingleProduct = () => {
    const { params } = this.props.match;

    axios
      .get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
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
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { params } = this.props.match;
    const { model, price, carrier, memory, category } = this.state;

    axios
      .put(`${process.env.REACT_APP_API_URL}/products/${params.id}`, {
        model,
        price,
        carrier,
        memory,
        category,
      })
      .then(() => {
        const { history } = this.props;
        history.push("/admin/products");
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { model, memory, price, category } = this.state;
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <div className="new_product_div">
            <Typography component="h1" variant="h5">
              Edit Product
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
                  name="carrier"
                  InputProps={{ name: "carrier" }}
                  value={this.state.carrier}
                  onChange={(e) => this.handleChange(e)}
                  margin="normal"
                  variant="outlined"
                >
                  {carrierList.map((comp) => (
                    <MenuItem key={comp.value} value={comp.value}>
                      {comp.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  label="Memory"
                  InputProps={{ name: "memory" }}
                  name="memory"
                  value={memory}
                  onChange={(e) => this.handleChange(e)}
                  SelectProps={{
                    MenuProps: {},
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {memoryList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  label="Category"
                  name="category"
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
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
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
