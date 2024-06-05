import React from "react";
import { Heading } from "../../";
import { cn } from "../../../utils";

const StyleBlock = (props) => {
  const { heading = "", children, className } = props;
  return (
    <div
      className={cn(
        `flex flex-col gap-1 border-b border-gray-700 border-opacity-60 px-5 py-4`,
        className
      )}
    >
      {heading && <Heading heading={heading} className="text-[.95rem]" />}
      {children}
    </div>
  );
};

export default StyleBlock;
