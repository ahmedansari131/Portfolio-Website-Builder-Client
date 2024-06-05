import React, { useEffect } from "react";
import { MainContainer, Button } from "./components";
import { Editor } from "./pages";
import { useDispatch } from "react-redux";
import { getTemplateDetail } from "./app/slices/editor/editorSlice/editorSlice";
import data from "./data/template1.json";
import { buttonTypes } from "./utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemplateDetail(data));
  }, [data]);

  return (
    <div>
      <MainContainer className="p-5">
        <Button type={buttonTypes.PRIMARY} text={"Primary"} />
        <Button type={buttonTypes.SECONDARY} text={"Primary"} />
        <Button type={buttonTypes.TERTIARY} text={"Primary"} />
      </MainContainer>
    </div>
  );
};

export default App;
