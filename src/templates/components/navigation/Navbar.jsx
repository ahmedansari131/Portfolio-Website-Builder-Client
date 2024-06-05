import React from "react";
import "./Navbar.css";
import { Container, Button, Navlinks, Logo } from "../";

const Navbar = () => {
  return (
    <Container ariaLabel={"navigation-bar"}>
      <Logo ariaLabel={"logo"} data={"Ahmed Ansari"} />
      <Navlinks data={["Home", "About", "Services", "Contact"]} />
      <Button ariaLabel={"button"} type={"Primary"} data={"Resume"} />
    </Container>
  );
};

export default Navbar;
