import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useForgotPasswordConfirmationMutation,
  useVerifyValidForgotPasswordRequestMutation,
} from "../../services/api/authApi";
import { ErrorField, InputField, Loader, OTPForm } from "../../components";
import { buttonTypes } from "../../utils";
import { Button } from "../../components";

const ResetForgotPassword = () => {
  const { uid, token } = useParams();
  const [forgotPasswordConfirmation, { isLoading }] =
    useForgotPasswordConfirmationMutation();
  const [verifyRequest] = useVerifyValidForgotPasswordRequestMutation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
    new_password: "",
    otpError: "",
    passwordError: "",
  });

  const resetPasswordInputActiveHandler = () => {
    if (data.otp.length === 6) return true;
    else return false;
  };

  const forgotPasswordConfirmationHandler = async () => {
    setData((prev) => ({ ...prev, otpError: "", passwordError: "" }));
    try {
      const apiData = { otp: data.otp, new_password: data.new_password };
      const response = await forgotPasswordConfirmation({
        apiData,
        uid,
        token,
      });

      if (response.error) {
        const errorResponse = response.error.data.message;
        console.log(errorResponse)
        if (!errorResponse.otp && !errorResponse.new_password) {
          alert(errorResponse);
          navigate("/");
          return;
        }
        setData((prev) => ({
          ...prev,
          otpError: errorResponse.otp || "",
        }));
        setData((prev) => ({
          ...prev,
          passwordError: errorResponse.new_password || "",
        }));
        return;
      }

      if (response.data) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred while resetting the password -> ", error);
      return;
    }
  };

  useEffect(() => {
    const initialTokenVerificationRequest = async () => {
      try {
        const response = await verifyRequest({
          uid,
          token,
        });
        console.log(response);
        if (response.error) navigate("/");
      } catch (error) {
        return;
      }
    };

    initialTokenVerificationRequest();
  }, []);

  return (
    <div className="w-1/3 m-auto flex flex-col rounded-lg bg-mintExtreme bg-opacity-10 border border-mintExtreme border-opacity-20">
      <OTPForm
        input={data}
        setInputValue={setData}
        errorMessage={data.otpError}
      />

      <div className="relative overflow-hidden w-full p-6">
        {!resetPasswordInputActiveHandler() && (
          <div className="absolute w-full h-full  top-0 left-0 z-20 backdrop-blur-sm cursor-not-allowed "></div>
        )}
        <div className="flex flex-col items-end gap-3">
          <InputField
            className={
              data.passwordError ? "border-red-600 border-opacity-100" : ""
            }
            label={"New password"}
            labelClassName={"text-[1rem] text-mint pb-1"}
            required={true}
            type={"password"}
            value={data.new_password}
            placeholder={"New password"}
            onChange={(e) =>
              setData((prev) => ({ ...prev, new_password: e.target.value }))
            }
          >
            <ErrorField errorMessage={data.passwordError} />
          </InputField>
          <Button
            handler={forgotPasswordConfirmationHandler}
            buttonType={buttonTypes.SECONDARY}
            className={"text-[1rem] text-blue"}
          >
            {isLoading ? <Loader /> : "Reset Password"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetForgotPassword;
