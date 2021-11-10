import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div>navbar</div>
        <div className="widget-container">
          <div className="widget">
            <h2>Order Count</h2>
          </div>
          <div className="widget">
            <h2>Order Count</h2>
          </div>
        </div>
        <div>
          <div className="lg-widget">
            <h3>List</h3>
          </div>
        </div>
      </div>
    );
  }
}
