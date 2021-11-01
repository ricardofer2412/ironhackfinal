import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
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
    const { model, price, carrier, memory } = this.state;
    console.log(params.id);

    axios
      .put(`http://localhost:5000/api/products/${params.id}`, {
        model,
        price,
        carrier,
        memory,
      })
      .then(() => {
        console.log("Updated");
        const { history } = this.props;
        history.push("/admin/products");
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { model, carrier, memory, price } = this.state;
    return (
      <div className="admin-main">
        <SideBar />
        <div className="main-content">
          <form onSubmit={this.onSubmit}>
            <label> Model</label>
            <input
              type="text"
              name="model"
              value={model}
              onChange={(e) => this.handleChange(e)}
            />
            <label> Carrier</label>
            <input
              type="text"
              name="carrier"
              value={carrier}
              onChange={(e) => this.handleChange(e)}
            />
            <label> Memory</label>
            <input
              type="text"
              name="memory"
              value={memory}
              onChange={(e) => this.handleChange(e)}
            />
            <label> Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => this.handleChange(e)}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditProduct;
