import React from "react";
import { Outlet } from "react-router-dom";
import LoggedInHeader from "../components/header/LoggedInHeader";
import LoggedInFooter from "../components/footer/LoggedInFooter";

const LoggedIn = () => {
  return (
    <React.Fragment>
      <LoggedInHeader />
      <div className="content-container">
        <Outlet />
      </div>
      <LoggedInFooter />
    </React.Fragment>
  );
}
 
export default LoggedIn;