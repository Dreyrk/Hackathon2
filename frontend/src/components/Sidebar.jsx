import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[15vw] h-[88vh] flex-col flex items-center overflow-hidden bg-[#54555A] z-20 navbar">
      <div className=" flex flex-col justify-start items-center h-full w-full bg-[#54555A]">
        <NavLink
          to="/login"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg joe"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/intervention"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
        >
          Intervention
        </NavLink>
        <NavLink
          to="/fire-station-page"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
        >
          Firestations
        </NavLink>
        <NavLink
          to="/create-user"
          className="h-[8vh] border-b border-slate-400/50 w-full flex justify-center items-center text-white text-lg"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}
