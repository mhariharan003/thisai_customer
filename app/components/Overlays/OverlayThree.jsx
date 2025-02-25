// !ShippingTable
import React, { useState } from 'react';
import { FaTimesCircle, } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import ShippingTable from './ShippingTable';
import OverlayTwo from './OverlayTwo';
  
// !CreateCustomer2

  function OverlayThree({onClose, setCurrentStep, currentStep}){
    const [formData, setFormData] = useState({});
  // const [currentStep, setCurrentStep] = useState(1); // Track current step
  const steps = ['Address', 'Package', 'Carrier'];
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      handleNext();
    }
  };

  const handlePrevious = () => {
    setCurrentStep(1); // Go back to OverlayTwo
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
      <div className='overlay'>
        <div className='flex justify-between items-center'>
          <h1 className="CC">Create Quotation</h1>
          <FaTimesCircle onClick={onClose} className="text-xl text-[#074E73]"/>
        </div>
        <div className="p-6">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>
  
        <ShippingTable/>
        <div className='three'>
        <button type="button" className="btn1" onClick={handlePrevious}>Previous</button>
        <button type="submit" className="submit" onClick={()=>setCurrentStep(3)}>Proceed</button>
        <button className='save'>Save</button>
        </div>
      </div>
      </>
    )
  }

  export default OverlayThree


