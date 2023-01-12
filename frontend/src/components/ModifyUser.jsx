import React, { useState, useEffect } from "react";
import { useCurrentUserContext } from "../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function ModifyUser() {
  const [toDelete, setToDelete] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState([]);
  const { token } = useCurrentUserContext();
  useEffect(() => {
    fetch(`${backURL}/api/users`)
      .then((response) => response.json())
      .then((datas) => {
        setUsers(datas);
      });
  }, []);

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
    fetch(`${backURL}/api/users/${toDelete}`, requestOptions)
      .then(setOpenModal(false))
      .then(
        fetch(`${backURL}/api/users`)
          .then((response) => response.json())
          .then((datas) => {
            setUsers(datas);
          })
      );
  };

  const handleModal = () => setOpenModal(true);

  return (
    <div>
      <div>
        <select
          name="to delete"
          id="to delete"
          onChange={(e) => changeDelete(e)}
        >
          {users.map((operator) => (
            <option key={operator.id} value={operator.id}>
              {operator.firstname} {operator.firstname}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleModal}>
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
                onClick={handleDelete}
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
