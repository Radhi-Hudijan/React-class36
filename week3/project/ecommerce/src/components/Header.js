import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="title-container">
      <h1 className="title">Products</h1>
      <div className="nav-links">
        <Link to="/">
          <h4 className="nav-link" href=" ">
            Products
          </h4>
        </Link>
        <Link to="/favorite">
          <h4 className="nav-link" href=" ">
            Favorites
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
