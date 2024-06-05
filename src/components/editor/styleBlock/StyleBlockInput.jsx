import React from "react";

const StyleBlockInput = (props) => {
  const { children, style="" } = props;
  return <div className={`flex gap-4 w-full ${style}`}>{children}</div>;
};

export default StyleBlockInput;
