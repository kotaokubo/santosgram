import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const IndexPage = () => {
  return (
    <Router>
      <div style={{ width: "500px", textAlign: "left" }}>
        <h1>ここがログインぺーじ</h1>
      </div>
    </Router>
  );
};
export default IndexPage;
