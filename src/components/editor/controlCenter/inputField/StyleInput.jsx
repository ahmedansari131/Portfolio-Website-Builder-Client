import React, { useEffect, useState } from "react";
import { useElementStyle } from "../../../../hooks";
import { Input } from "../../../";
import { useSelector } from "react-redux";
import { rgb2hex } from "../../../../utils";

const StyleInput = (props) => {
  const {
    label,
    inputName: styleProperty,
    inputType,
    isNumber = false,
    className,
  } = props;

  const defaultElementStyles = useSelector(
    (state) => state.editor.elementStyles
  );
  const defaultElementStyleValue = defaultElementStyles?.find(
    (property) =>
      Object.keys(property)[0] === styleProperty && property[styleProperty]
  );
  const [styleValue, setStyleValue] = useState();
  const { elementStyleHandler } = useElementStyle();

  const inputChangeHandler = (e) => {
    setStyleValue(e.target.value);
  };

  const styleValueHandler = () => {
    if (defaultElementStyleValue?.[styleProperty].includes("rgb")) {
      return rgb2hex(defaultElementStyleValue?.[styleProperty]);
    } else {
      return styleValue;
    }
  };

  useEffect(() => {
    const defaultStyleValue = defaultElementStyleValue?.[styleProperty];
    setStyleValue(defaultStyleValue?.replace("px", ""));
  }, [defaultElementStyleValue]);

  useEffect(() => {
    elementStyleHandler(styleProperty, styleValue, isNumber);
  }, [styleProperty, isNumber, styleValue]);

  return (
    <Input
      type={inputType}
      label={label}
      value={styleValueHandler()}
      onChange={inputChangeHandler}
      name={styleProperty}
      isNumber={isNumber}
      className={className}
    />
  );
};

export default StyleInput;
