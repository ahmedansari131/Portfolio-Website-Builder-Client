import React from "react";
import { StyleBlock } from "../../../";
import { cn } from "../../../../utils";
  
const SubNavbar = (props) => {
  const { subNavItem, elementType, setActiveNavItem, activeNavItem } = props;

  return (
    <StyleBlock className={"py-0 text-sm text-slate-400 mt-3 font-medium"}>
      <ul className="flex items-center gap-5 justify-start cursor-pointer ">
        {subNavItem?.map((item, index) => (
          item[elementType] && <li key={index} className={cn(`flex items-center gap-5`)}>
            {item[elementType]?.map((list, index) => (
              <span
                onClick={(e) => setActiveNavItem(list)}
                className={cn(
                  `relative py-2 after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.1rem] after:bg-teal-500 after:opacity-0 hover:text-slate-200`,
                  {
                    ["after:opacity-100 text-teal-500 hover:text-teal-500"]:
                    activeNavItem === list,
                  }
                )}
                key={index}
              >
                {list}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </StyleBlock>
  );
};

export default SubNavbar;
