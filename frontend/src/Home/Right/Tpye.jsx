
import { IoMdSend } from "react-icons/io";

function Tpye() {
  return (
    <>
<div className='p-10 ml-7' style={{minHeight:"calc(92vh - 8vh) text-center"}}>
<div className='flex space-x-1 justify-center max-h-1.5'>
<input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-accent w-full max-w-2xl flex  " 
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
