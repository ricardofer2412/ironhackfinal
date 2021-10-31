import React, { Component } from "react";
import SideBar from "./SideBar";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Products extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      console.log("this is products", response);
      const list = response.data;
      console.log(list);
      this.setState({
        productList: list,
      });
    });
  };

  deleteProduct = (product) => {
    const { _id } = product;
    axios.delete(`http://localhost:5000/api/products/${_id}`).then(() => {
      alert("Product Deleted");
    });
    const { history } = this.props;
    history.push("/admin/products");
  };

  render() {
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <h3>Product List</h3>
          <Link to="/admin/products/newproduct">
            <button>Create New Product</button>
          </Link>
          <div>
            {this.state.productList === null ? (
              <div>
                <p>NO DATA</p>
              </div>
            ) : (
              <div>
                {" "}
                Data
                {this.state.productList.map((product) => (
                  <div className="dataTable">
                    <p>{product.model}</p>
                    <p>{product.carrier}</p>
                    <p>{product.memory}</p>
                    <p>{product.price}</p>
                    <button onClick={() => this.deleteProduct(product)}>
                      Delete
                    </button>

                    <button onClick={() => this.editProduct(product)}>
                      Edit
                    </button>
                  </div>
                ))}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Products);
