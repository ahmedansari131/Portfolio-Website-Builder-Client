import React from "react";
import {
  Footer,
  MainContainer,
  Navbar,
  SecondaryContainer,
} from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <SecondaryContainer>
        <Outlet />
      </SecondaryContainer>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
