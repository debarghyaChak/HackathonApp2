import React from "react";
import logo from "./assets/icons/17501_dphi.webp";
import style from "./AppStyle.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a className="navbar-brand" href="/">
              <img className="mainIcon" src={logo} alt="" />
            </a>
          </div>
          <div className="logoText">
            Dphi
          </div>
        </div>
      </nav>
    </>
  );
}
