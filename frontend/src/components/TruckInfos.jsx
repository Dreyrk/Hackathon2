/* eslint-disable react/prop-types */
import React from "react";
import { useTicketContext } from "../contexts/interventionTicketContext";

export default function TruckInfos() {
  const { ticket } = useTicketContext();

  return (
    <>
      <div className="h-[45vh] w-1/2 m-2 p-4 flex-col justify-around">
        <div className="flex flex-wrap items-end">
          <h2 className="w-1/3 text-3xl h-full pb-6 font-bold">
            Récapitulatif:
          </h2>
          <img className="h-60 w-96" src={ticket.truck.img} alt="camion" />
        </div>
      </div>
      <div className="m-2 w-[35vw] h-[45vh] h-1/ flex flex-wrap">
        <div className="p-2">
          <h4 className="text-3xl text font-bold">
            Type d'incident : {ticket.type} <br /> Vehicule de catégorie :{" "}
            {ticket.truck.category} Conseillé
          </h4>
        </div>
      </div>
    </>
  );
}
