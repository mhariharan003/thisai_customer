import React from 'react'

function bookingreview() {
  return (
    <>
    <div className="flex flex-col w-full h-full p-4 rounded-xl bg-white overflow-y-auto overflow-hidden">

      {/* ADDRESS DETAILS */}
      <div className='flex flex-col w-[660px] mb-11'>
        <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Address Details</h1>
        <div className="flex flex-col gap-[10px]">

          <div className="flex gap-[219px]">
            <h1 className="text-[#718096] text-lg font-bold font-Inria">From</h1>
            <p className="text-gray-900 text-base text-wrap font-normal font-Mono">
            Person1 XYZ Street, 4th Cross, Ramakrishna Nagar,
            Chennai, Tamilnadu 600028
            </p>
          </div>

          <div className="flex gap-[244px]">
            <h1 className="text-[#718096] text-lg font-bold font-Inria">To</h1>
            <p className="text-gray-900 text-base text-wrap font-normal font-Mono">
            Person2 XYZ Street, 4th Cross, Ramakrishna Nagar,
            Chennai, Tamilnadu 600028
            </p>
          </div>
        </div>
      </div>

      {/* PACKAGE & INSTRUCTIONS */}

      <div className="flex gap-[110px]">
      <div className="flex flex-col w-[434px] gap-[16px]">
      <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Package Details</h1>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[134px]">
            <p className="text-[#718096] text-lg font-normal font-Inria">No.of Packages</p>
            <p className="text-gray-900 text-base font-normal font-Mono">02</p>
          </div>
          <div className="flex gap-[158px]">
            <p className="text-[#718096] text-lg font-normal font-Inria">Pickup Date</p>
            <p className="text-gray-900 text-base font-normal font-Mono">02/10/2024</p>
          </div>
          <div className="flex gap-[156px]">
            <p className="text-[#718096] text-lg font-normal font-Inria">Pickup Time</p>
            <p className="text-gray-900 text-base font-normal font-Mono">10:00 AM - 12:00 AM</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col w-[290px] gap-1">
        <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Instructions</h1>
        <div className="w-[290px] p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </div>
      </div>
      </div>


      <div className="flex flex-col gap-4">
      <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Item Details</h1>
        <div className="flex w-full h-full px-4 py-3.5 gap-3 bg-[#edf2fa] rounded-xl shadow-[0px_0px_2px_0px_rgba(0,0,0,0.40)] overflow-x-auto overflow-hidden">
          <div className="w-full h-full flex flex-col px-4 py-3 gap-2 rounded-xl bg-white">
            <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Item 1</h1>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Length</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Height</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Weight</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Width</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Package Type</p>
              <p className="text-gray-900 text-base font-normal font-Mono">Box</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Est. Cost</p>
              <p className="text-gray-900 text-lg font-medium font-Mono">₹ 20000</p>
            </div>
          </div>

          <div className="w-full h-full flex flex-col px-4 py-3 gap-2 rounded-xl bg-white">
            <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Item 2</h1>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Length</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Height</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Weight</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Width</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Package Type</p>
              <p className="text-gray-900 text-base font-normal font-Mono">Box</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Est. Cost</p>
              <p className="text-gray-900 text-lg font-medium font-Mono">₹ 20000</p>
            </div>
          </div>

          <div className="w-full h-full flex flex-col px-4 py-3 gap-2 rounded-xl bg-white">
            <h1 className="text-[#4972b4] text-[22px] font-bold font-Condensed">Item 3</h1>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Length</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Height</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Weight</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Width</p>
              <p className="text-gray-900 text-base font-normal font-Mono">40cm</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Package Type</p>
              <p className="text-gray-900 text-base font-normal font-Mono">Box</p>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <p className="text-gray-900 text-base font-normal font-Inria">Est. Cost</p>
              <p className="text-gray-900 text-lg font-medium font-Mono">₹ 20000</p>
            </div>
          </div>

          
        </div>





      </div>

    </div>
    </>
  )
}

export default bookingreview