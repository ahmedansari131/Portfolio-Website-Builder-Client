import React, { useState } from "react";
import {
  Button,
  ErrorField,
  GoogleIcon,
  InputField,
  Loader,
} from "../../components";
import { buttonTypes } from "../../utils";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/api/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    is_terms_agree: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const inputFields = [
    {
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  const regiserationHandler = async () => {
    setErrorMessage({ email: "", password: "" });
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const isValidPassword = (password) => {
      if (password.length < 8) return false;
      return true;
    };

    try {
      if (!Object.values(inputData).every((value) => value)) {
        alert("Please fill all the details");
        return;
      }

      if (!isValidEmail(inputData.email)) {
        setErrorMessage((prev) => ({
          ...prev,
          email: "Enter a valid email address.",
        }));
        return;
      }

      if (!isValidPassword(inputData.password)) {
        setErrorMessage((prev) => ({
          ...prev,
          password: "Password should be of 8 characters long.",
        }));
        return;
      }

      const response = await registerUser(inputData);
      if (response.error && !response.error.data.success) {
        setErrorMessage({
          email: response.error.data.message.email,
          password: response.error.data.message.password,
        });
      }

      if (response.data && response.data.success) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred while registering the user -> ", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-primary text-mint w-1/2 m-auto gap-10">
      <div className="flex flex-col justify-center items-center gap-1 relative under-line after:w-1/12 after:h-[.1rem] after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
        <h2 className="text-[2.5rem] font-bold">Sign up</h2>
        <p className="opacity-75 text-center">
          Perfect for freshers and job seekers to showcase their skills and
          experiences. <span className="font-medium">Sign up now!</span>
        </p>
      </div>

      <div className="flex flex-col w-full gap-7">
        {inputFields.map((field) => (
          <InputField
            className={
              errorMessage?.[field.label.toLowerCase()]
                ? "border-red-600 border-opacity-100"
                : ""
            }
            key={field.label}
            label={field.label}
            value={inputData?.[field.label.toLowerCase()]}
            placeholder={field.placeholder}
            type={field.type}
            required={field.required}
            onChange={(e) => {
              setInputData((prev) => ({
                ...prev,
                [field.label.toLowerCase()]: e.target.value,
              }));
            }}
          >
            <ErrorField
              errorMessage={errorMessage?.[field.label.toLowerCase()]}
            />
          </InputField>
        ))}

        <div className="flex items-start gap-4 flex-row-reverse justify-end">
          <label className="text-sm text-mint text-opacity-75" htmlFor="terms">
            By registering, you agree that you have read, understand, and
            acknowledge our &nbsp;
            <span className="under-line relative cursor-pointer">
              Privacy Policy &nbsp;
            </span>
            and accept out <br></br>
            <span className="under-line relative cursor-pointer">
              General Terms of use.
            </span>
          </label>
          <input
            className="border-none outline-none accent-mintExtreme bg-transparent w-[.9rem] h-[.9rem] mt-[.1rem]"
            type="checkbox"
            name="terms"
            id="terms"
            checked={inputData.is_terms_agree}
            onChange={(e) => {
              setInputData((prev) => ({
                ...prev,
                is_terms_agree: e.target.checked,
              }));
            }}
          />
        </div>

        <div className="w-full">
          <Button
            className="w-full text-blue hover:bg-opacity-95 flex justify-center items-center"
            buttonType={buttonTypes.SECONDARY}
            handler={regiserationHandler}
          >
            {isLoading ? <Loader /> : "Sign up"}
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
            <GoogleIcon /> Sign up with Google
          </Button>
        </div>

        <div>
          <span className="font-secondary text-mint text-opacity-75 flex justify-center gap-2 font-light">
            Already got account?{" "}
            <Link to={"/signin"}>
              {" "}
              <span className="font-medium hover:underline">Sign in</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
