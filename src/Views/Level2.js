import React from "react";
import { Link } from "react-router-dom";
export default function Level2() {
  return (
    <div style={{ margin: "10px auto", width: "500px", textAlign: "center" }}>
      <h1>LEVEL 2</h1>
      <Link to="/">GO TO LEVEL 1</Link>
    </div>
  );
}
