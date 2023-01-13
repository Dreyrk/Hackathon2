import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import { useCurrentUserContext } from "../contexts/userContext";
import Cards from "../components/Cards";

function Home() {
  const { user } = useCurrentUserContext();
  const nav = useNavigate();
  useEffect(() => {
    if (!user.id) nav("/login");
  });
  return (
    <div className="justify-center flex-col items-center h-fit">
      <Map />
      <Map />
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
    </div>
  );
}

export default Home;
