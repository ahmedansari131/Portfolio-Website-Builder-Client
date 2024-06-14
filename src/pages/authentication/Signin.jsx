import React from "react";
import { GoogleIcon, InputField, Button } from "../../components";
import { buttonTypes } from "../../utils";
import { Link } from "react-router-dom";

const Signin = () => {
  const inputFields = [
    {
      type: "text",
      label: "Username / email",
      placeholder: "Enter your username or email",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center font-primary text-mint w-1/2 m-auto gap-10">
      <div className="flex flex-col justify-center items-center gap-1 relative under-line after:w-1/12 after:h-[.1rem] after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
        <h2 className="text-[2.5rem] font-bold">Sign In</h2>
        <p className="opacity-75 text-center">
          Perfect for freshers and job seekers to showcase their skills and
          experiences. <span className="font-medium">Sign in now!</span>
        </p>
      </div>

      <div className="flex flex-col w-full gap-5">
        {inputFields.map((field) => (
          <InputField
            key={field.label}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            required={field.required}
          />
        ))}

        <div className="w-full">
          <Button
            className="w-full text-blue hover:bg-opacity-95"
            buttonType={buttonTypes.SECONDARY}
          >
            Sign in
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
