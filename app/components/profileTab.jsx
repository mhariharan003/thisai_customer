
import React from 'react'
import { FaEdit, FaFileAlt } from 'react-icons/fa'


export default function profileTab() {
  return (
    <div className="w-[522px] h-[340px] rounded-[10px] p-4 bg-[#F1F4F7]">
      <div className="flex flex-col w-[100%] rounded-xl h-[100%] p-5 gap-[30px] bg-white">
        {/* FIRST ROW */}
        <div className="flex gap-12">
          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-[12px] font-normal font-Inria">Mobile</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">9992057859</h1>
          </div>

          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">Email</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">ana@gmail.com</h1>
          </div>

          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">City</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">Chennai</h1>
          </div>

          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">State</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">Tamil Nadu</h1>
          </div>
          </div>

          {/* SECOND ROW */}
          <div className="flex gap-[75px]">
          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">Country</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">United</h1>
          </div>

          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">Pincode</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">600028</h1>
          </div>

          <div className='flex flex-col gap-1.2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">Address</p>
            <h1 className="text-gray-900 text-xs font-bold font-Mono">24XYZ, A2D street, Chennai, Tamil Nadu</h1>
          </div>
          </div>

          {/* THIRD ROW */}
          <div className="flex items-center gap-28">
          <div className='flex flex-col gap-2'>
            <p className="text-[#718096] text-xs font-normal font-Inria">Contract Document</p>
            <div className="w-[120px] h-[100px] rounded-xl border-4 border-gray-300"><FaFileAlt className="relative text-[40px] text-[#4972b4] top-[24px] left-[40px]"/></div>
          </div>
          <button className="h-[34px] px-4 py-[9px] text-white bg-[#902f01] rounded-lg justify-start items-center gap-1.5 inline-flex text-sm font-medium font-Roboto"><FaEdit className="text-white"/>Edit</button>
          </div>

      </div>
    </div>
  )
}
