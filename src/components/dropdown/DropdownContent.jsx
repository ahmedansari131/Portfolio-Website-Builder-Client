import React from "react";
import cn from "../../utils/cn";

const DropdownContent = (props) => {
  const { className, children } = props;

  return (
    <div className={cn("py-2 rounded-[.25rem] w-full", className)}>
      {children}
    </div>
  );
};

export default DropdownContent;
