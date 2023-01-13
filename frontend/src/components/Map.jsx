import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function Map() {
  const [firestations, setFirestations] = useState([]);
  useEffect(() => {
    fetch(`${backURL}/api/firestation`)
      .then((result) => result.json())
      .then((datas) => {
        setFirestations(datas);
      });
  }, []);
  return (
    <div className="rounded-3xl border-8">
      <MapContainer center={[45.764043, 4.835659]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {firestations.map((firestation) => (
          <Marker
            key={firestation.id}
            position={[firestation.latitude, firestation.longitude]}
          >
            <Popup>
              <button type="button" onClick={() => {}}>
                {firestation.name} <br />
                Capacité: {firestation.capacity}
                <br /> {firestation.latitude},{firestation.longitude}
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
