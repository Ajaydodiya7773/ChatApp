import React from 'react'
import Search from './search'
import { BiCommentAdd } from "react-icons/bi";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Users from '../Right/Users';
function SideBar() {
  return (
    <>
      <div className=' w-[30%] bg-stone-900 drop-shadow-2xl  px-11 text-white' >
       <div className='flex py-1 px-2 align-top w-max space-y-5 gap-28'>
       <h1 className='font-bold text-2xl p-4 flex '>Chats </h1>
       <BiCommentAdd className='flex  size-6 space-y-1 text-zinc-500' /> 
       <CgMoreVerticalAlt  className='size-6 ml-3'/>
       </div>
        <Search/>
        <Users/>
      </div>

    </>
  )
}

export default SideBar
