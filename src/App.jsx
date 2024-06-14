import React, { useEffect } from "react";
import { MainContainer, Button, Navbar } from "./components";
import { Landing } from "./pages";

const App = () => {
  return (
    <div>
      <MainContainer>
        <Landing />
      </MainContainer>
    </div>
  );
};

export default App;
