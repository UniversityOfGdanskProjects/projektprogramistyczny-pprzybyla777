import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "../Components/DashHeader";

const DashLayout = (props) => {
  return (
    <React.Fragment>

      <DashHeader />

      <Outlet />

    </React.Fragment>
  );
};

export default DashLayout;
