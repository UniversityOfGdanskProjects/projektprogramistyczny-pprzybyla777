import React from "react";
import { Link } from "react-router-dom";

const LoggedInHeader = (props) => {
  return ( 
    <header className="header loggedIn-header">

      <nav>
        <ul className="header-nav nav-links">
          <li>
            <Link to="/loggedIn/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>


      <a href="/loggedIn" className="header-logo">
        <img src="https://placekitten.com/g/50/50" alt="Pizza Logo"></img>
      </a>

    </header>
   );
}
 
export default LoggedInHeader;