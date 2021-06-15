import React from "react";
import logo from "../logo.png";
export default function NavBar() {
  return (
    <>
      <div className="nav row">
        <div className="col-12 col-md-2 ">
          <img className="logo" src={logo} alt="Wicky LK Logo" />
        </div>
        <div className="col-12 col-md-8 nav-items">
          <a className="nav-item active" href="/s">
            Home
          </a>
          <a className="nav-item" href="/s">
            Projects
          </a>
          <a className="nav-item" href="/s">
            Child Companies
          </a>
        </div>
        <div className="col-12 col-md-2 d-none d-md-block"></div>
      </div>
    </>
  );
}
