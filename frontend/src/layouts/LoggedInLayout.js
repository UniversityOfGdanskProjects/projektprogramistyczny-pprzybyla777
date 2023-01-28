import React from "react";
import { Outlet } from "react-router-dom";

const LoggedInLayout = (props) => {
  return (
    <React.Fragment>
        <Outlet />
    </React.Fragment>
  );
};

export default LoggedInLayout;
