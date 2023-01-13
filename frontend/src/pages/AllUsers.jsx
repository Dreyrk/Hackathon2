import ModifyUser from "@components/ModifyUser";
import UserList from "@components/UserList";
import React, { useEffect, useState } from "react";

const backURL = import.meta.env.VITE_BACKEND_URL;

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${backURL}/api/users`)
      .then((response) => response.json())
      .then((datas) => {
        setUsers(datas);
      });
  }, []);

  return (
    <div className="w-[80%] flex justify-between">
      <div className="w-[50%]">
        <UserList users={users} setUsers={setUsers} />
      </div>
      <div className="w-[50%]">
        <ModifyUser users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default ListUsers;
