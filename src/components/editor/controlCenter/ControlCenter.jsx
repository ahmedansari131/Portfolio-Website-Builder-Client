import React from "react";
import {
  IconStyle,
  SettingsIcon,
  InsertDriveFileIcon as PageIcon,
  ControlOptions,
  MoreHorizIcon,
  ArrowBackIosNewIcon,
} from "../../";
import { useElementData } from "../../../hooks";
import { elementCategory } from "../../../utils";

const ControlCenter = () => {
  const { elementId, elementText, elementAriaLabel } = useElementData();

  const globalOptions = [
    {
      id: 1,
      heading: "Site",
      subOption: [
        {
          label: "Pages",
          icon: (
            <PageIcon
              style={{
                color: IconStyle().color,
                fontSize: IconStyle().size + "rem",
              }}
            />
          ),
        },

        {
          label: "Settings",
          icon: (
            <SettingsIcon
              style={{
                color: IconStyle().color,
                fontSize: IconStyle().size + "rem",
              }}
            />
          ),
        },
      ],
    },

    {
      id: 2,
      heading: "Global",
      subOption: [
        {
          label: "Background, color & font",
        },
        {
          label: "Site Wrapper",
        },
        {
          label: "Header",
        },
        {
          label: "Footer",
        },
      ],
    },
  ];

  const subNavItem = [
    { [elementCategory.HEADING]: ["Text", "Style"] },
    { [elementCategory.PARAGRAPH]: ["Text", "Style", "Paragraph"] },
    { [elementCategory.CONTAINER]: ["Dimension", "Style"] },
    { [elementCategory.BUTTON]: ["Text", "Normal", "Hover"] },
    { [elementCategory.LINK]: ["Text", "Normal", "Hover"] },
  ];


  const isText =
    elementId &&
    (elementText?.length === 0 || elementAriaLabel !== null) &&
    true;

  return (
    <div className="min-w-[17rem] max-w-[17rem] bg-gray-800 border border-gray-700 shadow-2xl flex-col items-end relative h-full overflow-y-auto select-none">
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-600 sticky top-0 bg-inherit z-50 ">
        <h2 className="font-medium text-lg capitalize flex items-center gap-2">
          {elementId && (
            <ArrowBackIosNewIcon
              style={{ fontSize: "1.5rem" }}
              className="hover:bg-gray-500 border-sm p-1"
            />
          )}
          {elementAriaLabel?.split("-").join(" ") || "Ezy Editor"}
        </h2>
        <MoreHorizIcon
          style={{ fontSize: "1.8rem" }}
          className="cursor-pointer hover:bg-gray-500 border-sm p-1"
          onClick={() => toggleDropdown()}
        />
      </div>

      <ControlOptions
        isTextPresent={isText}
        globalOptions={!elementId && globalOptions}
        subNavItem={subNavItem}
      />
    </div>
  );
};

export default ControlCenter;
