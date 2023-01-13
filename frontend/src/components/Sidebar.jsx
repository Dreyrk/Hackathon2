/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import Off from "../assets/logo.png";

export default function Sidebar({ setSidebarText }) {
  const { user } = useCurrentUserContext();
  return (
    <div className="w-[15vw] h-auto min-h-[100vh] flex-col flex items-center overflow-hidden bg-[#54555A] z-20 navbar border-r border-slate-400/50">
      <div className=" flex flex-col justify-start items-center h-full w-full bg-[#54555A]">
        <div className="h-[10vh] flex items-center">
          {" "}
          <NavLink to="/login">
            <img alt="fire" className="h-[9vh] bg-[#54555A]" src={Off} />
          </NavLink>
        </div>
        <NavLink
          to="/login"
          className="h-[8vh] border-y border-slate-400/50 w-full flex justify-center items-center text-white text-lg joe"
          onClick={() => setSidebarText("Dashboard")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/intervention"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
          onClick={() => setSidebarText("Intervention")}
        >
          Intervention
        </NavLink>
        <NavLink
          to="/fire-station-page"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
          onClick={() => setSidebarText("Firestations")}
        >
          Firestations
        </NavLink>
        {user.rights === 2 ? (
          <NavLink
            to="/users"
            className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
            onClick={() => setSidebarText("Users")}
          >
            Users
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
