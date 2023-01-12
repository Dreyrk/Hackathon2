/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";

export default function Cards() {
  const [numberF, setNumberF] = useState([]);
  const [numberV, setNumberV] = useState([]);
  const [vehicleAvailable, setVehicleAvailable] = useState([]);
  const [vehicleInMaintenance, setVehicleInMaintenance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/caserne")
      .then((res) => res.json())
      .then((firestation) => {
        setNumberF(firestation);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/vehicle")
      .then((res) => res.json())
      .then((vehicles) => {
        setNumberV(vehicles);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicle-available")
      .then((res) => res.json())
      .then((available) => {
        setVehicleAvailable(available);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/vehicle-in-maintenance")
      .then((res) => res.json())
      .then((maintenance) => {
        setVehicleInMaintenance(maintenance);
      });
  }, []);

  // Number of vehicles :  {numberV.length}     Vehicles in Mission : {vehicleAvailable.length}     Vehicles en Maintenance : {vehicleInMaintenance.length}
  //

  return (
    <div className="my-10 grid grid-cols-2 gap-8">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src=" " alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nombre de Casernes : {numberF.length}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src=" " alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Number of vehicles : {numberV.length}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src=" " alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vehicles in Mission : {vehicleAvailable.length}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src=" " alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vehicles en Maintenance : {vehicleInMaintenance.length}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}
