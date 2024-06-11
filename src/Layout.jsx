import React from "react";
import { Footer, MainContainer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </MainContainer>
  );
};

export default Layout;
