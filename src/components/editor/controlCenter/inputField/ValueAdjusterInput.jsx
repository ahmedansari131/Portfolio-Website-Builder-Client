import React, { useEffect, useState } from "react";
import { InputLabel, ValueAdjuster } from "../../../";
import { cn } from "../../../../utils";
import { useSelector } from "react-redux";
import { useElementStyle } from "../../../../hooks";

const MenuListInput = (props) => {
  const { propertyName, className, label } = props;
  const styles = useSelector((state) => state.editor.elementStyles);
  const [value, setValue] = useState(null);
  const { elementStyleHandler } = useElementStyle();

  const getElementStyleValue = (propertyName) => {
    const value = styles?.find((property) => property[propertyName])?.[
      propertyName
    ];
    return value?.replace("px", "");
  };

  useEffect(() => {
    setValue(getElementStyleValue(propertyName) || null);
  }, [styles]);

  useEffect(() => {
    elementStyleHandler(
      propertyName,
      value,
      !isNaN(parseInt(value)) ? true : false
    );
  }, [value]);

  return (
    <div className={cn(`w-full px-2 mb-2`, className)}>
      {label && <InputLabel label={label} />}
      <div className="w-fit h-fit relative">
        <input
          value={parseInt(value) >= 1 ? parseInt(value) : 1}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full shadow-2xl bg-slate-800 outline-none border border-slate-600 rounded-[.25rem] p-1 text-sm text-slate-400"
        />

        <ValueAdjuster
          className={"absolute top-1/2 right-[.2rem] -translate-y-1/2"}
          value={value}
          valueHandler={setValue}
        />
      </div>
    </div>
  );
};

export default MenuListInput;
