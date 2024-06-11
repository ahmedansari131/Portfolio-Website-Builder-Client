import React from "react";
import Button from "../buttons/Button";
import { buttonTypes } from "../../utils";
import { navLinks } from "../../utils/navLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pr-side-space pl-side-space flex items-center justify-between">
      <div className="flex items-center gap-20">
        <div>
          <h1 className="font-primary text-[2.2rem] font-semibold py-5 text-mint">
            <Link to="/">Portify</Link>
          </h1>
        </div>

        <ul className="text-mint font-secondary font-light flex items-center gap-7">
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

      <div>
        <Link to={"/signup"}>
          <Button type={buttonTypes.PRIMARY}>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
