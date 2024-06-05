import React from "react";
import { cn } from "../../../utils";

const Label = (props) => {
  const { label, icon, className } = props;
  return (
    <h4
      className={cn(
        `text-gray-300 text-[.9rem] w-full cursor-pointer flex items-center gap-4 justify-between`,
        className
      )}
    >
      {label} {icon && icon}
    </h4>
  );
};

export default Label;
