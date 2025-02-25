import React, { useState } from 'react'; 
import ProgressBar from './ProgressBar'; 
import OverlayThree from './OverlayThree'; 
import OverlayOne from './OverlayOne'; 
import { FaTimesCircle, FaCaretDown } from 'react-icons/fa';

function OverlayTwo({ onClose }) {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const steps = ['Address', 'Package', 'Carrier'];
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      handleNext();
    }
  };

  const handleNext = () => {
    if (validate()) {
      setCurrentStep((prevStep) => prevStep + 1); // Move to next step
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1); // Move to previous step
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <>  
      <div className='overlay w-[1004px]'>
        <div className='flex justify-between items-center'>
          <h1 className="CC">Create Quotation</h1>
          <FaTimesCircle onClick={onClose} className="text-xl text-[#074E73]" />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='p-6'>
            <ProgressBar steps={steps} currentStep={currentStep} />
          </div>

          {currentStep === 0 && <OverlayOne />}
          {currentStep === 1 && (
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">Package Details</h1>
                <div className='flex justify-between gap-5'>
                  <div>
                    <input className="formContent1 bg-transparent" type="text" placeholder="No.of Packages" name="noOfPackages" onChange={handleChange} />
                    {errors.noOfPackages && <p className="text-red-500 text-sm">{errors.noOfPackages}</p>}
                  </div>
                </div>
              </div>
  
              <h1 className="formTitle mt-[26px] text-xl font-semibold font-['Roboto Condensed']">Item 1</h1>
              <div className='flex justify-between gap-[10px] mb-4'>
                <div>
                  <input className="formContent1 bg-transparent" type="text" placeholder="Length" name="length" onChange={handleChange} />
                  {errors.length && <p className="text-red-500 text-sm">{errors.length}</p>}
                </div>
                <div>
                  <input className="formContent1 bg-transparent" type="text" placeholder="Width" name="width" onChange={handleChange} />
                  {errors.width && <p className="text-red-500 text-sm">{errors.width}</p>}
                </div>
                <div>
                  <input className="formContent1 bg-transparent" type="text" placeholder="Gross Weight" name="grossWeight" onChange={handleChange} />
                  {errors.grossWeight && <p className="text-red-500 text-sm">{errors.grossWeight}</p>}
                </div>
              </div>
  
              <div className='flex justify-between gap-[10px] mb-4'>
                <div>
                  <input className="formContent1 bg-transparent" type="text" placeholder="Height" name="height" onChange={handleChange} />
                  {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
                </div>
                <div>
                  <input className="formContent1 bg-transparent" type="text" placeholder="Volumetric Weight" name="volumetricWeight" onChange={handleChange} />
                  {errors.volumetricWeight && <p className="text-red-500 text-sm">{errors.volumetricWeight}</p>}
                </div>
  
                <div className="formContent1 w-[200px] h-12 p-4 bg-transparent rounded-xl justify-start items-center inline-flex">
                  <input className="bg-[#FAFAFA] outline-none" type="text" placeholder="Package Type" name="packageType" onChange={handleChange} />
                  <div className="relative"><FaCaretDown /></div>
                  {errors.packageType && <p className="text-red-500 text-sm">{errors.packageType}</p>}
                </div>
              </div>
  
              <div className="flex gap-40 mt-10">
                <button type="button" className="btn1" onClick={handlePrevious}>Previous</button>
                <button type="submit" className="btn2">Next</button>
              </div>
            </form>
          )}

{currentStep === 2 && (
  <OverlayThree 
    setCurrentStep={setCurrentStep} 
    currentStep={currentStep} 
    onClose={onClose} 
  />
)}


        </div>
      </div>
      
    </>
  );
}

export default OverlayTwo;
