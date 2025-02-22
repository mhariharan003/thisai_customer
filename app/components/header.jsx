import React from 'react'
import { FaUserCircle, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <div className='flex items-center justify-between mb-8'>
        {/* PAGE TITLE */}
        <h1 className="text-[#4d1400] text-4xl font-semibold font-['Roboto']">Customer</h1>

        {/* ICONS */}
        <div className="flex items-center space-x-4 pl-6">
        <FaBell className="text-gray-400 h-8 w-8" />
        <FaUserCircle className="text-gray-400 h-8 w-8" />
      </div>
    </div>
  )
}

export default Header;