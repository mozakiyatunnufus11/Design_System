// Cara 1: Container menggunakan Functional Component
import React from "react";

const containerStyle = {
  backgroundColor: "#1e5aa8",
  color: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

function Container(props) {
  return (
    <div style={containerStyle}>
      <h2>Functional Component</h2>
      <p>{props.children}</p>
    </div>
  );
}

export default Container;
