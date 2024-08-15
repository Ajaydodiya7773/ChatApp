import React from "react";
import User from "./User";

function Users() {
  return (
    <>
      <div className="flex gap-3 space-x-3 justify-start p-3 ">
        <h3 className=" bg-slate-700 rounded-full w-10 flex justify-center hover:bg-slate-500 duration-75-100">
          All
        </h3>
        <h3 className=" bg-slate-700 rounded-full w-20 flex justify-center hover:bg-slate-500 duration-75-100">
          Unread
        </h3>
        <h3 className=" bg-slate-700 rounded-full w-20 flex justify-center hover:bg-slate-500 duration-75-100 ">
          Groups
        </h3>
      </div>
    <div style={{ maxHeight:"calc(84vh - 1vh)" }} className="flex-aj overflow-y-auto py-1 ">
    <User />
      <User /> 
      <User /> 
      <User /> 
      <User /> 
      <User /> 
      <User />
       <User /> 
       <User />{" "}
      <User />
    </div>
    </>
  );
}

export default Users;
