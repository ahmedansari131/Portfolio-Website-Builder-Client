import React from "react";
import "./Navbar.css";
import { Link } from "./../";

const Navlinks = (props) => {
  const { data } = props;

  return (
    <ul aria-label={"link-tab"}>
      {data?.map((value, index) => (
        <li key={index}>
          <Link
            ariaLabel={"links" + index}
            data={value}
          />
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
