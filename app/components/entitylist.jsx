import React from 'react';
import { FaCrown, FaSearch } from 'react-icons/fa';

const customers = [
  { name: 'Sujatha', phone: '9992057859', email: 'suja@gmail.com', href: '/dash/Customers/CusDetails', selected: true },
  { name: 'Adhithya', phone: '9992857859', email: 'adhi@gmail.com', selected: false },
  { name: 'Ajay Krishna', phone: '9992857859', email: 'ak@gmail.com', selected: false },
  { name: 'Mukund', phone: '9992857859', email: 'mukundk@gmail.com', selected: false },
  { name: 'Saranya', phone: '9992857859', email: 'saran@gmail.com', selected: false },
  { name: 'Rajesh Kumar', phone: '9992857859', email: 'rk@gmail.com', selected: false },
];

const EntityList = () => {
  return (
    <div className="relative flex flex-col max-w-sm mx-auto w-[100%] lg:w-[70%] h-[100%] p-4 bg-[#F1F4F7] rounded-lg md:w-[50%] gap-2 items-center no-scrollbar overflow-hidden overflow-y-auto">
        <div className="absolute z-60 sticky top-0 flex items-center px-4 mb-4 h-12 w-full bg-white rounded-md">
          <FaSearch className="text-gray-700 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search Customer"
            className="flex-grow p-2 outline-none rounded-md"
          />
        </div>
      
      <div className='w-full overflow-y-auto no-scrollbar'>
      <ul className="w-full h-[100%] mb-[2%] flex flex-col gap-2">
        {customers.map((customer, index) => (
          <li
            key={index}
            className={`flex items-top px-4 py-3 border rounded-md bg-white shadow-sm transition-colors duration-200 ${
              customer.selected ? 'border-2 border-[#4c62b8]' : 'border-gray-200'
            }`}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-grow">
              <div className="text-gray-900 text-lg font-bold font-Inria">{customer.name}</div>
              <div className="text-gray-600 text-normal font-Mono">{customer.phone}</div>
              <div className="text-gray-600 text-normal font-Mono">{customer.email}</div>
            </div>
            <FaCrown className="text-xl text-[#4972b4]" />
          </li>
        ))}
      </ul>
      </div>
      </div>
  );
};

export default EntityList;
