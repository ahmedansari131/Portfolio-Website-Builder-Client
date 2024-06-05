import React from "react";
import {
  StyleBlock,
  Heading,
  Icons,
  FormatAlignCenterIcon,
  FormatAlignJustifyIcon,
  FormatAlignLeftIcon,
  FormatAlignRightIcon,
} from "../../../";
import { useIconActiveController } from "../../../../hooks";

const CharacterAlignment = () => {
  const { active, activeValueHandler, selectIconElement } =
    useIconActiveController();

  const activeHandler = (e) => {
    console.log("object");
    const { property, value } = selectIconElement(e.target.id);
    activeValueHandler(e.target.id, property, value);
  };

  const alignmentIcons = [
    {
      name: FormatAlignLeftIcon,
      value: "left",
      property: "text-align",
    },
    {
      name: FormatAlignCenterIcon,
      value: "center",
      property: "text-align",
    },
    { name: FormatAlignRightIcon, value: "right", property: "text-align" },
    {
      name: FormatAlignJustifyIcon,
      value: "justify",
      property: "text-align",
    },
  ];

  return (
    <StyleBlock>
      <Heading heading={"Alignment"} className={"pb-2"} />
      <div className="flex items-center gap-5 flex-wrap">
        {alignmentIcons.map((icon, index) => (
          <Icons
            key={index}
            IconName={icon.name}
            active={active}
            isHandler={true}
            handler={activeHandler}
            dataElementProperty={icon.property}
            dataElementValue={icon.value}
          />
        ))}
      </div>
    </StyleBlock>
  );
};

export default CharacterAlignment;
