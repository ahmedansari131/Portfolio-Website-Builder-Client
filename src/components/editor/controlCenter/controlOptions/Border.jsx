import React, { useState } from "react";
import {
  Heading,
  MasterDropdown,
  StyleBlock,
  StyleBlockInput,
  StyleInput,
  ValueAdjusterInput,
} from "../../../";
import { cn } from "../../../../utils";

const Border = () => {
  const styleArray = [
    "None",
    "Solid",
    "Dashed",
    "Dotted",
    "Inset",
    "Outset",
    "Ridge",
    "Groove",
    "Double",
  ];
  const [isBorderActive, setIsBorderActive] = useState(false);

  return (
    <StyleBlock>
      <div className="flex items-center justify-between">
        <Heading heading={"Border"} />
        <div
          className={cn(
            `w-4 h-4 border border-slate-600 rounded-sm bg-slate-700 cursor-pointer flex justify-center items-center`,
            {
              ["bg-teal-600 border-teal-500"]: isBorderActive,
            }
          )}
          onClick={(e) => setIsBorderActive((prev) => !prev)}
        >
          {isBorderActive && (
            <svg
              className="pointer-events-none"
              width="13"
              height="13"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </div>
      </div>

      <div
        className={cn(`opacity-50 pointer-events-none`, {
          ["opacity-100 pointer-events-auto"]: isBorderActive,
        })}
      >
        <StyleBlockInput>
          <div className="w-full">
            <ValueAdjusterInput
              label={"Border width"}
              propertyName={"border-width"}
              className={"mb-0 px-0"}
            />
          </div>
          <div className="w-full">
            <MasterDropdown
              label={"Border style"}
              menuList={styleArray}
              name={"border-style"}
            />
          </div>
        </StyleBlockInput>
        <StyleInput
          label={"Border color"}
          inputName={"border-color"}
          inputType={"color"}
        />
      </div>
    </StyleBlock>
  );
};

export default Border;
