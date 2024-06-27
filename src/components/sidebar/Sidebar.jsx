import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Dashboard", path: "dashboard" },
    { name: "Accounts", path: "account" },
    { name: "Portfolio", path: "portfolio-projects" },
  ];

  return (
    <div className="border-r border-light text-mint select-none font-secondary w-full text-[1.1rem] tracking-tight h-full">
      <h1 className="font-primary text-[2.2rem] font-semibold py-4 border-b border-light pl-[1em] text-mint">
        <Link to="/">Portify</Link>
      </h1>

      <ul className="flex flex-col gap-2 px-6 py-5">
        {sidebarItems?.map((item) => (
          <NavLink
          key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              backgroundColor: isActive && "#4BDFEC",
              color: isActive && "#032b44",
            })}
            className={"rounded-md hover:bg-mintExtreme hover:bg-opacity-20"}
          >
            <li className="py-2 px-7 cursor-pointer transition-all duration-200">
              {item.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
