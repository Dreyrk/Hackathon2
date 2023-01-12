import React from "react";
import { Route, Routes } from "react-router-dom";

import AllFireStation from "../pages/AllFireStation";
import FireStationPage from "../pages/FireStationPage";
import CreateUser from "../pages/CreateUser";
import Firestations from "../pages/Firestations";

import Home from "../pages/Home";
import AllTruck from "../pages/AllTruck";
import Events from "../pages/Events";
import Vehicles from "../pages/Vehicles";
import Login from "../pages/Login";

export default function Router() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#293A4E] w-full h-[8vh] text-white text-2xl flex items-center pl-4">
        Dashboard
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allTruck" element={<AllTruck />} />
        <Route path="/allFireStation" element={<AllFireStation />} />
        <Route path="/fireStationPage" element={<FireStationPage />} />
        <Route path="/firestations" element={<Firestations />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}
