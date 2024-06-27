import React, { useState } from "react";
import { Button, ErrorField, InputField, Loader } from "../../components";
import { buttonTypes } from "../../utils";
import { useResetPasswordMutation } from "../../services/api/authApi";
import { validatePassword } from "../../utils/validateInput";

const ResetPassword = () => {
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
    oldPasswordError: "",
    newPasswordError: "",
  });
  const [error, setError] = useState({ oldPassword: "", newPassword: "" });
  const inputField = [
    { label: "Old Password", name: "oldPassword" },
    { label: "New Password", name: "newPassword" },
  ];
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  console.log(error);
  const resetPasswordHandler = async () => {
    setError((prev) => ({
      ...prev,
      newPassword: "",
      oldPassword: "",
    }));

    if (!validatePassword(input.oldPassword)) {
      setError((prev) => ({
        ...prev,
        oldPassword: "Password must be of atleast 8 characters",
      }));
      return;
    }

    if (!validatePassword(input.newPassword)) {
      setError((prev) => ({
        ...prev,
        newPassword: "Password must be of atleast 8 characters",
      }));
      return;
    }

    try {
      const response = await resetPassword({
        password: input.oldPassword,
        new_password: input.newPassword,
      });

      if (response.error) {
        const errorResponse = response.error.data;

        if (errorResponse.message?.old_password) {
          setError((prev) => ({
            ...prev,
            oldPassword: errorResponse.message.old_password,
          }));
          return;
        }

        if (errorResponse.message?.new_password) {
          setError((prev) => ({
            ...prev,
            newPassword: errorResponse.message.new_password,
          }));
          return;
        }

        alert(errorResponse.message);
      }

      if (response.data) {
        alert(response.data.message);
        return;
      }
    } catch (error) {
      alert(
        "Error occured on the server! Please try again or contact at support@portify.com"
      );
      console.log("Error occurred while resetting the password -> ", error);
      return;
    }
  };

  return (
    <div className="rounded-lg border border-light bg-mintExtreme bg-opacity-10 text-mint px-8 py-4 w-full">
      <h4 className="pb-4 text-xl border-b border-light">Reset Password</h4>
      <div className="pt-4 flex flex-col gap-5 items-end">
        {inputField?.map((field) => (
          <InputField
            key={field.name}
            type={"password"}
            label={field.label}
            className={`text-sm ${
              input.error ? "border-red-700 border-opacity-100" : ""
            }`}
            labelClassName={"text-sm pb-1"}
            placeholder={field.label}
            value={input?.[field.name]}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, [field.name]: e.target.value }))
            }
          >
            {error?.[field.name] && (
              <ErrorField errorMessage={error?.[field.name]} />
            )}
          </InputField>
        ))}

        <Button
          buttonType={buttonTypes.SECONDARY}
          className={"text-sm tracking-tighter"}
          handler={resetPasswordHandler}
        >
          {isLoading ? <Loader /> : "Reset Password"}
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
