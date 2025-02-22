// "use client"
// import React, { useState, useEffect } from 'react';
// import EntityList from '../components/Entitylist';
// import BookingTable from '../components/Bookingtable';

// const CustomersPage = () => {
//   const [customersData, setCustomersData] = useState([]);
//   const [bookingsData, setBookingsData] = useState([]);
//   const [graphsData, setGraphsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setCustomersData(await fetchCustomersData());
//       setBookingsData(await fetchBookingsData());
//       setGraphsData(await fetchGraphsData());
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="transition-all duration-300 flex w-[100%] h-screen p-4 relative bg-[#f3f3f3] overflow-y-auto">
//       <EntityList data={customersData} />
//       <div className="flex w-[100%] lg:w-[100%] lg:gap-2 md:w-[100%] sm:gap-4 h-[100%] lg:flex-col md:flex-col md:overflow-y-auto md:gap-10 overflow-hidden">
//         {/* <Graphs data={graphsData} /> */}
//         <BookingTable data={bookingsData} />
//       </div>
//     </div>
//   );
// };

// export default CustomersPage;

"use client"

import Image from "next/image";
import React, { useState } from 'react';
import Entitylist from "../components/entitylist";
import CombinedCharts from "../components/charts/combinedcharts";
import Bookingtable from "../components/Bookingtable";



export default function Home() {
  
  return (
    <div className=" transition-all duration-300 flex w-[100%] h-screen relative bg-[#f3f3f3] overflow-y-auto">
          {/* LEFT    w-[80%] md:w-[8%] lg:w-[16%] xl:w-[20%]    */} 
          
      {/* RIGHT     md:w-[92%] lg:w-[84%] xl:w-[80%]   */}
      <div className="flex bg-white w-[100%] h-[100%] rounded-[12px] h-screen md:w-[100%] p-4 gap-5 overflow-y-auto overflow-hidden">
        <Entitylist/>
      <div className="flex w-[100%] lg:w-[100%] lg:gap-2 md:w-[100%] sm:gap-4 h-[100%] lg:flex-col md:flex-col md:overflow-y-auto md:gap-10 overflow-hidden">
        {/* <div className=""> */}
        <CombinedCharts/>
        <Bookingtable/>
        {/* </div> */}
      </div>
      </div>
      </div>
  );
}