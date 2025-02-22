import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const ProgressBar = ({ steps, currentStep }) => {
  const [widths, setWidths] = useState([]);

  useEffect(() => {
    // Calculate widths based on currentStep
    const newWidths = steps.map((_, index) => {
      if (index < currentStep) {
        return 100; // Full width for completed steps
      } else if (index === currentStep) {
        return 50; // Half width for the current step (adjust as needed)
      } else {
        return 0; // Zero width for future steps
      }
    });
    setWidths(newWidths);
  }, [currentStep, steps]);

  // flex items-center justify-around gap-[10px] w-full

  return (
    <div className="Progress ">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-left">
          <div className="flex items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center 
                ${index < currentStep ? 'bg-blue-500 text-white' : 'border-2 border-blue-500 text-blue-500'}
                ${index === currentStep ? 'bg-blue-100' : ''}
              `}
            >
              {index < currentStep && <span className="text-white"><FaCheck/></span>}
              {index === currentStep && <div className="rounded-full h-3 w-3 bg-blue-500"></div>}
            </div>
            {index < steps.length - 1 && (
              <div className="h-1 bg-gray-300 w-[120px] relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-500"
                  style={{ width: `${widths[index]}%` }}
                ></div>
              </div>
            )}
          </div>
          <span className={`text-sm mt-2 ${index <= currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;