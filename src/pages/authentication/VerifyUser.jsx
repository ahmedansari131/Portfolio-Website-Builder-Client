import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useChangePasswordMutation,
  useVerifyUserQuery,
} from "../../services/api/authApi";
import { Button, ErrorField, InputField, Loader } from "../../components";
import { validateInput, validatePassword } from "../../utils/validateInput";

const VerifyUser = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();
  const { data, error, isSuccess } = useVerifyUserQuery(token);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [password, setPassword] = useState({ password: "", passwordError: "" });

  const tokenHandler = () => {
    if (!token) navigate("/");
    if (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    tokenHandler();
  }, [error, isSuccess, data]);

  const changePasswordHandler = async () => {
    setPassword((prev) => ({ ...prev, passwordError: "" }));

    if (!validateInput(password.password)) {
      setPassword((prev) => ({
        ...prev,
        passwordError: "This field is required",
      }));
      return;
    }

    if (!validatePassword(password.password)) {
      setPassword((prev) => ({
        ...prev,
        passwordError: "Password must be 8 characters long",
      }));
      return;
    }

    try {
      const response = await changePassword({
        new_password: password.password,
        token: token,
      });
      console.log(response);

      if (response.data) {
        alert(response.data.message);
        setPassword({ password: "", passwordError: "" });
        navigate("/signin");
      }

      if (response.error) {
        alert(response.error.data?.message);
        setPassword({ password: "", passwordError: "" });
      }
    } catch (error) {
      console.log("Error occurred while changing the password -> ", error);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-mintExtreme bg-opacity-20 w-1/3 px-8 py-4 rounded-md flex flex-col gap-4 items-end">
        <InputField
          className={`bg-mint w-full ${
            password.passwordError ? "border-red-700 border-opacity-100" : ""
          }`}
          labelClassName={"text-mint font-normal text-[1rem] font-primary"}
          label={"New password"}
          type={"password"}
          required={true}
          placeholder={"New password"}
          value={password?.password}
          onChange={(e) =>
            setPassword((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        >
          <ErrorField errorMessage={password?.passwordError} />
        </InputField>
        <Button
          handler={changePasswordHandler}
          className={
            "bg-mint text-blue font-secondary font-medium tracking-tighter text-[1rem] hover:bg-mint hover:bg-opacity-80 active:bg-opacity-60 border-none"
          }
        >
          {isLoading ? <Loader /> : "Change Password"}
        </Button>
      </div>
    </div>
  );
};

export default VerifyUser;
