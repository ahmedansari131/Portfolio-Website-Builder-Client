import React from "react";
import {
  ChangeProfileImage,
  ChangeUsername,
  ResetPassword,
} from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/userSelector";

const Account = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex items-start gap-5 w-full">
      <ChangeUsername
        username={user.userResult.data.username}
        email={user.userResult.data.email}
        profileImage={user.userResult.data.profile_img}
      />

      <div className="w-full flex flex-col gap-5">
        <ChangeProfileImage />
        <ResetPassword />
      </div>
    </div>
  );
};

export default Account;
