import React, { useId } from "react";
import { InputLabel } from "../../";
import { cn } from "../../../utils";

const Input = (props) => {
  const { className, label, isNumber } = props;
  const inputId = useId();

  return (
    <>
      <div className="flex flex-col items-start">
        {label && <InputLabel label={label} htmlFor={`input-${inputId}`} />}
        <div className="bg-gray-700 w-full rounded-sm border border-gray-600 flex items-center">
          <input
            autoComplete="off"
            id={`input-${inputId}`}
            className={cn(
              `bg-inherit px-2 py-1 outline-none text-sm w-full`,
              className
            )}
            {...props}
          />
          {isNumber && (
            <span className="px-2 text-sm text-gray-400 border-l border-gray-600">
              px
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
