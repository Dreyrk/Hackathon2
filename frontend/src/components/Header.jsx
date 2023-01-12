/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import Off from "../assets/Vectoroff.png";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header({ sidebarText }) {
  const { setUser } = useCurrentUserContext();
  return (
    <div className="bg-[#860f0f] w-full h-[10vh] text-white text-2xl flex justify-between items-center pl-4">
      <div>{sidebarText}</div>
      <NavLink
        to="/login"
        onClick={() => {
          localStorage.clear();
          setUser(useLocalStorage("user", {}));
        }}
      >
        <img alt="fire" className="h-12 m-4 #9c9999" src={Off} />
      </NavLink>
    </div>
  );
}
