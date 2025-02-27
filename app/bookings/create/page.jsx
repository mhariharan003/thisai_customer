// import React from 'react'
// import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";


// const items = [
//     {
//       id: 1,
//       title: "Item 1",
//       content: (
//           <div className="grid grid-cols-8 gap-4 text-sm text-gray-600">
//             <div>
//               <p className="font-medium">Length</p>
//               <p>40 <span className="text-xs">cm</span></p>
//             </div>
//             <div>
//               <p className="font-medium">Height</p>
//               <p>40 <span className="text-xs">cm</span></p>
//             </div>
//             <div>
//               <p className="font-medium">Weight</p>
//               <p>40 <span className="text-xs">cm</span></p>
//             </div>
//             <div>
//               <p className="font-medium">Width</p>
//               <p>40 <span className="text-xs">cm</span></p>
//             </div>
//             <div>
//               <p className="font-medium">Package Type</p>
//               <p className="text-blue-500">Box</p>
//             </div>
//             <div>
//               <p className="font-medium">Carrier</p>
//               <p className="text-blue-500">FedEx</p>
//             </div>
//             <div>
//               <p className="font-medium">Est. Delivery Date</p>
//               <p>21/10/2024</p>
//             </div>
//             <div>
//               <p className="font-medium">Est. Delivery Cost</p>
//               <p className="text-green-500">₹ 20,000</p>
//             </div>
//           </div>
//         ),
//     },
//     {
//       id: 2,
//       title: "Item 2",
//       content: (
//         <div className="grid grid-cols-8 gap-4 text-sm text-gray-600">
//           <div>
//             <p className="font-medium">Length</p>
//             <p>40 <span className="text-xs">cm</span></p>
//           </div>
//           <div>
//             <p className="font-medium">Height</p>
//             <p>40 <span className="text-xs">cm</span></p>
//           </div>
//           <div>
//             <p className="font-medium">Weight</p>
//             <p>40 <span className="text-xs">cm</span></p>
//           </div>
//           <div>
//             <p className="font-medium">Width</p>
//             <p>40 <span className="text-xs">cm</span></p>
//           </div>
//           <div>
//             <p className="font-medium">Package Type</p>
//             <p className="text-blue-500">Box</p>
//           </div>
//           <div>
//             <p className="font-medium">Carrier</p>
//             <p className="text-blue-500">FedEx</p>
//           </div>
//           <div>
//             <p className="font-medium">Est. Delivery Date</p>
//             <p>21/10/2024</p>
//           </div>
//           <div>
//             <p className="font-medium">Est. Delivery Cost</p>
//             <p className="text-green-500">₹ 20,000</p>
//           </div>
//         </div>
//       ),
//     }
//   ];
  
// const ItemDropdown = () => {
//   const [openItem, setOpenItem] = useState(null);

//   const toggleItem = (id) => {
//     setOpenItem(openItem === id ? null : id); // Collapse if clicked again
//   };

//   return (
//     <>
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Header */}
//       <h2 className="text-lg font-semibold mb-2">Item Details</h2>

//       {/* Dynamic Items */}
//       {items.map((item) => (
//         <div key={item.id} className="bg-gray-100 p-3 rounded-lg mb-2">
//           {/* Clickable Title */}
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleItem(item.id)}
//           >
//             <span className="font-semibold">{item.title}</span>
//             {openItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
//           </div>

//           {/* Expandable Content */}
//           {openItem === item.id && item.content && (
//             <div className="mt-3 p-4 bg-white rounded-lg shadow-md">{item.content}</div>
//           )}
//         </div>
//       ))}
//     </div>
//     </>
    
//   );
// };


// const formFields = [
//     { label: "Name", placeholder: "Hari" },
//     { label: "Mobile", placeholder: "Hari" },
//     { label: "Email", placeholder: "Hari" },
//     { label: "Address", placeholder: "Hari" },
//     { label: "City", placeholder: "Hari" },
//     { label: "State", placeholder: "Hari" },
//     { label: "Country", placeholder: "Hari" },
//     { label: "Pincode", placeholder: "Hari" }
//   ];

// function page() {
//   return (
//     <>
//     <div className="flex flex-col w-[100%] h-[100%] p-4 bg-white relative bg-white rounded-xl overflow-hidden">
//         <div className='flex items-center justify-between mb-2'>
//         <h1 className="text-[#4972b4] text-[26px] font-bold font-Condensed">Create Booking</h1>
//         <button className='w-[178px] h-[48px] flex items-center justify-right gap-3 px-[22px] py-4 rounded-xl  
//                             text-white text-[16px] font-medium font-Roboto bg-[#074E73]'><FaSave style={{"font-size":"22px",}}/>Address Book</button>
//         </div>
        
//         {/* FROM */}
//         <h1 className="formTitle">From</h1>

//         {/* <div className="flex justify-between">
//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Name</label>
//         <input type="text" className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Mobile</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Email</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Address</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>
//         </div>

//         <div className="flex justify-between mt-[10px]">
//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">City</label>
//         <input type="text" className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">State</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Country</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>

//         <div className="flex flex-col gap-2">
//         <label htmlFor="" className="text-gray-900 text-base font-normal font-Inria">Pincode</label>
//         <input type="text" className="w-[290px] h-12 p-4 bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex" placeholder="Hari"/>
//         </div>
        
//         </div> */}

//       <div className="flex justify-between">
//         {formFields.slice(0, 4).map((field, index) => (
//           <div key={index} className="flex flex-col gap-2">
//             <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
//             <input
//               type="text"
//               className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
//               placeholder={field.placeholder}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-[10px]">
//         {formFields.slice(4, 8).map((field, index) => (
//           <div key={index} className="flex flex-col gap-2">
//             <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
//             <input
//               type="text"
//               className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
//               placeholder={field.placeholder}
//             />
//           </div>
//         ))}
//       </div>
        
//          {/* TO */}
//          <div className='flex items-center justify-between mt-[10px] mt-[10px]'>
//          <h1 className="formTitle">To</h1>
//          <button className='w-[178px] h-[48px] flex items-center justify-right gap-3 px-[22px] py-4 rounded-xl  
//                             text-white text-[16px] font-medium font-Roboto bg-[#074E73]'><FaSave style={{"font-size":"22px",}}/>Address Book</button>
//          </div>
         

//          <div className="flex justify-between">
//         {formFields.slice(0, 4).map((field, index) => (
//           <div key={index} className="flex flex-col gap-2">
//             <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
//             <input
//               type="text"
//               className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
//               placeholder={field.placeholder}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-[10px]">
//         {formFields.slice(4, 8).map((field, index) => (
//           <div key={index} className="flex flex-col gap-2">
//             <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
//             <input
//               type="text"
//               className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
//               placeholder={field.placeholder}
//             />
//           </div>
//         ))}
//       </div>

//     {/* ITEM DETAILS */}

//         <div className="max-w-2xl mx-auto p-4">
//               {/* Header */}
//               <h2 className="text-lg font-semibold mb-2">Item Details</h2>
        
//               {/* Dynamic Items */}
//               {items.map((item) => (
//                 <div key={item.id} className="bg-gray-100 p-3 rounded-lg mb-2">
//                   {/* Clickable Title */}
//                   <div
//                     className="flex justify-between items-center cursor-pointer"
//                     onClick={() => toggleItem(item.id)}
//                   >
//                     <span className="font-semibold">{item.title}</span>
//                     {openItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
//                   </div>
        
//                   {/* Expandable Content */}
//                   {openItem === item.id && item.content && (
//                     <div className="mt-3 p-4 bg-white rounded-lg shadow-md">{item.content}</div>
//                   )}
//                 </div>
//               ))}
//             </div>

//         <ItemDropdown/>


//     </div>
//     </>
    
//   )
// }

// export default page


"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";

const items = [
    {
      id: 1,
      title: "Item 1",
      content: (
          <div className="flex gap-20">
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Length</p>
              <p className="text-[#718096] text-base font-normal font-Mono">40 cm</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Height</p>
              <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Weight</p>
              <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Width</p>
              <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Package Type</p>
              <p className="text-[#718096] text-base font-normal font-Mono">Box</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Carrier</p>
              <p className="text-[#718096] text-base font-normal font-Mono">FedEx</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Est. Delivery Date</p>
              <p className="text-[#718096] text-base font-normal font-Mono">21/10/2024</p>
            </div>
            <div>
              <p className="text-gray-900 text-base font-normal font-Inria">Est. Delivery Cost</p>
              <p className="text-[#718096] text-base font-normal font-Mono">₹ 20,000</p>
            </div>
          </div>
        ),
    },
    {
      id: 2,
      title: "Item 2",
      content: (
        <div className="flex gap-20">
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Length</p>
            <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Height</p>
            <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Weight</p>
            <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Width</p>
            <p className="text-[#718096] text-base font-normal font-Mono">40cm</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Package Type</p>
            <p className="text-[#718096] text-base font-normal font-Mono">Box</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Carrier</p>
            <p className="text-[#718096] text-base font-normal font-Mono">FedEx</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Est. Delivery Date</p>
            <p className="text-[#718096] text-base font-normal font-Mono">21/10/2024</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-normal font-Inria">Est. Delivery Cost</p>
            <p className="text-[#718096] text-base font-normal font-Mono">₹ 20,000</p>
          </div>
        </div>
      ),
    }
  ];
  
const ItemDropdown = ({items, openItem, setOpenItem }) => {
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id); // Collapse if clicked again
  };

  return (
    <>
    <div className="w-[100%] mx-auto">
      {/* Header */}
      <h2 className="text-gray-900 text-[20px] font-semibold font-Condensed mt-4 mb-2">Item Details</h2>

      {/* Dynamic Items */}
      {items.map((item) => (
        <div key={item.id} className=" bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] p-3 mb-2">
          {/* Clickable Title */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <span className="text-[#111827] font-Inria font-semibold">{item.title}</span>
            {openItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {/* Expandable Content */}
          {openItem === item.id && item.content && (
            <div className="flex justify-between mt-3 rounded-lg">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
};


const formFields = [
    { label: "Name", placeholder: "Hari" },
    { label: "Mobile", placeholder: "8833990010" },
    { label: "Email", placeholder: "hh@gmail.com" },
    { label: "Address", placeholder: "A2D Street" },
    { label: "City", placeholder: "Chennai" },
    { label: "State", placeholder: "Karnataka" },
    { label: "Country", placeholder: "India" },
    { label: "Pincode", placeholder: "600028" }
  ];

function Page() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <>
    <div className="relative flex flex-col w-[100%] h-[100%] p-4 bg-white rounded-xl overflow-y-auto overflow-hidden">
        <div className='flex items-center justify-between mb-2'>
        <h1 className="text-[#4972b4] text-[26px] font-bold font-Condensed">Create Booking</h1>
        <button className='w-[178px] h-[48px] flex items-center justify-right gap-3 px-[22px] py-4 rounded-xl  
                            text-white text-[16px] font-medium font-Roboto bg-[#074E73]'><FaSave style={{"font-size":"22px",}}/>Address Book</button>
        </div>
        
        {/* FROM */}
        <h1 className="text-gray-900 text-[20px] font-semibold font-Condensed mb-2">From</h1>

      <div className="flex lg:bg-lime-300 lg:w-full md:w-[80%] md:bg-fuchsia-300 justify-between">
        {formFields.slice(0, 4).map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
            <input
              type="text"
              className="w-[300] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-[10px]">
        {formFields.slice(4, 8).map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
            <input
              type="text"
              className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
        
         {/* TO */}
         <div className='flex items-center justify-between mb-2 mt-4'>
         <h1 className="text-gray-900 text-[20px] font-semibold font-Condensed">To</h1>
         <button className='w-[178px] h-[48px] flex items-center justify-right gap-3 px-[22px] py-4 rounded-xl  
                            text-white text-[16px] font-medium font-Roboto bg-[#074E73]'><FaSave style={{"font-size":"22px",}}/>Address Book</button>
         </div>
         

         <div className="flex justify-between">
        {formFields.slice(0, 4).map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
            <input
              type="text"
              className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-[10px]">
        {formFields.slice(4, 8).map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-gray-900 text-base font-normal font-Inria">{field.label}</label>
            <input
              type="text"
              className="w-[290px] h-12 p-4 text-[#111827] bg-neutral-50 rounded-xl shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] justify-start items-center inline-flex"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

    {/* ITEM DETAILS */}
    <ItemDropdown items={items} openItem={openItem} setOpenItem={setOpenItem}/>
    </div>
    </>
    
  )
}

export default Page;
