import { useEffect } from "react";
import { useElementData, useSelectElement } from "../../";

const useDefaultStyle = (property) => {
  const { elementId } = useElementData();
  const { selectedElement } = useSelectElement({
    attr: elementId,
  });

  const getDefaultStyle = () => {
    const computedStyle = window.getComputedStyle(selectedElement);
    const styleValue = computedStyle?.getPropertyValue(property);
  };

  useEffect(() => {
    getDefaultStyle();
  }, [selectedElement]);

  return { defaultStyleValue };
};

export default useDefaultStyle;
