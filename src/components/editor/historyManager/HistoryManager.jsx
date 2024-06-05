import React from "react";
import { IconStyle, RedoIcon, UndoIcon, Label } from "../../";

const HistoryManager = () => {
  return (
    <div className="flex items-center gap-5 p-5">
      <UndoIcon
        style={{
          color: IconStyle().color,
          fontSize: IconStyle().size + "rem",
        }}
      />

      <RedoIcon
        style={{
          color: IconStyle().color,
          fontSize: IconStyle().size + "rem",
        }}
      />
    </div>
  );
};

export default HistoryManager;
