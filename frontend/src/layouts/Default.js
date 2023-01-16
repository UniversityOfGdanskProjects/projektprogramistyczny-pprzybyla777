import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"

const Default = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Default;
