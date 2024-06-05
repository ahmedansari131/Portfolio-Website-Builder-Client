import React from "react";
import { cn } from "../../utils";
import { DropdownIcon, KeyboardArrowDownIcon } from "..";

const DropdownLabel = ({ label, className, isNumber, ...props }) => {
  return (
    <div className="flex items-center h-full">
      <div
        {...props}
        className={cn(
          "w-full bg-slate-800 text-[.85rem] text-slate-400 border border-slate-600 cursor-pointer py-1 px-2 rounded-[.25rem] flex items-center justify-between select-none hover:bg-gray-700",
          className
        )}
      >
        {isNumber ? parseInt(label) : label || ""}
        <span className="pointer-events-none relative">
          <DropdownIcon IconName={KeyboardArrowDownIcon} />
        </span>
      </div>
    </div>
  );
};

export default DropdownLabel;
