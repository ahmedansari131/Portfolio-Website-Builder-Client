import React from "react";
import { Navbar, Sidebar } from "../../components";
import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
      <div className="flex items-start w-full bg-blue h-screen">
        <div className="w-1/5 h-full">
          <Sidebar />
        </div>

        <div className="p-8 w-full h-full">
          <Outlet />
        </div>
      </div>
  );
};

export default Settings;
