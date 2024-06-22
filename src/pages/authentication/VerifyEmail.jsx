import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyEmailQuery } from "../../services/api/authApi";
import { CheckIcon, CloseIcon } from "../../components";

const VerifyEmail = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();
  const { data, error, isSuccess } = useVerifyEmailQuery(token);
  const [message, setMessage] = useState("");

  const tokenHandler = () => {
    console.log(token, error, isSuccess, data);
    if (!token) navigate("/");
    if (error) {
      setMessage(error.data?.message);
      navigate("/")
    }
    if (data) {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    tokenHandler();
  }, [error, isSuccess, data]);

  return (
    <div className="flex justify-center h-40">
      <div className="border border-light h-fit p-6 rounded-md font-secondary font-normal shadow-md text-xl flex justify-center flex-col gap-4 items-center">
        <span className="bg-mint w-16 h-16 rounded-full flex justify-center items-center text-blue">
          {isSuccess ? (
            <CheckIcon style={{ fontSize: "1.8rem" }} />
          ) : (
            <CloseIcon style={{ fontSize: "1.8rem" }} />
          )}
        </span>
        {message && message}
      </div>
    </div>
  );
};

export default VerifyEmail;
