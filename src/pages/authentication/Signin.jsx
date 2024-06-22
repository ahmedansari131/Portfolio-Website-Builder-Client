import React, { useState } from "react";
import {
  GoogleIcon,
  InputField,
  Button,
  Loader,
  ErrorField,
  Dialogue,
} from "../../components";
import { buttonTypes } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import {
  useForgotPasswordMutation,
  useLoginUserMutation,
} from "../../services/api/authApi";
import { validateInput, validatePassword } from "../../utils/validateInput";
import { useDispatch } from "react-redux";
import { getUser } from "../../app/slices/authentication/userSlice";
import { useDialog } from "../../hooks";

const Signin = () => {
  const [signInUser, { isLoading }] = useLoginUserMutation();
  const [forgotPassword, { isLoading: forgotPasswordLoading }] =
    useForgotPasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDialogOpen, closeDialogHandler, openDialogHandler } = useDialog();
  const [inputData, setInputData] = useState({
    identifier: "",
    password: "",
  });
  const [forgotPasswordIdentifier, setForgotPasswordIdentifier] = useState({
    identifier: "",
    identifierError: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    identifier: "",
    password: "",
  });
  const inputFields = [
    {
      name: "identifier",
      type: "text",
      label: "Username / email",
      placeholder: "Enter your username or email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  const signInHandler = async () => {
    setErrorMessage({ identifier: "", password: "" });

    if (!validateInput(inputData.identifier)) {
      setErrorMessage((prev) => ({
        ...prev,
        identifier: "This field is required",
      }));
      return;
    }

    if (!validateInput(inputData.password)) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "This field is required",
      }));
      return;
    }

    if (!validatePassword(inputData.password)) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "Password length must be atleast of 8 characters",
      }));
      return;
    }

    try {
      const response = await signInUser(inputData);

      if (response.error) {
        const error = response.error.data.message;
        setErrorMessage((prev) => ({
          ...prev,
          identifier: error.identifier,
          password: error.password,
        }));
      }

      if (response.data) {
        alert("You are now loggedin!");
        dispatch(getUser(true));
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred while signing the user -> ", error);
      return;
    }
  };

  const forgotPasswordHandler = async () => {
    setForgotPasswordIdentifier((prev) => ({ ...prev, identifierError: "" }));

    if (!validateInput(forgotPasswordIdentifier.identifier)) {
      setForgotPasswordIdentifier((prev) => ({
        ...prev,
        identifierError: "This field is required",
      }));
      return;
    }

    try {
      const response = await forgotPassword({
        identifier: forgotPasswordIdentifier?.identifier,
      });
      console.log(response);
      if (response.error) {
        const error = response.error.data.message;
        setForgotPasswordIdentifier((prev) => ({
          ...prev,
          identifierError: error.identifier,
        }));
      }

      if (response.data) {
        alert(response.data?.message);
        setForgotPasswordIdentifier({ identifier: "", identifierError: "" });
        closeDialogHandler();
      }
    } catch (error) {
      console.log("Error occurred while forgetting the password -> ", error);
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-primary text-mint w-1/2 m-auto gap-10">
      <div className="flex flex-col justify-center items-center gap-1 relative under-line after:w-1/12 after:h-[.1rem] after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
        <h2 className="text-[2.5rem] font-bold">Sign In</h2>
        <p className="opacity-75 text-center">
          Perfect for freshers and job seekers to showcase their skills and
          experiences. <span className="font-medium">Sign in now!</span>
        </p>
      </div>

      <div className="flex flex-col w-full gap-7">
        {isDialogOpen && (
          <Dialogue
            buttonText={"Forgot Password"}
            buttonLoadingState={forgotPasswordLoading}
            isOpen={isDialogOpen}
            onClose={closeDialogHandler}
            handler={forgotPasswordHandler}
          >
            <div className="px-6 py-8">
              <InputField
                className={`bg-mint ${
                  forgotPasswordIdentifier.identifierError
                    ? "border-red-700 border-opacity-100"
                    : ""
                }`}
                labelClassName={
                  "text-white font-light text-[1rem] font-primary"
                }
                label={"Username or email"}
                type={"text"}
                required={true}
                placeholder={"Your username or email"}
                value={forgotPasswordIdentifier?.identifier}
                onChange={(e) =>
                  setForgotPasswordIdentifier((prev) => ({
                    ...prev,
                    identifier: e.target.value,
                  }))
                }
              >
                <ErrorField
                  errorMessage={forgotPasswordIdentifier?.identifierError}
                />
              </InputField>
            </div>
          </Dialogue>
        )}
        {inputFields.map((field) => (
          <InputField
            key={field.label}
            className={
              errorMessage?.[field.name.toLowerCase()]
                ? "border-red-600 border-opacity-100"
                : ""
            }
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            required={field.required}
            name={field.name}
            value={inputData?.[field.name]}
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [field.name]: e.target.value,
              }))
            }
          >
            <ErrorField errorMessage={errorMessage?.[field.name]} />
            {field.name === "password" && (
              <span
                onClick={openDialogHandler}
                className="font-secondary cursor-pointer font-light text-sm mt-1 hover:underline select-none absolute right-0"
              >
                Forgot password?
              </span>
            )}
          </InputField>
        ))}

        <div className="w-full">
          <Button
            className="w-full text-blue hover:bg-opacity-95 flex justify-center items-center mt-2"
            buttonType={buttonTypes.SECONDARY}
            handler={signInHandler}
          >
            {isLoading ? <Loader /> : "Sign in"}
          </Button>
        </div>

        <div className=" relative under-line my-5 after:bg-opacity-25 after:bg-mint">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue z-50 font-secondary text-xl font-medium px-5 text-opacity-75 text-mint">
            OR
          </span>
        </div>

        <div className="w-full">
          <Button
            className="w-full flex justify-center items-center gap-3"
            buttonType={buttonTypes.PRIMARY}
          >
            <GoogleIcon /> Sign in with Google
          </Button>
        </div>
        <div>
          <span className="font-secondary text-mint text-opacity-75 flex justify-center gap-2 font-light">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              {" "}
              <span className="font-medium hover:underline">Sign up</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
