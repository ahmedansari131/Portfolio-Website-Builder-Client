import React, { useState } from "react";
import { StyleBlock, Input, MasterDropdown, InputLabel } from "../../../";

const PageLink = () => {
  const [pathValue, setPathValue] = useState("");

  const inputChangeHandler = (e) => {
    setPathValue(e.target.value);
  };

  const pagePath = ["External URL", "Home", "About", "Services", "Contact"];

  return (
    <StyleBlock>
      <div className="flex flex-col gap-1">
        <InputLabel label={"Link to"} />
        <MasterDropdown menuList={pagePath} />

        <Input
          placeholder={"https://www.example.com"}
          onChange={(e) => inputChangeHandler(e)}
          value={pathValue}
        />
      </div>
    </StyleBlock>
  );
};

export default PageLink;
