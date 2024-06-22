import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { cn } from "../../utils";
import { DropdownMenuItem } from "../";

const DropdownMenu = (props) => {
  const { dropdownContent, username, email, className, profileImage } = props;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className={cn(`rounded-full`, className)}>
        <img
          className="rounded-full border-mintExtreme border-opacity-50 shadow-secondary active:border"
          src={profileImage}
          alt="Profile image"
          width={40}
          height={40}
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute top-0 right-full z-10 mr-4 mt-1 w-56 p-3 origin-top-right rounded-md bg-mint bg-opacity-90 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex items-start justify-start text-blue font-semibold p-2 mb-2 border-b border-blue border-opacity-20">
          <img
            className="rounded-full mr-3"
            src={profileImage}
            alt="Profile image"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span>@{username}</span>
            <span className="text-sm">{email}</span>
          </div>
        </div>

        {dropdownContent?.map((content) => (
          <DropdownMenuItem
            key={content.name}
            item={content.name}
            className={`${
              content.name === "Signout" ? "text-red-700 font-medium" : ""
            }`}
            focusColor={`${
              content.name === "Signout" ? "bg-red-700 text-gray-200" : ""
            }`}
            action={content.action || null}
            path={content.path || null}
          />
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
