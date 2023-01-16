import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">

      <nav>
        <ul className="header-nav nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <a href="/" className="header-logo">
        <img src="https://placekitten.com/g/50/50" alt="Pizza Logo"></img>
      </a>

    </header>
  );
};

export default Header;
