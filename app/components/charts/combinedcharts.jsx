import React, { useState } from 'react';
import Barchart from './Barchart'
import Doughnut from './Doughnut'
import Modal from "../Overlays/modal"
import { FaEye, FaDollarSign,FaPlus } from 'react-icons/fa';


function CombinedCharts() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full flex gap-5 md:w-[100%]">
            <div className='flex flex-col items-center gap-2  w-full'>
                {/* BUTTON */}
                <div className='w-full h-full flex justify-between mb-4 gap-4'>
                    <div className='flex items-center gap-4'>
                    <h1 className="text-gray-900 text-xl font-bold font-Mono">Sujatha</h1>
                        <div className="flex gap-4">
                        <FaEye className="text-xl text-[#074E73]" />
                        <FaDollarSign className="text-xl text-[#074E73]" />
                        </div>
                    </div>
                    <button onClick={()=>setShowModal(true)} className="h-12 text-white px-[22px] py-4 bg-[#902f01] rounded-xl justify-end items-center gap-3 inline-flex">
                        <FaPlus style={{ fontSize: '18px', color: 'white' }}/> Create
                    </button>
                </div>
                {/* CHARTS */}
                <div className='grid lg:flex md:grid-cols w-[100%] md:w-[100%] gap-10'>
                <Doughnut className=""/>
                <Barchart className=""/>
                </div>
                <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
            </div>
    </div>
  )
}

export default CombinedCharts