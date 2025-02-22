// !ShippingTable
import React, { useState } from 'react';
import { FaTimesCircle, } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import ShippingTable from './ShippingTable';
  
// !CreateCustomer2

  function OverlayThree({onClose}){
    const steps = ['Address', 'Package', 'Carrier'];
    const [currentStep, setCurrentStep]= useState(3);

    const handlePrevious = () => {
      setCurrentOverlay(0);
    }
    return (
      <div className='overlay'>
        <div className='flex justify-between items-center'>
          <h1 className="CC">Create Quotation</h1>
          <FaTimesCircle onClick={onClose} className="text-xl text-[#074E73]"/>
        </div>
        <div className="p-6">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>
  
        <div className='flex justify-between'>
          <h1 className='formTitle'>Item1</h1>
        </div>
  
        <ShippingTable/>
        <div className='three'>
        <button className='save' onClick={handlePrevious}>Save</button>
        <button type="submit" className="submit" onClick={()=>setCurrentStep(3)}>Proceed</button>
        </div>
      </div>
      
    )
  }

  export default OverlayThree;