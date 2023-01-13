import React from "react";
import { useTicketContext } from "../contexts/interventionTicketContext";
import TruckInfos from "./TruckInfos";

export default function TruckModal() {
  const { ticket } = useTicketContext();
  return (
    <div className="m-2 p-2 h-[75vh] w-[80vw] flex flex-wrap justify-between border-4 rounded-2xl border-gray-300 border-solid">
      <TruckInfos />
      <div className="w-full h-[20vh] mx-2 mb-4 bg-slate-200 rounded-md">
        <p className="p-2">
          {ticket.description !== ""
            ? ticket.description
            : "Pas de description :/"}
        </p>
      </div>
    </div>
  );
}
