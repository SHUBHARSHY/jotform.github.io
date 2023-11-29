import React from "react";
import "./Subnav.css";
import { NavLink } from "react-router-dom";
const Subnav = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="build" className="nav-icon">
          <div >BUILD</div>
        </NavLink>

        <NavLink to="setting" className="nav-icon">
          <div >SETTING</div>
        </NavLink>
        <NavLink to="publish" className="nav-icon">
          <div >PUBLISH</div>
        </NavLink>
      </nav>
    </>
  );
};

export default Subnav;
