/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { useTicketContext } from "../contexts/interventionTicketContext";

export default function TicketIntervention() {
  const { ticket, setTicket } = useTicketContext();

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const tickets = [];

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h1>Ticket d'opération</h1>
      </div>
      <div>
        <label htmlFor="type">Type d'intervention :</label>
        <select
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
      <div className="flex justify-between">
        <h5 className="flex w-40">Niveau d'urgence :</h5>
        <div className="w-3/4 flex justify-evenly">
          <label htmlFor="urgence">
            1
            <input
              type="radio"
              name="level"
              value={1}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
          </label>
          <label htmlFor="urgence">
            2
            <input
              type="radio"
              name="level"
              value={2}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
          </label>
          <label htmlFor="urgence">
            3
            <input
              type="radio"
              name="level"
              value={3}
              onChange={(e) => {
                const selectedUrgence = e.target.value;
                setTicket({ ...ticket, level: selectedUrgence });
              }}
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="coord">
          Coordonnée X :
          <input
            className="border-2"
            type="text"
            onChange={(e) => {
              setLatitude(e.target.value);
            }}
          />
        </label>
        <label htmlFor="coord">
          Coordonnée Y :
          <input
            className="border-2"
            type="text"
            onChange={(e) => {
              setLongitude(e.target.value);
            }}
          />
        </label>
      </div>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          ticket.localisation.push(latitude, longitude);
          tickets.push(ticket);
          console.log(tickets);
        }}
      >
        Submit
      </button>
    </div>
  );
}
