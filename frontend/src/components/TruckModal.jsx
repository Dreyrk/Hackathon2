import React, { useState } from "react";
import TruckInfos from "./TruckInfos";

export default function TruckModal() {
  const [description /* setDescription */] = useState("");
  return (
    <div className="m-2 p-2 h-[75vh] w-[80vw] flex flex-wrap justify-between border-4 rounded-2xl border-gray-300 border-solid">
      <TruckInfos description={description} />
      <div className="w-full h-[20vh] mx-2 mb-4 bg-slate-200 rounded-md">
        <p className="p-2">
          {description !== "" ? description : "Pas de description :/"}
        </p>
      </div>
    </div>
  );
}
