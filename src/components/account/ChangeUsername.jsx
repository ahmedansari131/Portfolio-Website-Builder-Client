import React, { useEffect, useState } from "react";
import { buttonTypes } from "../../utils";
import {
  InputField,
  Button,
  Loader,
  ErrorField,
  Spinner,
} from "../../components";
import { useCheckUsernameAvailabilityQuery } from "../../services/api/authApi";
import { useDebounce } from "use-debounce";

const ChangeUsername = (props) => {
  const { username, email, profileImage } = props;
  const [input, setInput] = useState({
    username: "",
    responseMessage: "",
  });
  const [debouncedUsernameValue] = useDebounce(input.username, 800);
  const { data, error, isLoading } = useCheckUsernameAvailabilityQuery(
    { debouncedUsernameValue },
    { skip: !debouncedUsernameValue }
  );

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        setInput((prev) => ({ ...prev, responseMessage: error.data.message }));
      } else if (data) {
        setInput((prev) => ({ ...prev, responseMessage: data.message }));
      }
    }
  }, [isLoading, data, error]);

  return (
    <div className="rounded-lg border border-light bg-mintExtreme bg-opacity-10 text-mint px-8 py-4 w-full">
      <img
        src={profileImage}
        alt="Profile Image"
        className="rounded-full"
        width={130}
        height={130}
      />
      <div className="flex flex-col pb-4 text-[1.05rem] mt-1">
        <span>{username}</span>
        <span className="opacity-80 font-light text-sm">{email}</span>
      </div>

      <div className="pt-4 border-t border-light flex flex-col items-end gap-3">
        <InputField
          type={"text"}
          label={"Change username"}
          labelClassName={"text-[.9rem] pb-1"}
          placeholder={"Username"}
          className={`text-sm ${
            error
              ? "border-red-700 border-opacity-100"
              : data
              ? "border-green-500"
              : ""
          }`}
          value={input.username}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, username: e.target.value }))
          }
        >
          {isLoading && <Spinner />}
          <ErrorField
            errorMessage={error && input.responseMessage}
            successMessage={data && input.responseMessage}
          />
        </InputField>
        <Button
          buttonType={buttonTypes.SECONDARY}
          className={`text-sm tracking-tighter ${
            error && "cursor-not-allowed opacity-30"
          }`}
          isDisabled={error && true}
          handler={() => console.log("object")}
        >
          Change Username
        </Button>
      </div>
    </div>
  );
};

export default ChangeUsername;
