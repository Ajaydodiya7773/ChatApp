import React from 'react'
import { CgLogOut } from "react-icons/cg";

function Logout() {
  return (
    <>
    <div className=' w-[4%]  bg-gray-800 flex  flex-col justify-end'>
   
    <form action="" className='py-2 ml-2 flex w-full'>
      
 <button> <CgLogOut  className='text-5xl p-2 hover:bg-slate-700 rounded-lg duration-200 text-zinc-400 '/></button>
      </form>
    </div>
    
  </>
  )
}

export default Logout
