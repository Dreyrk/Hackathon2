/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TruckList() {
  const [truck, setTruck] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/vehicle`)
      .then((results) => results.json())
      .then((datas) => {
        setTruck(datas);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-[80rem]">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Truck</h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Picture
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Localisation
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Available
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {truck.map((trucks) => (
                    <tr key={truck.id} onClick={() => navigate("/truck-infos")}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={trucks.img}
                          alt=""
                          className="w-[15rem] h-[9rem]"
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 font-bold text-sm text-gray-500">
                        {trucks.modele}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 font-bold text-sm text-gray-500">
                        {trucks.category}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4font-bold text-sm text-gray-500">
                        {trucks.Available}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add truck
        </button>
      </div>
    </div>
  );
}
