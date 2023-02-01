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
            <NavLink to={"/dash/pizzas"}>Pizza Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/pizzas/new"}>Add Pizza</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/users"}>User List</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/users/new"}>Add User</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/dogs"}>Dog List</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/dogs/new"}>Add Dog</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/cats"}>Cat List</NavLink>
          </li>
          <li>
            <NavLink to={"/dash/cats/new"}>Add Cat</NavLink>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
