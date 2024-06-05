import React from "react";
import {
  Icons,
  StyleBlock,
  TitleIcon,
  FormatItalicIcon,
  FormatBoldIcon,
  FormatUnderlinedIcon,
  FormatStrikethroughIcon,
  Heading,
} from "../../../";
import { useIconActiveController } from "../../../../hooks";

const Characters = () => {
  const { activeValueHandler, active, selectIconElement } =
    useIconActiveController();

  const activeHandler = (e) => {
    const { property, value } = selectIconElement(e.target.id);
    activeValueHandler(e.target.id, property, value);
  };

  const alignmentIcons = [
    { name: TitleIcon, value: "uppercase", property: "text-transform" },
    { name: TitleIcon, value: "lowercase", property: "text-transform" },
    { name: FormatBoldIcon, value: "bold", property: "font-weight" },
    { name: FormatItalicIcon, value: "italic", property: "font-style" },
    {
      name: FormatUnderlinedIcon,
      value: "underline",
      property: "text-decoration",
    },
    {
      name: FormatStrikethroughIcon,
      value: "line-through",
      property: "text-decoration",
    },
  ];

  return (
    <StyleBlock>
      <Heading heading={"Character"} className={"pb-2"} />
      <div className="flex items-center gap-5 flex-wrap">
        {alignmentIcons.map((icon, index) => (
          <Icons
            key={index}
            IconName={icon.name}
            active={active}
            handler={activeHandler}
            isHandler={true}
            dataElementProperty={icon.property}
            dataElementValue={icon.value}
          />
        ))}
      </div>
    </StyleBlock>
  );
};

export default Characters;
