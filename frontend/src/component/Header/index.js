import React from "react";
import Styles from "./index.style";
import { Link } from "react-router-dom";

const menu = [
  { id: 1, label: "Blog" },
  { id: 2, label: "About" },
  { id: 3, label: "Contact" },
];

const Header = ({ changecolor }) => {
  return (
    <Styles changecolor={changecolor}>
      <div className="header-container">
        <Link to="/">
          <div
            className={`${changecolor ? "color-black" : "text-white"} logo-blog`}
          >
            DEV
          </div>
        </Link>
        <div className="menu">
          {menu.map((item) => (
            <div key={item.id}>{item.label}</div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default Header;
