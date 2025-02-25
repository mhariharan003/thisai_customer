import React from 'react'
import { FaSave } from 'react-icons/fa'

function page() {
  return (
    <>
    <div className="flex flex-col w-[100%] h-[100%] p-4 bg-white relative bg-white rounded-xl overflow-hidden">
        <div className='flex items-center justify-between mb-2'>
        <h1 className="text-[#4972b4] text-[26px] font-bold font-Condensed">Create Booking</h1>
        <button className='w-[178px] h-[48px] flex items-center justify-right gap-3 px-[22px] py-4 rounded-xl  
                            text-white text-[16px] font-medium font-Roboto bg-[#074E73]'><FaSave style={{"font-size":"22px",}}/>Address Book</button>
        </div>
        
        {/* FROM */}
        <h1 className="formTitle">From</h1>
        <div className="w-[250px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex">
            <div className="grow shrink basis-0 text-gray-900 text-sm font-medium font-['Roboto Mono']">Hari</div>
        </div>
    </div>
    </>
    
  )
}

export default page


