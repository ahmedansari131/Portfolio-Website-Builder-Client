import React from "react";
import { Input, StyleBlock } from "../../../";
import { useElementData } from "../../../../hooks";
import { useDispatch } from "react-redux";
import {
  getElement,
  getTemplateDetail,
} from "../../../../app/slices/editor/editorSlice/editorSlice";
import {
  link,
} from "../../../../utils/editorUtils/elementCategory";

const TextInput = (props) => {
  const { label } = props;
  const {
    elementText,
    elementId,
    elementType,
    elementAriaLabel,
    templateDetail,
    mainElement,
  } = useElementData();

  const dispatch = useDispatch();

  const templateKey = mainElement
    ?.split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  const convertToCamelCase = (ariaLabel) => {
    const updatedAriaLabel = ariaLabel
      ?.split("-")
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

    return updatedAriaLabel;
  };

  const dispatchingValues = (value) => {
    const ariaLabel = convertToCamelCase(elementAriaLabel);
    dispatch(
      getElement({
        elementText: value,
        elementId,
        elementAriaLabel,
        mainElement,
        elementType,
      })
    );

    if (elementType !== link.value)
      dispatch(
        getTemplateDetail({
          ...templateDetail,
          [templateKey]: {
            ...templateDetail[templateKey],
            [ariaLabel]: { value: value },
          },
        })
      );

    if (elementType === link.value) {
      console.log(
        templateDetail[templateKey]?.[
          ariaLabel.slice(0, ariaLabel.length - 1)
        ].map((obj, index) => ariaLabel === elementAriaLabel)
      );

      // dispatch(
      //   getTemplateDetail({
      //     ...templateDetail,
      //     [templateKey]: {
      //       ...templateDetail[templateKey],
      //       [ariaLabel]: [ariaLabel]?.map((obj, index) =>
      //         obj?.[`page${index + 1}`] === elementText ? { value: value } : {...obj}
      //       ),
      //     },
      //   })
      // );
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatchingValues(value);
  };

  return (
    <StyleBlock heading={"Text"}>
      <Input
        type={"text"}
        label={label}
        value={elementText}
        onChange={inputChangeHandler}
      />
    </StyleBlock>
  );
};

export default TextInput;
