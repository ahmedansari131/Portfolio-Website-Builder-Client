import React, { useState, useEffect } from "react";
import {
  MenuList,
  DropdownContent,
  FloatingDropdown,
  InputLabel,
  DropdownLabel,
  ValueAdjusterInput,
} from "../";
import { useDropdownControl, useElementStyle } from "../../hooks";

const MasterDropdown = (props) => {
  const { menuList, label, name, isListInput } = props;
  const { toggleDropdown, dropdownId } = useDropdownControl();
  const [listValue, setListValue] = useState(menuList[0]);
  const [activeListId, setActiveListId] = useState(menuList[0]);
  const { elementStyleHandler } = useElementStyle();

  useEffect(() => {
    elementStyleHandler(
      name,
      listValue,
      !isNaN(parseInt(listValue)) ? true : false
    );
  }, [listValue]);

  return (
    <>
      <InputLabel label={label} />
      <div className="relative">
        <DropdownLabel
          onClick={() => toggleDropdown(dropdownId)}
          label={listValue}
          isNumber={isListInput}
        />

        <FloatingDropdown id={dropdownId}>
          <DropdownContent>
            {isListInput && <ValueAdjusterInput propertyName={name} />}
            {menuList?.map((item) => (
              <MenuList
                key={item}
                onClick={(e) => {
                  setActiveListId(e.target.id);
                  setListValue(item);
                }}
                listItem={item}
                activeListId={activeListId}
              />
            ))}
          </DropdownContent>
        </FloatingDropdown>
      </div>
    </>
  );
};

export default MasterDropdown;
