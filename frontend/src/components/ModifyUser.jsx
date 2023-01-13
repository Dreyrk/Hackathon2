/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useCurrentUserContext } from "../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function ModifyUser({ users, setUsers }) {
  const [toDelete, setToDelete] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { token } = useCurrentUserContext();

  const changeDelete = (e) => {
    setToDelete(e.target.value);
  };

  const handleDelete = () => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };
    // on créé un nouvel utilisateur et on reutilise
    fetch(`${backURL}/api/users/${toDelete}`, requestOptions).then((res) => {
      if (res.status === 204) {
        fetch(`${backURL}/api/users`)
          .then((response) => response.json())
          .then((datas) => {
            setUsers(datas);
          });
      }
    });
  };

  const handleModal = () => setOpenModal(true);

  return (
    <div className="h-[30vh] flex justify-center items-center">
      <div className="flex justify-around w-[75%]">
        <select
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          name="to delete"
          id="to delete"
          onChange={(e) => changeDelete(e)}
        >
          {users.map((operator) => (
            <option className="h-10" key={operator.id} value={operator.id}>
              {operator.firstname} {operator.lastname}
            </option>
          ))}
        </select>
        <button
          className="inline-flex items-center justify-center rounded-md border my-2 border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          type="button"
          onClick={handleModal}
        >
          Delete
        </button>
      </div>
      {openModal ? (
        <div className="h-screen w-screen absolute left-0 top-0 bg-black/60 z-40 flex justify-center items-center">
          <div className="bg-white h-48 w-[21rem] flex flex-col justify-around items-center rounded-2xl">
            Are you sure you want to delete this user ?
            <div className="flex w-40 justify-between">
              <button
                className="w-16 h-10 rounded bg-slate-500"
                type="button"
                onClick={() => {
                  handleDelete();
                  setOpenModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="w-16 h-10 rounded bg-slate-500"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
