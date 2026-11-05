// Cara 2: Container menggunakan Class Component
import React, { Component } from "react";

const containerStyle = {
  backgroundColor: "#1e5aa8",
  color: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

class Container extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <h2>Class Component</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Container;
