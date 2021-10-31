import React, { Component } from "react";
import axios from "axios";
class EditProduct extends Component {
  state = {};

  componentDidMount() {
    this.getSingleProduct();
  }

  getSingleProduct = () => {
    const { params } = this.props.match;

    axios
      .get(`http://localhost:5000/api/products/${params.id}`)
      .then((response) => {
        const product = response.data;
        this.setState(product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        EDIT PRODUCT
        <p>{this.state.model}</p>
      </div>
    );
  }
}

export default EditProduct;
