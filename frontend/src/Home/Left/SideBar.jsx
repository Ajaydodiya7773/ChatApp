import React from 'react'
import Search from './search'
import { BiCommentAdd } from "react-icons/bi";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Users from '../Right/Users';
function SideBar() {
  return (
    <>
      <div className=' w-[30%] bg-gray-900y drop-shadow-2xl  px-6 py-1 text-white' >
       <div className='flex gap-3'>
       <div className='flex-1 w-24 '>
       <h1 className='font-bold text-2xl p-4 flex relative'>Chats </h1>
       </div>
       <div className='flex-1 w-14 py-5'>
       <BiCommentAdd className='flex justify-end size-6 space-y-1 text-zinc-500  hover:bg-slate-700' /> 
       </div>
       <div className='flex py-2'>
        <CgMoreVerticalAlt  className='size-6 my-2 '/>
        </div>
       </div>
        <Search/>
        <Users/>
      </div>

    </>
  )
}

export default SideBar
