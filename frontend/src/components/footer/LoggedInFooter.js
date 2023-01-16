import React from "react";
import { Link } from "react-router-dom";

const LoggedInFooter = () => {
  return (
    <footer className="footer">
      <Link className="footer-logo" to="/loggedIn">
        <img src="https://placekitten.com/g/150/150" alt="Pizzeria logo"></img>
      </Link>
      <h3>
        Best Pizza <span>in Town!</span>
      </h3>
    </footer>
  );
};

export default LoggedInFooter;
