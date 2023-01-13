import React from "react";
import { Route, Routes } from "react-router-dom";
import FireStationPage from "../pages/FireStationPage";
import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import AllTruck from "../pages/AllTruck";
import Login from "../pages/Login";
import InterventionPage from "../pages/InterventionPage";
import AllUsers from "../pages/AllUsers";
import TruckModal from "./TruckModal";
import AddFireStation from "../pages/AddFireStation";

import Header from "./Header";

// eslint-disable-next-line react/prop-types
export default function Router({ sidebarText }) {
  return (
    <div className="flex flex-col items-center w-full">
      <Header sidebarText={sidebarText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-truck" element={<AllTruck />} />
        <Route path="/truck-infos" element={<TruckModal />} />
        <Route path="/fire-station-page" element={<FireStationPage />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/intervention" element={<InterventionPage />} />
        <Route path="/add-firestation" element={<AddFireStation />} />
      </Routes>
    </div>
  );
}
