import React from "react";
import { Route, Routes } from "react-router-dom";
import FireStationPage from "../pages/FireStationPage";
import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import AllTruck from "../pages/AllTruck";
import Login from "../pages/Login";
import InterventionPage from "../pages/InterventionPage";
import ListUsers from "../pages/ListUsers";
import TruckModal from "./TruckModal";

export default function Router() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#293A4E] w-full h-[8vh] text-white text-2xl flex items-center pl-4">
        Dashboard
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-truck" element={<AllTruck />} />
        <Route path="/truck-infos" element={<TruckModal />} />
        <Route path="/fire-station-page" element={<FireStationPage />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/intervention" element={<InterventionPage />} />
      </Routes>
    </div>
  );
}
