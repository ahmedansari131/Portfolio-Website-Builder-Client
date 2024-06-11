import React from "react";
import { cn } from "../../utils";
import { buttonTypes } from "../../utils";

const Button = (props) => {
  let { type, children, className = "" } = props;
  // console.log(className);

  switch (type) {
    case buttonTypes.PRIMARY:
      className += " bg-gradient";
      break;

    case buttonTypes.SECONDARY:
      className += " bg-mint border-none text-blue font-semibold font-primary";
      break;

    case buttonTypes.TERTIARY:
      className +=
        " bg-transparent text-teal-600 border-none hover:text-teal-700";
      break;

    case buttonTypes.SPECIAL:
      className += " bg-gradient-special";
      break;

    default:
      break;
  }
console.log(className)
  return (
    <button
      className={cn(
        `font-secondary px-6 py-2 rounded-md text-mint text-lg border border-mintExtreme border-opacity-40 hover:bg-mintExtreme hover:bg-opacity-30 transition-all duration-200 active:bg-opacity-60`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
