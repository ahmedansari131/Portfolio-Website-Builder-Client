import React from "react";
import { cn } from "../../utils";

const Spinner = ({ className }) => {
  console.log("spinner")
  return (
    <div
      className={cn(
        `absolute left-0 top-full mt-2 w-3 h-3 border-2 border-dashed rounded-full animate-spin border-blue-500`,
        className
      )}
    ></div>
  );
};

export default Spinner;
