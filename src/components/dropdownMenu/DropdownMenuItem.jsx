import React from "react";
import { MenuItem } from "@headlessui/react";
import { cn } from "../../utils";
import { Link } from "react-router-dom";

const DropdownMenuItem = (props) => {
  const { className, item, path, action, focusColor = "" } = props;

  return (
    <MenuItem>
      {({ focus }) => (
        <Link
        onClick={action}
          to={path}
          className={cn(
            "block px-4 py-2 text-[1rem] font-secondary tracking-tighter rounded-md",
            focus ? focusColor || "bg-mintHover text-black" : "text-blue",
            { [className]: !focus }
          )}
        >
          {item}
        </Link>
      )}
    </MenuItem>
  );
};

export default DropdownMenuItem;
