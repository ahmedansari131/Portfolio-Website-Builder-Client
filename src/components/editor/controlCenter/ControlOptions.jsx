import React, { useEffect, useState } from "react";
import {
  Heading,
  Label,
  Dimension,
  Border,
  Font,
  PageLink,
  TextInput,
  SubNavbar,
  Color,
  Characters,
  CharacterAlignment,
} from "../../";
import { useElementData } from "../../../hooks";

const ControlOptions = (props) => {
  const { globalOptions, subNavItem } = props;
  const { elementId, elementType, elementAriaLabel, elementText } =
    useElementData();
  const [activeNavList, setActiveNavList] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const subNavbarItemTraverser = () => {
    const list = subNavItem?.find((item) => {
      if (elementType in item) {
        return item;
      }
    });

    setActiveNavItem(list?.[elementType][0]);
    setActiveNavList(list?.[elementType]);
  };

  useEffect(() => {
    subNavbarItemTraverser();
  }, [subNavItem]);

  return (
    <>
      {globalOptions &&
        globalOptions?.map((option) => (
          <div
            key={option.id}
            className="mt-7 flex flex-col gap-1 border-b border-gray-600 pb-4"
          >
            <div className="px-5">
              <Heading heading={option.heading} className="" />
            </div>

            <div className="mt-1">
              {option?.subOption?.map((subOption, index) => (
                <Label
                  key={index}
                  label={subOption.label}
                  icon={subOption.icon}
                  style={"px-5 py-2 hover:bg-gray-600"}
                />
              ))}
            </div>
          </div>
        ))}

      {elementId && (
        <SubNavbar
          subNavItem={subNavItem}
          elementType={elementType}
          setActiveNavItem={setActiveNavItem}
          activeNavItem={activeNavItem}
        />
      )}

      {elementText && activeNavItem?.toLowerCase() === "text" && (
        <>
          <TextInput />

          {elementType === "link" && (
            <div key={elementAriaLabel}>
              <PageLink />
            </div>
          )}

          <Font />
          <Characters />
          <CharacterAlignment />
        </>
      )}

      {elementId && activeNavItem?.toLowerCase() === "dimension" && (
        <Dimension />
      )}

      {elementId && activeNavItem?.toLowerCase() === "style" && (
        <>
          <Color textColor={true} />
          <Color backgroundColor={true} />
          <Border />
        </>
      )}

      {elementId && activeNavItem?.toLowerCase() === "normal" && (
        <>
          <Color textColor={true} />
          <Color backgroundColor={true} />
        </>
      )}

      {elementId && activeNavItem?.toLowerCase() === "hover" && (
        <>
          <Color textColor={true} />
          <Color backgroundColor={true} />
        </>
      )}
    </>
  );
};

export default ControlOptions;
