import React, { useState } from "react";
import {
  Icons,
  FormatAlignCenterIcon,
  FormatAlignJustifyIcon,
  FormatAlignLeftIcon,
  FormatAlignRightIcon,
  SubjectIcon,
} from "../../";

const TextAlignment = () => {
  const iconSize = "1.3";
  const [activeId, setActiveId] = useState(null);
  
  const activeHandler = (e) => {
    setActiveId(e.target.id);
  }

  const alignmentIcons = [
    FormatAlignLeftIcon,
    FormatAlignCenterIcon,
    FormatAlignRightIcon,
    SubjectIcon,
    SubjectIcon,
    FormatAlignJustifyIcon,
  ];

  return (
    <div className="flex items-center justify-between ">
      {alignmentIcons.map((icon, index) => (
        <Icons
          key={index}
          IconName={icon}
          iconSize={iconSize}
          activeId={activeId}
          handler={activeHandler}
          isHandler={true}
        />
      ))}
    </div>
  );
};

export default TextAlignment;
