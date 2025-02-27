// import React, { useState } from 'react';
// import ProgressBar from './ProgressBar';
// import Overlay2 from './OverlayTwo';
// import { FaTimesCircle, FaCaretDown } from 'react-icons/fa';

// // !CreateCustomer
// function CreateCustomer({onclose}) {
//   const [formData, setFormData] = useState({
//     nameFrom: '',
//     phoneFrom: '',
//     companyFrom: '',
//     emailFrom: '',
//     addressFrom: '',
//     cityFrom: '',
//     stateFrom: '',
//     countryFrom: 'In',
//     pincodeFrom: '',
//     nameTo: '',
//     phoneTo: '',
//     companyTo: '',
//     emailTo: '',
//     addressTo: '',
//     cityTo: '',
//     stateTo: '',
//     countryTo: '',
//     pincodeTo: '',
//   });
//   const [currentStep, setCurrentStep]= useState(0);
//   const steps = ['Address', 'Package', 'Carrier'];
//   const [errors, setErrors] = useState({});

//   const handleNext = () => { 
//     if (validate()) {
//       setCurrentStep(1);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         newErrors[key] = 'This field is required';
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form submitted:', formData);
//     }
//   };

// function nextform(){
//   return(
//     <Overlay2/>
//   )
// }

//   return (
//     <div className='overlay' id='mainoverlay' >
//       <div className='flex justify-between items-center'>
//         <h1 className="CC">Create Quotation</h1>
//         <FaTimesCircle onClick={onclose}  className="text-xl text-[#074E73]" />
//       </div>
//       <div className="p-6">
//         <ProgressBar steps={steps} currentStep={currentStep} />
//       </div>
      
//       <form onSubmit={handleSubmit}>
//   {['From', 'To'].map((section) => (
//     <div key={section} className='flex flex-col mb-7'>
//       <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">{section}</h1>
      
//       {[
//         [
//           { name: 'name', placeholder: 'Name' },
//           { name: 'phone', placeholder: 'Phone Number' }
//         ],
//         [
//           { name: 'company', placeholder: 'Company Name' },
//           { name: 'email', placeholder: 'Email' }
//         ],
//         [
//           { name: 'address', placeholder: 'Address (Area and Street)', fullWidth: true }
//         ],
//         [
//           { name: 'city', placeholder: 'City' },
//           { name: 'state', placeholder: 'State' }
//         ],
//         [
//           { name: 'country', placeholder: 'Country' },
//           { name: 'pincode', placeholder: 'Pincode' }
//         ]
//       ].map((fieldGroup, groupIndex) => (
//         <div key={groupIndex} className={`flex justify-between gap-5 mb-4 ${fieldGroup[0].fullWidth ? 'w-full' : ''}`}>
//           {fieldGroup.map((field) => (
//             <div key={field.name} className={field.fullWidth ? 'w-full' : ''}>
//               <input
//                 className={field.fullWidth ? 'formContent2 w-full' : 'formContent'}
//                 type="text"
//                 name={`${field.name}${section}`}
//                 placeholder={field.placeholder}
//                 onChange={handleChange}
//               />
//               {errors[`${field.name}${section}`] && (
//                 <p className="text-red-500 text-sm">{errors[`${field.name}${section}`]}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   ))}

//   <div className='flex justify-end gap-[32px]'>
//     <button type="submit" className="btn" id='nextButton' onClick={handleNext}>Next</button>
//     <button className="btn1" id='addAddressButton'>Add Address Book</button>
//   </div>
// </form>

// {currentStep === 1 && nextform()}
//     </div>
//   );
// }

// export default CreateCustomer;

import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

export default function CreateCustomer(){
  return(
    <>
    <div className="overlay">
    <div className='flex justify-between items-center mb-8'>
         <h1 className="CC">Create Customer</h1>
         <FaTimesCircle onClick={onclose}  className="text-xl text-[#074E73]" />
    </div>

    <div className="flex flex-col gap-5 mb-6">

    <div className='flex justify-between gap-[10px]'>
      <input type="text" placeholder="Name" className="customer"/>
      <input type="text" placeholder="Email" className="customer" />
    </div>

    <div className='flex justify-between gap-[10px]'>
      <input type="text" placeholder="Mobile" className="customer"/>
      <input type="text" placeholder="Address" className="customer" />
    </div>

    <div className='flex justify-between gap-[10px]'>
      <input type="text" placeholder="City" className="customer"/>
      <input type="text" placeholder="State" className="customer" />
    </div>

    <div className='flex justify-between gap-[10px]'>
      <input type="text" placeholder="Country" className="customer"/>
      <input type="text" placeholder="Pincode" className="customer" />
    </div>

    <div className='flex justify-between gap-[10px]'>
      <input type="text" placeholder="Customer Category" className="customer"/>
    </div>
    </div>
    
    <div>
      <h1 className="text-[#4972b4] text-base font-semibold font-Roboto">Type</h1>
    </div>

    <div className="flex gap-[12px]">

    <div className="h-10 px-[22px] py-3 bg-neutral-50 rounded-xl justify-start items-center inline-flex">
      <div className="text-gray-900 text-xs font-medium font-Mono">Personal</div>
    </div>
    
    <div className="h-10 px-[22px] py-3 bg-neutral-50 rounded-xl justify-start items-center inline-flex">
      <div className="text-gray-900 text-xs font-medium font-Mono">Business</div>
    </div>
      </div>    
    
      <div className='flex justify-between gap-[10px] mt-6'>
      <input type="text" placeholder="Tax Id" className="customer"/>
      <input type="text" placeholder="License Number" className="customer" />
    </div>

    <div className='flex justify-between gap-[10px] mt-5'>
      <input type="text" placeholder="Designation" className="customer"/>
      <input type="text" placeholder="Company Name" className="customer" />
    </div>


    <button type="submit" className="btn ml-90" >Create</button>
    </div>
    </>
  )
}

