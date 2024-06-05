import React from "react";
import { Icons, KeyboardArrowDownIcon, KeyboardArrowUpIcon } from "../../../";
import { cn } from "../../../../utils";

const ValueAdjuster = (props) => {
  const { valueHandler, className } = props;

  return (
    <div
      className={cn(
        `flex flex-col bg-slate-600 w-fit h-fit rounded-[.25rem] shadow-2xl `,
        className
      )}
    >
      <Icons
        IconName={KeyboardArrowUpIcon}
        iconSize={".7"}
        className={
          "active:bg-slate-800 rounded-tl-[.25rem] rounded-tr-[.25rem] hover:bg-slate-500 after:h-0 after:w-0"
        }
        isHandler={true}
        handler={() => valueHandler((prev) => Number(prev) + 1)}
        isValueAdjuster={true}
      />
      <Icons
        IconName={KeyboardArrowDownIcon}
        iconSize={".7"}
        className={
          "active:bg-slate-800 rounded-bl-[.25rem] rounded-br-[.25rem] hover:bg-slate-500 after:h-0 after:w-0"
        }
        isHandler={true}
        handler={() =>
          valueHandler((prev) => (Number(prev) > 1 ? Number(prev) - 1 : prev))
        }
        isValueAdjuster={true}
      />
    </div>
  );
};

export default ValueAdjuster;
