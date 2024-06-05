import React from "react";
import "./Button.css";

const Button = (props) => {
  const { data, ariaLabel, type } = props;
  return <button data-element-type={"button"} aria-label={ariaLabel}>{data}</button>;
};

export default Button;
