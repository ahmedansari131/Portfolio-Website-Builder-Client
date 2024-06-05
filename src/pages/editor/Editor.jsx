import React from "react";
import { ControlCenter, Workspace } from "../../components";


const Editor = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="flex w-full h-full">
        <ControlCenter />
        <Workspace />
      </div>
    </div>
  );
};

export default Editor;
