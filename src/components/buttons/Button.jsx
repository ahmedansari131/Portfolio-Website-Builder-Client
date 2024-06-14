import React from "react";
import { cn } from "../../utils";
import { buttonTypes } from "../../utils";

const Button = (props) => {
  const { buttonType, children, handler=null, className = "" } = props;
  let buttonStyles = "";
  switch (buttonType) {
    case buttonTypes.PRIMARY:
      buttonStyles = "bg-gradient";
      break;

    case buttonTypes.SECONDARY:
      buttonStyles = "bg-mint border-none text-blue font-semibold";
      break;

    case buttonTypes.TERTIARY:
      buttonStyles =
        "bg-transparent text-teal-600 border-none hover:text-teal-700";
      break;

    case buttonTypes.SPECIAL:
      buttonStyles = "bg-gradient-special";
      break;

    default:
      break;
  }
  return (
    <div>
      <button
        className={cn(
          `${buttonStyles} font-secondary px-6 py-2 rounded-md text-mint text-lg border border-mintExtreme border-opacity-40 hover:bg-mintExtreme hover:bg-opacity-30 transition-all duration-200 active:bg-opacity-60`,
          className
        )}
        onClick={handler}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
