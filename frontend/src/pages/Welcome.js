import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="page-content welcome-content">
        <h1>Welcome!</h1>
        <p>
          <Link to="/loggedIn/reviews">View Pizza Reviews</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
