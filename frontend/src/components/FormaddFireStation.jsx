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
    <div className="mt-[5rem] h-screen">
      <form
        className="my-[2rem] w-[60rem] border border-gray-700 rounded-[1.5rem] p-5"
        onSubmit={handleform}
      >
        <h1 className="my-[2rem]">Add Fire Station</h1>

        <label>
          Name
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-black my-[2rem]">
          Capacity
          <div className="flex flex-row-reverse border rounded-[3rem]  h-[90%]">
            <input
              type="text"
              name="Capacity"
              id="Capacity"
              className="form-control relative blok w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-black my-[1rem]">
          Longitude
          <div className="flex flex-row-reverse border rounded-[3rem]  h-[90%]">
            <input
              type="text"
              name="longitude"
              id="longitude"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-black  my-[1rem]">
          latitude
          <div className="flex flex-row-reverse align-baseline border rounded-[1.75rem]  h-[90%]">
            <input
              type="text"
              name="latitude"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setLatidute(e.target.value)}
            />
          </div>
        </label>
        <label>
          Picture
          <div>
            <input
              onChange={(e) => setImg(e.target.value)}
              type="text"
              name="img"
              id="img"
              className="form-control relative block "
            />
          </div>
        </label>
        <div className="flex justify-center w-full ">
          <button
            type="submit"
            className="rounded-3xl bg-gray-700 align-middle font-main-font text-[32px] py-1 px-6"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormaddFireStation;
