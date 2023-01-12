import React from "react";
import { Route, Routes } from "react-router-dom";

import AllFireStation from "../pages/AllFireStation";
import FireStationPage from "../pages/FireStationPage";
import CreateUser from "../pages/CreateUser";

import Home from "../pages/Home";
import AllTruck from "../pages/AllTruck";
import Events from "../pages/Events";
import Vehicles from "../pages/Vehicles";
import Login from "../pages/Login";
import ListUsers from "../pages/ListUsers";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/all-truck" element={<AllTruck />} />
      <Route path="/all-fire-station" element={<AllFireStation />} />
      <Route path="/fire-station-page" element={<FireStationPage />} />
      <Route path="/users" element={<ListUsers />} />
      <Route path="/create-user" element={<CreateUser />} />
    </Routes>
  );
}
