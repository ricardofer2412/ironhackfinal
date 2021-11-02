import React, { Component } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import { withRouter } from "react-router-dom";

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      carrier: "",
      memory: "",
      price: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { model, carrier, memory, price } = this.state;
    axios
      .post("http://localhost:5000/api/products", {
        model,
        carrier,
        memory,
        price,
      })
      .then(() => {
        this.setState({
          model: "",
          price: "",
          memory: "",
          carrier: "",
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

export default withRouter(NewProduct);
