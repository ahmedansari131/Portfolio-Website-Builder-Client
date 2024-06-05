import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { cn } from "../../utils";

const FloatingDropdown = (props) => {
  const { children, id } = props;
  const dropdownWrapperRef = useRef(null);
  const [positionY, setPositionY] = useState("top-full translate-y-2");
  const dropdownState = useSelector((state) => state.dropdown.dropdownId);

  const dropdownContentStyle = {
    defaultStyle:
      "absolute left-0 w-full cursor-pointer -z-10 max-h-40 overflow-y-auto rounded-[.25rem] shadow-2xl bg-slate-700",
    isOpen: "z-10 transition-all duration-300",
    isClose: "h-0 -translate-y-6 overflow-hidden",
  };

  const adjustPosition = () => {
    if (dropdownWrapperRef.current) {
      const { top } = dropdownWrapperRef.current.getBoundingClientRect();
      if (top + dropdownWrapperRef.current.clientHeight >= window.innerHeight) {
        setPositionY("bottom-full -translate-y-2");
      } else {
        setPositionY("top-full translate-y-2");
      }
    }
  };

  useLayoutEffect(() => {
    adjustPosition();
  }, [dropdownState]);

  return (
    <>
      <div
        ref={dropdownWrapperRef}
        className={cn(
          ` overflow-x-hidden`,
          dropdownContentStyle.defaultStyle,
          positionY,
          {
            [dropdownContentStyle.isOpen]: dropdownState === id,
            [dropdownContentStyle.isClose]: dropdownState !== id,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default FloatingDropdown;
