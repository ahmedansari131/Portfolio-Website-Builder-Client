import React from "react";
import "./Container.css";

const Container = (props) => {
  const { children, ariaLabel, className } = props;

  return (
    <div
      data-element-type={"container"}
      data-element={"main"}
      aria-label={ariaLabel}
      className={`container ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
