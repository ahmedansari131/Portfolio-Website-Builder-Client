import { useEffect, useState } from "react";

const useSelectElement = ({ id = null, attr = null }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    if (id || attr) {
      const element = document.querySelector(
        id ? `#${id}` : attr ? `[data-element-id="${attr}"]` : null
      );
      if (element) setSelectedElement(element);
    }
  }, [id, attr]);

  return {
    selectedElement,
  };
};

export default useSelectElement;
