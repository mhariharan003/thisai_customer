import React from 'react'
import Image from 'next/image'
import { FaUserCircle, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <div className='flex items-center justify-between w-[100%] mb-8'>
        {/* PAGE TITLE */}
        <div className="text-[#05324c] text-4xl font-semibold font-['Roboto']">Customers</div>
        {/* ICONS */}
        <div className="flex items-center gap-4 pl-6">
        <FaBell className="bg-[015e8b] h-8 w-8" />
        <FaUserCircle
            className="text-gray-400 h-8 w-8 cursor-pointer"
          />
      </div>
    </div>
  )
}

export default Header;