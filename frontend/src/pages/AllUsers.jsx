import ModifyUser from "@components/ModifyUser";
import UserList from "@components/UserList";
import React from "react";

function ListUsers() {
  return (
    <div className="w-[80%] flex justify-between">
      <div className="w-[50%]">
        <UserList />
      </div>
      <div className="w-[50%]">
        <ModifyUser />
      </div>
    </div>
  );
}

export default ListUsers;
