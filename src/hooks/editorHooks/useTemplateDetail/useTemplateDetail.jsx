import { useEffect, useState } from "react";
import useElementData from "../useElementData/useElementData";

const useTemplateDetail = (component) => {
  const [data, setData] = useState(null);
  const { templateDetail } = useElementData();

  useEffect(() => {
    setData(templateDetail?.[component]);
  }, [templateDetail]);

  return { data };
};

export default useTemplateDetail;
