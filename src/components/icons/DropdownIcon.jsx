import React from "react";
import IconStyle from "./IconStyle";

const DropdownIcon = (props) => {
  const { IconName } = props;
  return (
    <>
      <IconName
        style={{
          color: "rgba(209, 213, 219, .6)",
          fontSize: IconStyle().size + "rem",
          transition: "transform 0.2s ease-in-out",
        }}
      />
    </>
  );
};

export default DropdownIcon;
