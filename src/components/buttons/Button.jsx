import React from "react";
import { cn } from "../../utils";
import { buttonTypes } from "../../utils";

const Button = (props) => {
  const { type, children, className } = props;

  let buttonStyle = "";
  switch (type) {
    case buttonTypes.PRIMARY:
      buttonStyle = "bg-gradient";
      break;

    case buttonTypes.SECONDARY:
      buttonStyle = "bg-mintExtreme";
      break;

    case buttonTypes.TERTIARY:
      buttonStyle =
        "bg-transparent text-teal-600 border-none hover:text-teal-700";
      break;

    case buttonTypes.SPECIAL:
      buttonStyle = "bg-gradient-special";
      break;

    default:
      break;
  }

  return (
    <button
      className={cn(
        `${buttonStyle} font-secondary px-6 py-2 rounded-md text-mint text-lg border border-mintExtreme border-opacity-40 hover:bg-mintExtreme hover:bg-opacity-30 transition-all duration-200 active:bg-opacity-60`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
