import React from 'react'
import { IoMdSearch } from "react-icons/io";
function Search() {
  return (
    <div className='h-[10vh]'>
      <form action="" className='py-2 ml-2 flex w-full'>
      <input
  type="text"
  placeholder="Type here"
  className="input border-none input-primary bg-black-950 w-full max-w-xs"/>
 <button> <IoMdSearch  className='text-5xl p-2 hover:bg-cyan-950 rounded-full duration-200 text-zinc-500'/></button>
      </form>
    </div>
  )
}

export default Search
