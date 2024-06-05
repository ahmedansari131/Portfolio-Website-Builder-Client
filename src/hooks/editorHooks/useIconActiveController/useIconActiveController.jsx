import { useState } from "react";
import { useElementStyle } from "../../";

const useIconActiveController = () => {
  const [active, setActive] = useState([]);
  const { elementStyleHandler, elementRemoveStyleHandler } = useElementStyle();

  const activeValueHandler = (id, property, value) => {
    const isIdPresent =
      active?.filter((activeObj) => activeObj.id === id).length > 0;
    if (isIdPresent) {
      setActive((prev) => [...prev.filter((activeObj) => activeObj.id !== id)]);
      elementRemoveStyleHandler(property);
      return;
    }

    const removeProperty = active?.filter((activeObj) => {
      const isPropertySame = activeObj.property === property;
      if (isPropertySame) {
        return activeObj;
      } else return null;
    });

    if (removeProperty) {
      console.log("object ", removeProperty[0]?.id);
      setActive((prev) =>
        prev.filter((obj) => obj.id !== removeProperty[0]?.id)
      );
    }

    setActive((prev) => [...prev, { id, property, value }]);
    elementStyleHandler(property, value);
  };

  const selectIconElement = (elementId) => {
    const iconElement = document.getElementById(elementId);
    const styleProperty = iconElement?.getAttribute("data-element-property");
    const styleValue = iconElement?.getAttribute("data-element-value");
    return { property: styleProperty || null, value: styleValue || null };
  };

  return { activeValueHandler, active, selectIconElement };
};

export default useIconActiveController;
