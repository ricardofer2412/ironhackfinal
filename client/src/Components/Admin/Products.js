import React, { Component } from "react";
import SideBar from "./SideBar";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@material-ui/core/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";
import "./admin.css";
class Products extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then((response) => {
      const list = response.data;
      this.setState({
        productList: list,
      });
    });
  };

  deleteProduct = (product, e) => {
    const { _id } = product;
    axios
      .delete(`${process.env.REACT_APP_API_URL}/products/${_id}`)
      .then(() => {
        alert("Product Deleted");
        this.getAllProducts();
      });
  };

  render() {
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <div>
            <h3>Products</h3>
          </div>
          <div className="add-div">
            <Button
              id="addProduct"
              viant="contained"
              to="/admin/products/newproduct"
              startIcon={<AddIcon />}
              component={Link}
            >
              New Product
            </Button>
          </div>

          <div className="table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Model</TableCell>
                    <TableCell align="right">Carrier</TableCell>
                    <TableCell align="right">Memory</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.productList.map((product) => (
                    <TableRow
                      key={product._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="right">{product.model}</TableCell>
                      <TableCell align="right">{product.carrier}</TableCell>
                      <TableCell align="right">{product.memory}</TableCell>
                      <TableCell align="right">${product.price}</TableCell>
                      <TableCell align="right">
                        <DeleteIcon
                          style={{ color: "red" }}
                          onClick={() => this.deleteProduct(product)}
                        />
                        <IconButton
                          component={Link}
                          to={`/admin/products/${product._id}`}
                          style={{ backgroundColor: "white" }}
                        >
                          <CreateIcon />
                        </IconButton>
                        {/* // <Link to={`/admin/products/${product._id}`}>
                        //   <p>Edit</p>
                        // </Link> */}
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

export default withRouter(Products);
