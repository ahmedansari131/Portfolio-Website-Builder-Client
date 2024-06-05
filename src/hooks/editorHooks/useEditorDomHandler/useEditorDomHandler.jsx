import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getElement,
  getElementStyle,
} from "../../../app/slices/editor/editorSlice/editorSlice";
import {useElementStyle, useSelectElement} from "../../../hooks"


const useEditorDomHandler = ({ workspaceId }) => {
  const { selectedElement } = useSelectElement({ id: workspaceId });
  const [workspace, setWorkspace] = useState(null);
  const dispatch = useDispatch();
  const { defaultElementStyle } = useElementStyle();

  const assignUniqueId = (targetElement) => {
    if (targetElement && !targetElement.dataset.elementId) {
      targetElement.setAttribute(
        "data-element-id",
        Math.random().toString(36).substring(2, 15)
      );
    }
  };

  const traverseElements = (targetElement) => {
    assignUniqueId(targetElement);

    if (targetElement?.children.length > 0) {
      targetElement.childNodes.forEach((childElement) => {
        traverseElements(childElement);
      });
    }
  };

  const findParentWithAriaLabel = (element) => {
    const mainElement = element?.dataset.element;
    if (mainElement) return true;
    let parent = element.parentElement;
    while (parent) {
      if (parent.getAttribute("data-element") === "main") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  };

  const dispatcingDefaultElementStyles = () => {
    dispatch(getElementStyle(defaultElementStyle));
  };

  const handleContainerClick = (e) => {
    const targetElement = e.target;
    if (targetElement) {
      const clickedElementId = targetElement?.dataset.elementId;
      const mainElement = findParentWithAriaLabel(targetElement);
      if (clickedElementId && mainElement) {
        dispatch(
          getElement({
            elementId: clickedElementId,
            elementText: targetElement?.childNodes[0]?.data || null,
            elementAriaLabel: targetElement?.ariaLabel,
            elementType: targetElement?.dataset.elementType,
            mainElement: mainElement?.ariaLabel,
          })
        );
      }
    }
  };

  const handleContainerMouseOver = (e) => {
    const targetElement = e.target;

    if (targetElement) {
      targetElement.style.outline = "3px dashed rgba(10, 160, 150, .7)";
    }
  };

  const handleContainerMouseOut = (e) => {
    const targetElement = e.target;

    if (targetElement && !targetElement.dataset.editable) {
      targetElement.style.outline = "none";
    }
  };

  useEffect(() => {
    dispatcingDefaultElementStyles();
  }, [defaultElementStyle]);

  useEffect(() => {
    if (selectedElement) {
      setWorkspace(selectedElement);
    }
  }, [selectedElement]);

  useEffect(() => {
    if (workspace) {
      traverseElements(workspace);

      workspace?.addEventListener("click", handleContainerClick);
      workspace?.addEventListener("mouseover", handleContainerMouseOver);
      workspace?.addEventListener("mouseout", handleContainerMouseOut);
    }

    return () => {
      workspace?.removeEventListener("click", handleContainerClick);
      workspace?.removeEventListener("mouseover", handleContainerMouseOver);
      workspace?.removeEventListener("mouseout", handleContainerMouseOut);
    };
  }, [workspace]);
};

export default useEditorDomHandler;
