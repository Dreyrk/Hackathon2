import React from "react";
import Map from "../components/Map";
import Cards from "../components/Cards";

function Home() {
  return (
    <div>
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-10">
        Vision globale de la flotte :
      </h5>
      <Cards />
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-10">
        Toutes les casernes de votre secteur :
      </h5>
      <div className="my-8 justify-center flex items-center h-fit">
        <Map />
      </div>
    </div>
  );
}

export default Home;
