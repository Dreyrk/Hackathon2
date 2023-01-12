/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import createuser from "../assets/New Project(17).png";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function CreateUser() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [rights, setRights] = useState(0);
  const [redForm, setRedForm] = useState([]);

  const handleSubmit = (e) => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== "" &&
      password === verifPassword
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        firstname,
        lastname,
        rights,
        email,
        password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
      e.preventDefault();
      // on créé un nouvel utilisateur et on reutilise
      fetch(`${backURL}/inscription`, requestOptions).catch((err) => {
        console.warn(err);
      });
    } else {
      e.preventDefault();
      const emptyFields = [];
      if (firstname === "") emptyFields.push("firstname");
      if (lastname === "") emptyFields.push("lastname");
      if (email === "") emptyFields.push("email");
      if (password === "") emptyFields.push("password");
      if (verifPassword === "") emptyFields.push("verifPassword");
      setRedForm(emptyFields);
    }
  };

  return (
    <div className="flex justify-around items-center h-[80vh] w-full">
      <div className="flex justify-center items-center w-full">
        <htmlForm className="w-full max-w-lg ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  redForm.includes("firstname") ? "border-red-500" : ""
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setFirstname(e.target.value)}
              />
              {redForm.includes("firstname") ? (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  redForm.includes("lastname") ? "border-red-500" : ""
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => setLastname(e.target.value)}
              />
              {redForm.includes("lastname") ? (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  redForm.includes("email") ? "border-red-500" : ""
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-email"
                type="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              {redForm.includes("email") ? (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  redForm.includes("email") ? "border-red-500" : ""
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
              {redForm.includes("password") ? (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-verifpassword"
              >
                Verify Password
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  redForm.includes("verifPassword") ? "border-red-500" : ""
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-verifpassword"
                type="password"
                placeholder="******************"
                onChange={(e) => setVerifPassword(e.target.value)}
              />
              {redForm.includes("verifPassword") ? (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field with a corresponding password.
                </p>
              ) : (
                <p className="text-gray-600 text-xs italic">
                  Confirm your password{" "}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Rights
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => setRights(e.target.value)}
                >
                  <option value="0">User</option>
                  <option value="1">Admin</option>
                  <option value="2">Super Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-grow md:w-1/3 px-3 md:mb-0 flex justify-end items-end">
              <button
                type="button"
                className="block appearance-none w-40 bg-gray-600 border border-gray-200 text-slate-200 rounded leading-tight focus:outline-none focus:border-gray-500 h-12 text-center hover:bg-[#293A4E]"
                onClick={(e) => handleSubmit(e)}
              >
                Create
              </button>
            </div>
          </div>
        </htmlForm>
      </div>
      <img
        src={createuser}
        alt="Firefighter on a call"
        className="h-[70vh] mt-10"
      />
    </div>
  );
}
