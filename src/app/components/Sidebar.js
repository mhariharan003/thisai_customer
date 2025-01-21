"use client";

import React, { useState } from 'react';
import { FaTachometerAlt, FaTruck, FaUsers, FaUserTie, FaBox, FaClipboardList, FaUserAlt } from 'react-icons/fa';

const menuItems = [
  { name: "Dashboard", href: "#dashboard", icon: <FaTachometerAlt style={{fontSize: '24px' }} />, active: true},
  { name: "Tracking", href: "#tracking", icon: <FaTruck   style={{fontSize: '24px' }}/> },
  { name: "Customers", href: "#customers", icon: <FaUsers style={{fontSize: '24px' }}/>, active: false },
  { name: "Agents", href: "#agents", icon: <FaUserTie style={{fontSize: '24px' }}/> },
  { name: "Carriers", href: "#carriers", icon: <FaBox style={{fontSize: '24px' }}/> },
  { name: "Bookings", href: "#bookings", icon: <FaClipboardList style={{fontSize: '24px' }}/> },
  { name: "Users", href: "#users", icon: <FaUserAlt style={{fontSize: '24px' }}/> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-gray-800 text-white lg:hidden"
      >
        Toggle Menu 
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block w-full lg:w-64 bg-[#F3F3F3] text-white fixed lg:relative h-screen lg:h-screen`}
      >
        <nav className="flex flex-col space-y-3 p-4 rounded-[20px] w-[265px] h-[890px] font-['Roboto'] font-semibold pl-5 pr-[100px] pt-[40px] bg-white">
          {/* <div className="text-xl font-bold">Menu</div> */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex gap-[16px] items-center p-2 rounded font-['Roboto'] text-[16px] text-[#718096] font-500${
                item.active ? 'text-[#902F01]' : 'text-[#718096] hover:text-[#902F01]'
              }`}
            >
              <span className="mr-2 fontSize-[24px]">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
