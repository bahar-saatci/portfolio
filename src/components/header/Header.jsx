import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import Bahar from "../../assets/Avatar1.png";
import HeaderSocial from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bilge Bahar Saatçi</h1>
        <h5 className="text-light">Architecture Student</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Bahar} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
