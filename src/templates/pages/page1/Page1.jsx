import React, { useEffect } from "react";
import { Navbar } from "../../components";
import {
  useHTMLToJSON,
  useSelectElement,
} from "../../../hooks";

const Page1 = (props) => {
  const { pageId } = props;
  const { getHtmlElements: htmlToJson } = useHTMLToJSON();
  const { selectedElement } = useSelectElement({ id: pageId });

  useEffect(() => {
    htmlToJson(selectedElement);
  }, [selectedElement]);
  
  return (
    <div id={pageId}>
      <Navbar />
    </div>
  );
};

export default Page1;
