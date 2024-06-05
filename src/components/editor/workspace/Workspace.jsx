import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useEditorDomHandler,
  useElementStyle,
  useSelectElement,
  useTemplateDetail,
} from "../../../hooks";
import { Page1 } from "../../../templates/pages";

const Workspace = () => {
  const selectedElementId = useSelector((state) => state.editor.elementId);
  const [previouslySelectedElementId, setPreviouslySelectedElementId] =
    useState(null);
  useEditorDomHandler({ workspaceId: "workspace" });
  const { selectedElement } = useSelectElement({
    attr: selectedElementId,
  });
  const { selectedElement: previouslySelectedElement } = useSelectElement({
    attr: previouslySelectedElementId,
  });
  useElementStyle(selectedElementId);

  const style = [
    {
      outline: "3px dashed rgb(10 160 150)",
    },
  ];

  const setFocusToElement = () => {
    if (!selectedElementId && previouslySelectedElement) {
      previouslySelectedElement.style.outline = "none";
    }
    if (selectedElementId && selectedElement) {
      setPreviouslySelectedElementId(selectedElementId);
      selectedElement.style.outline = style[0].outline;
      selectedElement.dataset.editable = "true";

      if (
        previouslySelectedElement &&
        previouslySelectedElement !== selectedElement
      ) {
        previouslySelectedElement.style.outline = "none";
        delete previouslySelectedElement.dataset.editable;
      }
    }
  };

  useEffect(() => {
    setFocusToElement();
  }, [selectedElementId, selectedElement]);

  return (
    <div className="w-full bg-gray-800 min-h-full" id={"workspace"}>
      <Page1 pageId={"page1"} />
    </div>
  );
};

const Navbar = () => {
  const { data } = useTemplateDetail("navigationBar");

  return (
    <>
      {/* <div
        data-element-type={"container"}
        data-element="main"
        aria-label="navigation-bar"
        className="w-full px-5 flex items-center justify-between bg-green-700"
      >
        <div className="font-medium text-xl uppercase">
          <h1 data-element-type={"heading"} aria-label="logo">
            {data?.logo[0].value}
          </h1>
        </div>
        <ul aria-label="link-tab" className="flex items-center gap-10 py-4">
          <li>
            <a
              aria-label={`navigation-link1`}
              data-element-type={"link"}
              href={"#"}
            >
              {data?.navigationLink1[0].value}
            </a>
          </li>
          <li>
            <a
              aria-label={`navigation-link2`}
              data-element-type={"link"}
              href={"#"}
            >
              {data?.navigationLink2[0].value}
            </a>
          </li>
          <li>
            <a
              aria-label={`navigation-link3`}
              data-element-type={"link"}
              href={"#"}
            >
              {data?.navigationLink3[0].value}
            </a>
          </li>
          <li>
            <a
              aria-label={`navigation-link4`}
              data-element-type={"link"}
              href={"#"}
            >
              {data?.navigationLink4[0].value}
            </a>
          </li>
        </ul>
        <button
          data-element-type={"button"}
          aria-label="button"
          className="bg-green-300 text-green-800 rounded-md px-5 py-2 font-medium"
        >
          {data?.button[0].value}
        </button>
      </div> */}

      <Page1 />
    </>
  );
};

export default Workspace;
