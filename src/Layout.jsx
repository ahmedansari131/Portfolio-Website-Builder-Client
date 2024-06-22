import React from "react";
import {
  Footer,
  MainContainer,
  Navbar,
  SecondaryContainer,
} from "./components";
import { Outlet } from "react-router-dom";
import { useAuth, useRestrictRoute } from "./hooks";

const Layout = () => {
  const {data} = useAuth();
  useRestrictRoute(data);
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
