// !CreateCustomer1

import React, { useState } from 'react'; 
import ProgressBar from './ProgressBar'; 
import OverlayThree from './OverlayThree'; 
import OverlayOne from './OverlayOne'; 
import { FaTimesCircle, FaCaretDown } from 'react-icons/fa';

function OverlayTwo({onclose}){
  const [formData, setFormData] = useState({})
    const [currentStep, setCurrentStep]= useState(1);
    const steps = ['Address', 'Package', 'Carrier'];
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log('Form submitted:', formData);
      }
      handleNext();
    };
  
    const handleNext = () => {  
      if (validate()) {  
        setCurrentStep(2);
      }
    };

    const [currentOverlay, setCurrentOverlay] = useState(0);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }

 const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


function nextform(){
  return(
    <OverlayThree/>
  )
}

const handlePrevious = () => {
  setCurrentOverlay(0);
}
    return (
    <>  
      <div className='overlay w-[1004px]'>
        <div className='flex justify-between items-center'>
        <h1 className="CC">Create Quotation</h1>
         <FaTimesCircle onClick={onclose} className="text-xl text-[#074E73]" />
        </div>
        <div>
          <div className='p-6'>
          <ProgressBar steps={steps} currentStep={1}/>
          </div>
        
  
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
      <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">Package Details</h1>
      <div className='flex justify-between gap-5'>
      <input className="formContent1" type="text" placeholder="No.of Packages" />
      </div>
      </div>
  
      <h1 className="formTitle mt-[26px] text-xl font-semibold font-['Roboto Condensed']">Item 1</h1>
      <div className='flex justify-between gap-[10px] mb-4'>
      <input className="formContent1" type="text" placeholder="Length" />
      <input className="formContent1" type="text" placeholder="Width" />
      <input className="formContent1" type="text" placeholder="Gross Weight" />
      </div>
  
      <div className='flex justify-between gap-[10px] mb-4'>
      <input className="formContent1" type="text" placeholder="Height" />
      <input className="formContent1" type="text" placeholder="Volumetric Weight" />
  
  
      <div className="formContent1 w-[200px] h-12 p-4 bg-neutral-50 rounded-xl justify-start items-center inline-flex">
      <input className="bg-[#FAFAFA] outline-none" type="text" placeholder="Package Type" />
      <div className="relative"><FaCaretDown/></div>
      </div>
      </div>
    
      <h1 className="formTitle mt-[26px] text-xl font-semibold font-['Roboto Condensed']">Item 2</h1>
      <div className='flex justify-between gap-[10px] mb-4'>
      <input className="formContent1" type="text" placeholder="Length" />
      <input className="formContent1" type="text" placeholder="Width" />
      <input className="formContent1" type="text" placeholder="Gross Weight" />
      </div>
  
      <div className='flex justify-between gap-[10px] mb-4'>
      <input className="formContent1" type="text" placeholder="Height" required/>
      <input className="formContent1" type="text" placeholder="Volumetric Weight" />
  
  
      <div className="formContent1 w-[200px] h-12 p-4 bg-neutral-50 rounded-xl justify-start items-center inline-flex">
      <input className="bg-[#FAFAFA] outline-none" type="text" placeholder="Package Type" />
      <div className="relative"><FaCaretDown/></div>
      </div>
      </div>
      
      {/* <button type="button" className="btn1" onClick={handlePrevious}>Previous</button> */}
      <button type="submit" className="btn2" onClick={handleNext}>Next</button>
      </form>

      {currentStep === 2 && nextform()}
    </div>
    </div>
    </>
    )
  }

  export default OverlayTwo;