import React from "react";
import { NavLink } from "react-router-dom";
import Firefighter from "../assets/Fire_Fighter.png";
import Off from "../assets/Vectoroff.png";

export default function Header() {
  return (
    <div className="w-[100%] h-[12vh] flex items-center justify-between">
      <NavLink to="/">
        <img alt="fire" className="h-[10vh] max-w-[10vh]" src={Firefighter} />
      </NavLink>
      <NavLink to="/login">
        <img alt="fire" className="h-12 m-4" src={Off} />
      </NavLink>
    </div>
  );
}
