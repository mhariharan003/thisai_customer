// import React from 'react';
// import { FaEye } from 'react-icons/fa';

// const bookings = [
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Delivered' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'In Transit' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Pending' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Envelope', status: 'Delivered' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Cancelled' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Cancelled' },
//   { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Delivered' },
// ];

//  function Bookingtable() {
//   return (
//     <div className="container mx-auto p-4 w-[100%]">
//       <h1 className="text-[#05324c] text-2xl font-bold font-Condensed mt-4 mb-4">Booking List</h1>
//         <table className="min-w-full bg-white border overflow-y-auto no-scrollbar">
//           <thead className=''>
//             <tr className="bg-[#4972b4] text-white font-bold font-Condensed">
//               <th className="w-[100px] pl-[14px] pr-[90px] border-r border-gray-300 rounded-tl-[10px]">From</th>
//               <th className="w-[16px] pl-[14px] pr-[100px] py-[22px] border-r border-gray-300">To</th>
//               <th className="w-[30px] pl-[14px] pr-[90px] py-[22px] border-r border-gray-300">Type</th>
//               <th className="w-[42px] pl-[14px] pr-[90px] py-[22px] border-r border-gray-300">Status</th>
//               <th className="py-2 px-4 border-r">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index} className="text-left text-gray-800 font-Mono hover:bg-gray-100 gap-10">
//                 <td className="pl-[14px] border-b text-wrap">{booking.from}</td>
//                 <td className="pl-[14px] py-2 px-4 border-b">{booking.to}</td>
//                 <td className="py-2 px-4 border-b">{booking.type}</td>
//                 <td className="py-2 px-4 border-b">{booking.status}</td>
//                 <td className="py-2 px-4 border-b text-center">
//                   <button className="text-blue-500 hover:text-blue-700">
//                   <FaEye />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//   );
// }

// export default Bookingtable;


import React from 'react';
import { FaEye } from 'react-icons/fa';

const bookings = [
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Delivered' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'In Transit' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Pending' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Envelope', status: 'Delivered' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Cancelled' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Cancelled' },
  { from: 'Chennai - 600028', to: 'US - 99950', type: 'Box', status: 'Delivered' },
];

export default function Bookingtable() {
  return (
    <div className="container mx-auto mt-4 md:w-[100%]">
      <h1 className="text-[#4972b4] text-2xl font-bold font-Condensed mb-5">Booking List</h1>
      <div className="overflow-y-auto no-scrollbar">
        <table className="min-w-[100%] bg-white border">
          <thead>
            <tr className="bg-[#4972b4] text-white text-[16px] text-left font-bold font-Condensed">
              <th className="w-[100px] pl-[14px] pr-[90px] border-r border-gray-300 rounded-tl-[10px]">From</th>
              <th className="w-[16px] pl-[14px] pr-[100px] py-[22px] border-r border-gray-300">To</th>
              <th className="w-[30px] pl-[14px] pr-[90px] py-[22px] border-r border-gray-300">Type</th>
              <th className="w-[42px] pl-[14px] pr-[90px] py-[22px] border-r border-gray-300">Status</th>
              <th className="w-[96px] pl-3.5 pr-10 py-2.5 rounded-tr-xl border-r">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {bookings.map((booking, index) => (
              <tr key={index} className="text-left text-[18px] text-gray-800 font-normal font-Mono hover:bg-gray-100">
                <td className="h-20 pl-[14px] border-b">{booking.from}</td>
                <td className="pl-[14px] py-2 px-4 border-b">{booking.to}</td>
                <td className="py-2 px-4 border-b">{booking.type}</td>
                <td className="py-2 px-4 border-b">{booking.status}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
