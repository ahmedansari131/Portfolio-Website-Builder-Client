import React, { useId } from "react";
import { cn } from "../../utils";

const MenuList = ({ listItem, className, activeListId, ...props }) => {
  const generateId = useId();
  const id = `menu-list-${generateId}`;

  return (
    <li
      id={id}
      className={cn(
        "text-gray-300 py-1 px-3 hover:bg-slate-600 text-sm flex items-center gap-3",
        {
          ["bg-teal-600 hover:bg-teal-500"]:
            id === activeListId || listItem === activeListId,
        },
        className
      )}
      {...props}
    >
      {listItem}
    </li>
  );
};

export default MenuList;
