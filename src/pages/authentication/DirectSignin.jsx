import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDirectSigninMutation } from "../../services/api/authApi";
import { Loader } from "../../components";

const DirectSignin = () => {
  const { uid, signin_token } = useParams();
  console.log(uid, signin_token);
  const [directSignin, { isLoading }] = useDirectSigninMutation();
  const navigate = useNavigate();

  const directSigninHandler = async () => {
    try {
      const response = await directSignin({ uid, signin_token });
      if (response.error) {
        alert(response.error.data.message);
      }
      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred while directly signing the user -> ", error);
      return;
    }
  };

  useEffect(() => {
    directSigninHandler();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 z-50 w-full h-screen flex justify-center items-center">
          <Loader className="w-10 h-10" />
        </div>
      )}
    </>
  );
};

export default DirectSignin;
