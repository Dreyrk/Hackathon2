import React, { useState } from "react";

function FormaddFireStation() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatidute] = useState(0);
  const [img, setImg] = useState("");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    name,
    capacity,
    longitude,
    latitude,
    img,
  });

  const handleform = (e) => {
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    fetch("http://localhost:5000/api/firestation", requestOptions);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[40vh] w-full mt-[5rem]">
      <form
        className="flex flex-col my-[2rem] w-full border border-gray-700 p-5"
        onSubmit={handleform}
      >
        <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-6">
          Add Fire Station
        </h1>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none block w-[36rem] bg-gray-200 text-gray-700 border py-1"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Capacity
            <div className="flex flex-row-reverse border h-[90%]">
              <input
                type="text"
                name="Capacity"
                id="Capacity"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-1"
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Longitude
            <div>
              <input
                type="text"
                name="longitude"
                id="longitude"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-1"
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            latitude
            <div className="flex flex-row-reverse align-baseline border h-[90%]">
              <input
                type="text"
                name="latitude"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-1"
                onChange={(e) => setLatidute(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            URL Picture
            <div>
              <input
                onChange={(e) => setImg(e.target.value)}
                type="text"
                name="img"
                id="img"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-1"
              />
            </div>
          </label>
        </div>
        <div className="flex justify-center w-full ">
          <button
            type="submit"
            className="block appearance-none w-40 bg-gray-600 border border-gray-200 text-slate-200 rounded leading-tight focus:outline-none focus:border-gray-500 h-12 text-center hover:bg-[#293A4E] mt-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormaddFireStation;
