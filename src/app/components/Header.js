import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
      <header className="flex text-white mb-8 flex md:py-6 lg:py-0 md:flex-col lg:flex-row"> 
        <div className="flex items-center gap-8 pl-14 pr-24">
          <img src="/TSLogo.png" alt="Thisai Logo" className="w-36 h-12 "/>
        </div>
        <div className='flex justify-between'>
        <div className="text-[#4d1400] text-4xl font-semibold font-['Roboto'] ">
            Customers
          </div>
        <div className="flex items-center bg-white text-gray-800 rounded-md h-12 pl-4 w-100">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent p-2 text-gray-800 outline-none w-full"
            aria-label="Search"
          />
        </div>
        </div>
        <div className="flex items-center space-x-4 pl-6">
          <FaUserCircle className="text-gray-400 h-8 w-8" />
        </div>
      </header>
    );
  

    
// OLD CODE

{/* <header className="relative text-white mb-8 flex md:py-6 lg:py-0"> 
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
</header> */}

  
};

export default Header;

