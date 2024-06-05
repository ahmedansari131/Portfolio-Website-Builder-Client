import React from "react";
import {
  MasterDropdown,
  StyleBlock,
  ValueAdjusterInput,
} from "../../../";

const Font = () => {
  const fontLists = ["Roboto", "Cabin", "Monteserrat"];

  return (
    <StyleBlock heading={"Font"}>

      <div className="w-full">
        <MasterDropdown
          label={"Font"}
          menuList={fontLists}
          name={"font-family"}
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="w-full">
          <ValueAdjusterInput
            propertyName={"font-size"}
            label={"Size"}
            className={"mb-0 px-0"}
          />
        </div>
        <div className="w-full">
          <ValueAdjusterInput
            propertyName={"letter-spacing"}
            label={"Letter spacing"}
            className={"mb-0 px-0"}
          />
        </div>
      </div>
    </StyleBlock>
  );
};

export default Font;
