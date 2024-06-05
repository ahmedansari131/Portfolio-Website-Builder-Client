import React from "react";
import { cn } from "../../utils";
import { buttonTypes } from "../../utils";

const Button = (props) => {
  const { type, text, className } = props;

  let buttonStyle = "";
  switch (type) {
    case buttonTypes.PRIMARY:
      buttonStyle =
        "bg-teal-600 text-gray-200 hover:bg-teal-800 active:bg-teal-900 border border-teal-600";
      break;

    case buttonTypes.SECONDARY:
      buttonStyle =
        "bg-transparent text-teal-600 border border-teal-600 hover:bg-teal-950 hover:bg-opacity-70 active:bg-opacity-100";
      break;

    case buttonTypes.TERTIARY:
      buttonStyle =
        "bg-transparent text-teal-600 border-none hover:text-teal-700";
      break;

    default:
      break;
  }

  return (
    <div
      className={cn(
        `bg-opacity-70 select-none py-[.5em] px-7 w-fit rounded-[.2rem] font-medium cursor-pointer bgop`,
        buttonStyle,
        className
      )}
      {...props}
    >
      {text}
    </div>
  );
};

export default Button;
