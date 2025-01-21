import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
<header className="relative text-white mb-[30px] flex md:py-[6%] lg:py-[0%]"> 
  <div className="flex items-center md:mb-[0%] gap-[78px] pl-[58px] pr-[557px]">
    <img src="/TSLogo.png" alt="Thisai" className=' w-[149px] h-[50px]'/>
    <div className="text-[#4d1400] text-4xl font-semibold font-['Roboto'] mb-[4%] md:mb-[0%]">
      Customers
    </div>
  </div>

  <div className="flex items-center bg-white text-gray-800 rounded-md h-[3rem] pl-4 w-[30%]">
    <FaSearch className="text-gray-400" />
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent p-[2%] text-gray-800 outline-none w-full"
    />
  </div>

  <div className="flex items-center space-x-[4%] pl-[6%]">
    <FaUserCircle className="text-gray-400 h-[2rem] w-[2rem]" />
  </div>
</header>

  );
};

export default Header;

