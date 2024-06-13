import React from "react";
import { cn } from "../../utils";

const InputField = (props, ref) => {
  const { type, label, placeholder, inputClassName, labelClassName } = props;
  return (
    <div className="flex flex-col">
      {label && (
        <label className={cn(`text-lg`, labelClassName)} htmlFor="">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          `px-4 py-2 text-white outline-none border border-mintExtreme border-opacity-20 focus:border-opacity-55 hover:bg-opacity-15 transition-all duration-200 rounded-md bg-mintExtreme bg-opacity-10 placeholder:text-sm placeholder:text-mint placeholder:text-opacity-45 font-secondary`,
          inputClassName
        )}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(InputField);
