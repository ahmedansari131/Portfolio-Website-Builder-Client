import React from "react";
import { StyleBlock, StyleInput } from "../../../";

const Color = (props) => {
  const { textColor = false, backgroundColor = false } = props;

  return (
    <StyleBlock heading={textColor ? "Color" : "Background"}>
      {textColor && (
        <div>
          <StyleInput className={"w-full bg-none py-0"} inputType={"color"} inputName={"color"} />
        </div>
      )}
      {backgroundColor && (
        <div>
          <StyleInput className={"w-full bg-none py-0"} inputType={"color"} inputName={"background-color"} />
        </div>
      )}
    </StyleBlock>
  );
};

export default Color;
