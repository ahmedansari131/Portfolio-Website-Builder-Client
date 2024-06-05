import React, { useId, useState } from "react";
import { cn } from "../../utils";

const Icons = (props) => {
  const {
    isHandler = false,
    IconName,
    active,
    handler,
    dataElementProperty,
    dataElementValue,
    iconSize = "1.2",
    color = "rgba(209, 213, 219, .7)",
    className,
    isValueAdjuster = false,
  } = props;
  const [intervalId, setIntervalId] = useState(null);
  const generateId = useId();
  const id = `icon-${generateId}`;

  const handleMouseDown = () => {
    if (isValueAdjuster && isHandler) {
      const id = setInterval(() => {
        handler();
      }, 200);

      setIntervalId(id);
    }
  };

  const handleMouseUp = () => {
    clearInterval(intervalId);
  };

  return (
    <div
      id={id}
      data-element-property={dataElementProperty}
      data-element-value={dataElementValue}
      className={cn(
        `relative w-fit h-full flex cursor-pointer after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-slate-800 after:border after:border-slate-500 after:hover:bg-slate-500 after:w-[1.6rem] after:h-[1.6rem] after:rounded-[.2rem]`,
        className,
        {
          ["after:bg-teal-700 after:opacity-100 after:hover:bg-teal-500 after:border-teal-500"]:
            active?.find((obj) => obj.id === id),
        }
      )}
      onClick={handler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <IconName
        style={{
          color: `${color}`,
          fontSize: `${iconSize}rem`,
          position: "relative",
          pointerEvents: "none",
          zIndex: "10",
        }}
      />
    </div>
  );
};

export default Icons;
