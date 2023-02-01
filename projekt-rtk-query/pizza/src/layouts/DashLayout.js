import React from "react";
import { Outlet } from "react-router-dom";

const DashLayout = (props) => {
  return (
    <React.Fragment>
        <Outlet />
    </React.Fragment>
  );
};

export default DashLayout;
