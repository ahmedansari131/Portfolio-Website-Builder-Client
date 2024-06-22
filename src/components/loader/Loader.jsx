import React from "react";
import { cn } from "../../utils";

const Loader = ({ className }) => {
  const dots = 5;
  const dotElements = Array.from({ length: dots }, (_, index) => (
    <div
      key={index}
      className={cn(`newtons-cradle__dot bg-blue rounded-full`, className)}
    ></div>
  ));
  return <div className={`newtons-cradle padding-inherit`}>{dotElements}</div>;
};

export default Loader;
