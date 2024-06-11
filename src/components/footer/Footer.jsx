import React from "react";
import { navLinks } from "../../utils/navLinks";

const Footer = () => {
  const socialLinks = [
    { url: "#", name: "LinkedIn" },
    { url: "#", name: "Twitter" },
    { url: "#", name: "Github" },
    { url: "#", name: "Instagram" },
  ];

  return (
    <div className="flex justify-between pl-side-space pr-side-space py-10 border-t border-light text-mint font-primary">
      <div>
        <div className="pb-5">
          <h4 className=" text-2xl font-medium">Portify</h4>
          <p className="flex items-center gap-2 font-medium">
            <span className="opacity-75">A product by</span>
            <span className="under-line opacity-100 relative">
              Ahmed Ansari
            </span>
          </p>
        </div>

        <ul>
          {socialLinks.map((socialLink) => (
            <li>
              <a
                className="underline-effect relative opacity-75 hover:opacity-100 hover:text-mintExtreme"
                href={socialLink.url}
              >
                {socialLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex flex-col items-end">
          {navLinks.map((navLink) => (
            <li>
              <a
                className="underline-effect relative hover:underline-effect opacity-75 hover:opacity-100 hover:text-mintExtreme"
                href={navLink.url}
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
