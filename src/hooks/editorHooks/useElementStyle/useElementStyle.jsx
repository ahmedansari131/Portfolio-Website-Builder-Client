import { useEffect, useState } from "react";
import { useSelectElement } from "../../";
import { useSelector } from "react-redux";
import { rgb2hex } from "../../../utils";

const useElementStyle = () => {
  const selectedElementId = useSelector((state) => state.editor.elementId);
  const { selectedElement } = useSelectElement({ attr: selectedElementId });
  const [defaultElementStyle, setDefaultElementStyle] = useState([]);
  const stylePropertyArray = [
    "width",
    "height",
    "padding-top",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "color",
    "background-color",
    "font-family",
    "font-weight",
    "font-style",
    "font-size",
    "line-height",
    "text-decoration-line",
    "text-transform",
    "opacity",
    "border-width",
    "border-style",
    "border-color",
  ];

  const elementStyleHandler = (property, value, isNumber = false) => {
    if (selectedElement)
      selectedElement.style[property] = `${value}${isNumber ? "px" : ""}`;
  };

  const elementRemoveStyleHandler = (property) => {
    if (selectedElement) selectedElement.style.removeProperty(property);
  };

  const getDefaultElementStyle = () => {
    if (selectedElement) {
      const computedStyle = window.getComputedStyle(selectedElement);
      const updatedStyles = stylePropertyArray.map((property) => {
        if (property === "color" || property === "background-color") {
          let colorValue = computedStyle.getPropertyValue(property);
          if (colorValue === "rgba(0, 0, 0, 0)") {
            elementStyleHandler(property, "transparent");
            colorValue = "transparent";
          }
          const hexCode = rgb2hex(colorValue);
          return {
            [property]: hexCode,
          };
        } else {
          return {
            [property]: computedStyle.getPropertyValue(property),
          };
        }
      });
      setDefaultElementStyle(updatedStyles);
    }
  };

  useEffect(() => {
    getDefaultElementStyle();
  }, [selectedElement]);

  return {
    defaultElementStyle,
    elementStyleHandler,
    elementRemoveStyleHandler,
  };
};

export default useElementStyle;
