import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://cdn.gsstore.org/images/frontend/logo-header.svg"
              alt=""
            />
          </Link>
        </div>
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <Link to="/all-products" className="allProduct">My Products</Link>
            </li>
            <li className="navItem">
              <Link to="/create-product" className="newProduct">Create New Product</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
