import React from "react";
import { buttonTypes } from "../../utils";
import { navLinks } from "../../utils/navLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/userSelector";
import { Button, Dialogue, DropdownMenu } from "..";
import { useSignedOutUserMutation } from "../../services/api/authApi";
import { useDialog } from "../../hooks";

const Navbar = () => {
  const { pathname } = useLocation();
  const user = useSelector(selectUser);
  const [signoutUser, { isLoading }] = useSignedOutUserMutation();
  const navigate = useNavigate();
  const { isDialogOpen, openDialogHandler, closeDialogHandler } = useDialog();

  const shouldRender = () => {
    const excludedPath = ["verify-email", "signup", "signin"];
    return excludedPath.some((path) => !pathname.includes(path));
  };

  const signoutHandler = async () => {
    try {
      const response = await signoutUser();
      if (response.data) {
        closeDialogHandler();
        navigate("/");
      }

      if (response.error) {
        alert(response.error.data?.message);
        return;
      }
    } catch (error) {
      console.log("Error occurred while signing out the user -> ", error);
    }
  };

  const dropdownContent = [
    { name: "Account Setting", isLink: true, path: "/settings" },
    {
      name: "Signout",
      isLink: false,
      action: openDialogHandler,
    },
  ];

  return (
    <div className="pr-side-space pl-side-space flex items-center justify-between">
      <div className="flex items-center gap-20">
        <div>
          <h1 className="font-primary text-[2.2rem] font-semibold py-5 text-mint">
            <Link to="/">Portify</Link>
          </h1>
        </div>

        {pathname !== "/verify-email/" && (
          <ul className="text-mint font-secondary font-light flex items-center gap-7">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <a
                  className="underline-effect relative hover:underline-effect opacity-75 hover:opacity-100 hover:text-mintExtreme"
                  href={navLink.url}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isDialogOpen && (
        <Dialogue
          title={"Sign out from account"}
          description={
            "Are you sure you want to sign out from your account? You will not be able to build your portfolio."
          }
          buttonText={"Sign out"}
          isOpen={isDialogOpen}
          onClose={closeDialogHandler}
          handler={signoutHandler}
        />
      )}
      <div>
        {!shouldRender() ||
          (!user.userResult?.success ? (
            <Link to={"/signup"}>
              <Button buttonType={buttonTypes.PRIMARY}>Signup</Button>
            </Link>
          ) : (
            <DropdownMenu
              dropdownContent={dropdownContent}
              username={user.userResult?.data?.username}
              email={user.userResult?.data?.email}
              profileImage={user.userResult?.data?.profile_img}
            />
          ))}
      </div>
    </div>
  );
};

export default Navbar;
