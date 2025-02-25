import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Overlay2 from './OverlayTwo';
import { FaTimesCircle, FaCaretDown } from 'react-icons/fa';

// !CreateCustomer
function CreateCustomer({onclose}) {
  const [formData, setFormData] = useState({
    nameFrom: '',
    phoneFrom: '',
    companyFrom: '',
    emailFrom: '',
    addressFrom: '',
    cityFrom: '',
    stateFrom: '',
    countryFrom: 'In',
    pincodeFrom: '',
    nameTo: '',
    phoneTo: '',
    companyTo: '',
    emailTo: '',
    addressTo: '',
    cityTo: '',
    stateTo: '',
    countryTo: '',
    pincodeTo: '',
  });
  const [currentStep, setCurrentStep]= useState(0);
  const steps = ['Address', 'Package', 'Carrier'];
  const [errors, setErrors] = useState({});

  const handleNext = () => { 
    if (validate()) {
      setCurrentStep(1);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

function nextform(){
  return(
    <Overlay2/>
  )
}

  return (
    <div className='overlay' id='mainoverlay' >
      <div className='flex justify-between items-center'>
        <h1 className="CC">Create Quotation</h1>
        <FaTimesCircle onClick={onclose}  className="text-xl text-[#074E73]" />
      </div>
      <div className="p-6">
        <ProgressBar steps={steps} currentStep={currentStep} />
      </div>
      
      <form onSubmit={handleSubmit}>
  {['From', 'To'].map((section) => (
    <div key={section} className='flex flex-col mb-7'>
      <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">{section}</h1>
      
      {[
        [
          { name: 'name', placeholder: 'Name' },
          { name: 'phone', placeholder: 'Phone Number' }
        ],
        [
          { name: 'company', placeholder: 'Company Name' },
          { name: 'email', placeholder: 'Email' }
        ],
        [
          { name: 'address', placeholder: 'Address (Area and Street)', fullWidth: true }
        ],
        [
          { name: 'city', placeholder: 'City' },
          { name: 'state', placeholder: 'State' }
        ],
        [
          { name: 'country', placeholder: 'Country' },
          { name: 'pincode', placeholder: 'Pincode' }
        ]
      ].map((fieldGroup, groupIndex) => (
        <div key={groupIndex} className={`flex justify-between gap-5 mb-4 ${fieldGroup[0].fullWidth ? 'w-full' : ''}`}>
          {fieldGroup.map((field) => (
            <div key={field.name} className={field.fullWidth ? 'w-full' : ''}>
              <input
                className={field.fullWidth ? 'formContent2 w-full' : 'formContent'}
                type="text"
                name={`${field.name}${section}`}
                placeholder={field.placeholder}
                onChange={handleChange}
              />
              {errors[`${field.name}${section}`] && (
                <p className="text-red-500 text-sm">{errors[`${field.name}${section}`]}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  ))}

  <div className='flex justify-end gap-[32px]'>
    <button type="submit" className="btn" id='nextButton' onClick={handleNext}>Next</button>
    <button className="btn1" id='addAddressButton'>Add Address Book</button>
  </div>
</form>

{currentStep === 1 && nextform()}

      {/* <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">From</h1>
          <div className='flex justify-between gap-5 mb-4'>
            <div>
              <input className="formContent" type="text" name="nameFrom" placeholder="Name" onChange={handleChange} />
              {errors.nameFrom && <p className="text-red-500 text-sm">{errors.nameFrom}</p>}
            </div>
            <div>
              <input className="formContent" type="text" name="phoneFrom" placeholder="Phone Number" onChange={handleChange} />
              {errors.phoneFrom && <p className="text-red-500 text-sm">{errors.phoneFrom}</p>}
            </div>
          </div>

          <div className='flex justify-between gap-5 mb-4'>
            <div>
              <input className="formContent" type="text" name="companyFrom" placeholder="Company Name" onChange={handleChange} />
              {errors.companyFrom && <p className="text-red-500 text-sm">{errors.companyFrom}</p>}
            </div>
            <div>
              <input className="formContent" type="text" name="emailFrom" placeholder="Email" onChange={handleChange} />
              {errors.emailFrom && <p className="text-red-500 text-sm">{errors.emailFrom}</p>}
            </div>
          </div>
          
          <div>
          <input className="formContent2 w-full" type="text" name="addressTo" placeholder="Address (Area and Street)" onChange={handleChange} />
          {errors.addressTo && <p className="text-red-500 text-sm">{errors.addressTo}</p>}
        </div>

          <div className='flex justify-between gap-5 mb-4'>
            <div>
              <input className="formContent" type="text" name="cityFrom" placeholder="City" onChange={handleChange} />
              {errors.cityFrom && <p className="text-red-500 text-sm">{errors.cityFrom}</p>}
            </div>
            <div>
              <input className="formContent" type="text" name="stateFrom" placeholder="State" onChange={handleChange} />
              {errors.stateFrom && <p className="text-red-500 text-sm">{errors.stateFrom}</p>}
            </div>
          </div>
          
          <div className='flex justify-between gap-5 mb-4'>
            <div>
              <input className="formContent" type="text" name="countryFrom" placeholder="Country" onChange={handleChange} />
              {errors.countryFrom && <p className="text-red-500 text-sm">{errors.countryFrom}</p>}
            </div>
            <div>
              <input className="formContent" type="text" name="pincodeFrom" placeholder="Pincode" onChange={handleChange} />
              {errors.pincodeFrom && <p className="text-red-500 text-sm">{errors.pincodeFrom}</p>}
            </div>
          </div>
        </div>

        <h1 className="formTitle text-xl font-semibold font-['Roboto Condensed']">To</h1>
        <div className='flex justify-between gap-5 mb-4'>
          <div>
            <input className="formContent" type="text" name="nameTo" placeholder="Name" onChange={handleChange} />
            {errors.nameTo && <p className="text-red-500 text-sm">{errors.nameTo}</p>}
          </div>
          <div>
            <input className="formContent" type="text" name="phoneTo" placeholder="Phone Number" onChange={handleChange} />
            {errors.phoneTo && <p className="text-red-500 text-sm">{errors.phoneTo}</p>}
          </div>
        </div>

        <div className='flex justify-between gap-5 mb-4'>
          <div>
            <input className="formContent" type="text" name="companyTo" placeholder="Company Name" onChange={handleChange} />
            {errors.companyTo && <p className="text-red-500 text-sm">{errors.companyTo}</p>}
          </div>
          <div>
            <input className="formContent" type="text" name="emailTo" placeholder="Email" onChange={handleChange} />
            {errors.emailTo && <p className="text-red-500 text-sm">{errors.emailTo}</p>}
          </div>
        </div>
        
        <div>
          <input className="formContent2 w-full" type="text" name="addressTo" placeholder="Address (Area and Street)" onChange={handleChange} />
          {errors.addressTo && <p className="text-red-500 text-sm">{errors.addressTo}</p>}
        </div>

        <div className='flex justify-between gap-5 mb-4'>
          <div>
            <input className="formContent" type="text" name="cityTo" placeholder="City" onChange={handleChange}/>
            {errors.cityTo && <p className="text-red-500 text-sm">{errors.cityTo}</p>}
          </div>
          <div>
            <input className="formContent" type="text" name="stateTo" placeholder="State" onChange={handleChange}/>
            {errors.stateTo && <p className="text-red-500 text-sm">{errors.stateTo}</p>}
          </div>
        </div>

        <div className='flex justify-between gap-5 mb-4'>
          <div>
            <input className="formContent" type="text" name="countryTo" placeholder="Country" onChange={handleChange}/>
            {errors.countryTo && <p className="text-red-500 text-sm">{errors.countryTo}</p>}
          </div>
          
          <div>
            <input className="formContent" type="text" name="pincodeTo" placeholder="Pincode" onChange={handleChange} />
            {errors.pincodeTo && <p className="text-red-500 text-sm">{errors.pincodeTo}</p>}
          </div>
        </div>
        
        <div className='flex justify-end gap-[32px]'>
          <button type="submit" className="btn" id='nextButton' onClick={handleNext} >Next</button>
          <button className="btn1" id='addAddressButton'>Add Address Book</button>
        </div>
      </form> */}
    </div>
  );
}

export default CreateCustomer;

