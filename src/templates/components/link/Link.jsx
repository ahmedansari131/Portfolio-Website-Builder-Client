import React from "react";
import "./Link.css";

const Link = (props) => {
  const { data, ariaLabel } = props;
  return (
    <a href={"#"} data-element-type={"link"} aria-label={ariaLabel}>
      {data}
    </a>
  );
};

export default Link;
