import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="top-header"></div>
      <div className="header-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="heading gredient-h1">Photo gallery</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
