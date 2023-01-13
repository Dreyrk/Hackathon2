/* eslint-disable react/prop-types */
import React from "react";

export default function TruckInfos({ description }) {
  return (
    <>
      <div className="h-[45vh] w-1/2 m-2 p-4 flex-col justify-around">
        <div className="flex flex-wrap items-end">
          <h2 className="w-1/3 text-3xl h-full pb-6 font-bold">
            Récapitulatif:
          </h2>
          <img
            className="h-60 w-96"
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Fourgon_pompe-tonne_%28FPT%29_-_Pompiers.png"
            alt="camion"
          />
        </div>
      </div>
      <div className="m-2 w-[35vw] h-[45vh] h-1/ flex flex-wrap">
        <div className="p-2">
          <h4 className="text-3xl text font-bold">Camion Réservé</h4>
        </div>
        <p className="w-full h-1/2 self-end px-2">
          {description !== ""
            ? description
            : "Faites votre rapport pour justifier la reservation du Camion"}
        </p>
      </div>
    </>
  );
}
