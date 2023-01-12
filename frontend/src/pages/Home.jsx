import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import { useCurrentUserContext } from "../contexts/userContext";

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
    </div>
  );
}

export default Home;
