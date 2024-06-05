import React from "react";
import "./Logo.css";

const Logo = (props) => {
  const { data, ariaLabel } = props;
  
  return (
    <h1 data-element-type={"heading"} aria-label={ariaLabel}>
      {data}
    </h1>
  );
};

export default Logo;
