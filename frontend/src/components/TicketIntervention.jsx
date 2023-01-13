/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import { useTicketContext } from "../contexts/interventionTicketContext";

export default function TicketIntervention() {
  const backURL = import.meta.env.VITE_BACKEND_URL;

  const { ticket, setTicket } = useTicketContext();
  const [firestation, setFirestation] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [index, setIndex] = useState(0);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch(`${backURL}/api/vehicle`)
      .then((res) => res.json())
      .then((vehicles) => setTrucks(vehicles))
      .catch((e) => console.error(e));
  }, []);

  const tickets = [];

  useEffect(() => {
    fetch("http://localhost:5000/api/firestation")
      .then((res) => res.json())
      .then((firestations) => setFirestation(firestations))
      .catch((e) => console.error(e));
  }, []);

  const handleSubmit = () => {
    const selectedTruckName = trucks[index].modele;
    const selectedTruckCategory = trucks[index].category;
    const selectedTruckImg = trucks[index].img;
    setTicket({
      ...ticket,
      fstationLatitude: latitude,
      fstationLongitude: longitude,
      truck: {
        modele: selectedTruckName,
        category: selectedTruckCategory,
        img: selectedTruckImg,
      },
    });
    tickets.push(ticket);
    console.log(tickets);
  };

  return (
    <div className=" flex-col h-full justify-center   p-10 mt-20 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h1 className=" mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Ticket d'opération :
        </h1>
      </div>
      <div className="mb-6 ">
        <label htmlFor="type">Type d'intervention :</label>
        <select
          className="border-2 border-black"
          name="type"
          onChange={(e) => {
            const selectedType = e.target.value;
            setTicket({ ...ticket, type: selectedType });
          }}
        >
          <option value="">-------Choose the intervention type--------</option>
          <option value="incendie">Incendie</option>
          <option value="route">Accident de la route</option>
          <option value="medical">Médical</option>
          <option value="assistance">Assistance à personne en danger</option>
        </select>
      </div>
      <div className="flex justify-between mb-6">
        <h5 className="flex w-40  ">Niveau d'urgence :</h5>
        <div className="w-3/4 flex gap-10">
          <div className="w-1/3 flex gap-4 justify-center">
            <input
              type="radio"
              name="level"
              value={1}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
            <label htmlFor="urgence">1</label>
          </div>
          <div className="w-1/3 flex gap-4 justify-center">
            <input
              type="radio"
              name="level"
              value={2}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
            <label htmlFor="urgence">2</label>
          </div>
          <div className="w-1/3 flex gap-4 justify-center">
            <input
              type="radio"
              name="level"
              value={3}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
            <label htmlFor="urgence">3</label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="coord">
          Assigner à la caserne :
          <select
            className="border-2 border-black"
            name="type"
            onChange={(e) => {
              console.log(e.target.value);
              setLatitude(e.target.value);
            }}
          >
            <option value="">Choose firestation</option>
            {firestation.map((fstation) => (
              <option key={fstation.id} value={fstation.latitude}>
                {fstation.name}
              </option>
            ))}
          </select>
          <select
            className="border-2 border-black"
            name="type"
            onChange={(e) => {
              console.log(e.target.value);
              setLongitude(e.target.value);
            }}
          >
            <option value="">Confirm firestation</option>
            {firestation.map((fstation) => (
              <option key={fstation.id} value={fstation.longitude}>
                {fstation.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h5>Truck :</h5>
        <select
          onChange={(e) => setIndex(e.target.value)}
          className="border-2 border-black shadow-sm"
          name="truck"
        >
          {trucks.map((truck, i) => {
            return (
              <option value={i}>
                {truck.modele} assigné à la catégorie :{truck.category}
              </option>
            );
          })}
        </select>
        <div>
          <textarea
            className="mt-4 h-24 w-full"
            onChange={(e) =>
              setTicket({ ...ticket, description: e.target.value })
            }
            placeholder="Enter a description of the incident..."
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
