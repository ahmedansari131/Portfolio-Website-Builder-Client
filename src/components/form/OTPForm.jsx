import React, { useState, useRef, useEffect } from "react";
import { InputField, ErrorField, Loader } from "../../components";

const OTPForm = (props) => {
  const { setInputValue, digits = 6, errorMessage = "" } = props;
  const [inputRefState, setInputRefState] = useState([]);
  const inputRefs = useRef(inputRefState);

  useEffect(() => {
    const refsArray = Array.from({ length: digits }).map(
      (_, index) => inputRefs.current[index] || React.createRef()
    );
    setInputRefState(refsArray);
    inputRefs.current = refsArray;
  }, []);

  const keyDownHandler = (e, currentRef, prevRef, nextRef) => {
    if (e.key === "Backspace") {
      if (prevRef && currentRef.current.value === "") {
        prevRef.current.focus();
      }
    }

    if (prevRef) {
      if (e.key === "ArrowLeft") {
        prevRef.current.focus();
      }
    }

    if (nextRef) {
      if (e.key === "ArrowRight") {
        nextRef.current.focus();
      }
    }
  };

  const onChangeHandler = (currentRef, nextRef) => {
    const value = currentRef.current.value;
    if (!isNaN(value) && value.length === 1) {
      currentRef.current.value = value;
      if (nextRef) {
        nextRef.current.focus();
      }
    } else {
      currentRef.current.value = "";
    }

    inputValueConcatenator();
  };

  const inputValueConcatenator = () => {
    let concatenatedValue = "";
    inputRefs.current.forEach((ref) => {
      concatenatedValue += ref.current.value;
    });
    setInputValue((prev) => ({ ...prev, otp: concatenatedValue }));
  };

  return (
    <div className="select-none p-6">
      <div className="relative flex gap-3 flex-col">
        <label className="text-[1.1rem] text-mint">
          Enter OTP for verification
        </label>
        <div className="flex items-center gap-3">
          {Array.from({ length: digits }, (_, index) => (
            <InputField
              className={`text-center ${
                errorMessage ? "border-red-600 border-opacity-100" : ""
              }`}
              key={index}
              ref={inputRefs.current[index]}
              onChange={() => {
                onChangeHandler(
                  inputRefs.current[index],
                  inputRefs.current[index + 1]
                );
              }}
              onKeyDown={(e) =>
                keyDownHandler(
                  e,
                  inputRefs.current[index],
                  inputRefs.current[index - 1] || null,
                  inputRefs.current[index + 1]
                )
              }
            />
          ))}
        </div>
        {errorMessage && <ErrorField errorMessage={errorMessage} />}
      </div>
    </div>
  );
};

export default OTPForm;
