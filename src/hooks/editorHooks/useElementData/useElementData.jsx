import { useSelector } from "react-redux";

const useElementData = () => {
  const elementId = useSelector((state) => state.editor.elementId);
  const elementText = useSelector((state) => state.editor.elementText);
  const elementStyles = useSelector((state) => state.editor.elementStyles);
  const elementType = useSelector((state) => state.editor.elementType);
  const elementAriaLabel = useSelector(
    (state) => state.editor.elementAriaLabel
  );
  const mainElement = useSelector((state) => state.editor.mainElement);
  const templateDetail = useSelector((state) => state.editor.templateDetail);

  return {
    elementId,
    elementText,
    elementAriaLabel,
    elementStyles,
    elementType,
    templateDetail,
    mainElement,
  };
};

export default useElementData;
