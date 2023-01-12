import React from "react";

export default function TruckModal() {
  return (
    <div className="m-2 p-2 h-[75vh] w-[80vw] flex flex-wrap justify-between bg-slate-200 border-solid">
      <div className="h-[45vh] w-1/2 bg-slate-100 m-2 p-4 flex-col justify-around shadow-md">
        <div className="flex flex-wrap items-end">
          <h2 className="w-1/3 text-xl h-full pb-6 font-bold">
            Recapitulatif :
          </h2>
          <img
            className="h-60 w-96"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pompiers_Strasbourg_-_Renault_Midlum-5.JPG/1200px-Pompiers_Strasbourg_-_Renault_Midlum-5.JPG"
            alt="camion"
          />
        </div>
      </div>
      <div className="m-2 w-[35vw] h-[45vh] h-1/ flex flex-wrap bg-slate-100 shadow-md">
        <div className="p-2">
          <h4 className="text-xl text font-bold">Camion Réservé</h4>
        </div>
        <p className="w-full h-1/2 self-end px-2">
          Descriptioo kdid idizi idiizjdidin izdig jduihzd uazdbhuizebndb
          jadbbuizbd habdionbazb dbubbidjidzi,zin ooooooooooon
        </p>
      </div>

      <div className="w-full h-[20vh] bg-slate-200 mb-4">
        <label htmlFor="message">
          Message :
          <textarea
            className="h-full w-full border shadow-lg"
            placeholder="Type a description of incident..."
            type="text-area"
          />
        </label>
      </div>
    </div>
  );
}
