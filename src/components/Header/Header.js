import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <Link to="/" className="header-text">
        Modern Walk
      </Link>
    </div>
  );
};

export default Header;
