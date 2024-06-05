import React from "react";
import { cn } from "../../../utils";

const InputLabel = (props) => {
  const { label, htmlFor, className } = props;
  return (
    <label
      className={cn(`text-[.85rem] text-slate-400 font-medium`, className)}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default InputLabel;
