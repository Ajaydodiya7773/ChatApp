import React from 'react'
import { IoMdSend } from "react-icons/io";

function Tpye() {
  return (
    <>
<div className='' style={{minHeight:"calc(92vh - 8vh) text-center"}}>
<div className='flex space-x-1'>
<input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-accent w-full max-w-xs" 
  /> 
   <button>
   <IoMdSend className='size-6 m-2'/>
   </button>
</div>
</div>
    </>
  )
}

export default Tpye
