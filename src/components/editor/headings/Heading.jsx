import React from "react";
import { Icons, LinkIcon, LinkOffIcon } from "../../";
import { cn } from "../../../utils";

const Heading = (props) => {
  const {
    heading,
    isChainActive,
    chainHandler,
    className,
    isChainIcon = false,
  } = props;

  return (
    <div className="w-full">
      <h2
        className={cn(
          `text-gray-300 capitalize text-[.9rem] font-medium flex items-center justify-between`,
          className
        )}
      >
        {heading}
        {isChainIcon && (
          <span onClick={chainHandler}>
            {isChainActive ? (
              <Icons
                className={"after:bg-slate-600 active:after:bg-slate-900 after:h-[1.3rem] after:w-[1.3rem]"}
                IconName={LinkIcon}
                iconSize={"1"}
                isHandler={true}
              />
            ) : (
              <Icons
                className={"after:bg-slate-600 active:after:bg-slate-900 after:h-[1.3rem] after:w-[1.3rem]"}
                IconName={LinkOffIcon}
                iconSize={"1"}
                isHandler={true}
              />
            )}
          </span>
        )}
      </h2>
    </div>
  );
};

export default Heading;
