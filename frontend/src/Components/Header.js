import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="header-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/addPizza"}>Add Pizza</NavLink>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
