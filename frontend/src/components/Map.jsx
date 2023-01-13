import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import fire from "../assets/flame.png";

const backURL = import.meta.env.VITE_BACKEND_URL;

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: fire,
});

export default function Map() {
  const [firestations, setFirestations] = useState([]);
  const [interventionType, setInterventionType] = useState("incendie");
  useEffect(() => {
    fetch(`${backURL}/api/vehicle/category/${interventionType}`)
      .then((result) => result.json())
      .then((datas) => {
        setFirestations(datas);
      });
  }, [interventionType]);

  const nav = useNavigate();

  const handleChange = (e) => {
    setInterventionType(e.target.value);
  };
  return (
    <div className="rounded-3xl border-8">
      <div className="w-full flex justify-center">
        {" "}
        <select name="type" id="type" onChange={(e) => handleChange(e)}>
          <option value="incendie">Incendie</option>
          <option value="route">Accident de circulation</option>
          <option value="medicale">Urgence Médical</option>
          <option value="assistance">Assistance à personne en danger</option>
        </select>
      </div>
      <MapContainer center={[45.74462890625, 4.8254523277282715]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.74462890625, 4.8254523277282715]} icon={icon}>
          <Popup>
            Fire <br />
            There is a fire at Wild Code School, the devs are too hot
          </Popup>
        </Marker>

        {firestations.map((firestation) => (
          <Marker
            key={firestation.id}
            position={[firestation.latitude, firestation.longitude]}
          >
            <Popup>
              <button
                type="button"
                onClick={() => {
                  nav(`/firestation/${firestation.id}`);
                }}
              >
                {firestation.name} <br />
                Capacité: {firestation.capacity}
                <br /> {firestation.latitude},{firestation.longitude} <br />
                {firestation.vehicles} vehicles available
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
