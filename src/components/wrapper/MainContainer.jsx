import React from "react";
import { cn } from "../../utils";

const MainContainer = (props) => {
  const { children, className } = props;
  return (
    <div className={cn(`w-full min-h-screen bg-slate-900 text-gray-200`, className)}>{children}</div>
  );
};

export default MainContainer;
