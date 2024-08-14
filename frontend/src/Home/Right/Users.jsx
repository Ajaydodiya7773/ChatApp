import React from "react";
import User from "./User";

function Users() {
  return (
    <>
      <div className="flex gap-3 space-x-3 justify-start py-2 ">
        <h3 className=" bg-slate-700 rounded-full w-10 flex justify-center hover:bg-slate-600 delay-100">
          All
        </h3>
        <h3 className=" bg-slate-700 rounded-full w-20 flex justify-center hover:bg-slate-600 delay-100">
          Unread
        </h3>
        <h3 className=" bg-slate-700 rounded-full w-20 flex justify-center hover:bg-slate-600 delay-100 ">
          Groups
        </h3>
      </div>
      <User/>
    </>
  );
}

export default Users;
