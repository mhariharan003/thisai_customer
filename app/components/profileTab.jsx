
import React, { useState, useEffect } from 'react';
import { FaFile, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProfileTab = ({ selectedCustomer }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        if (!selectedCustomer) return;
        console.log("Fetching customer's profile form profiletab:", selectedCustomer);

        const encodedEmail = encodeURIComponent(selectedCustomer.customer_email);

        const response = await fetch(`http://127.0.0.1:8000/thisaiapi/customers/customer/${encodedEmail}/);
        console.log(selectedCustomer`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging
        setProfile(data); // Set the single profile object
      } catch (error) {
        console.error("Failed to fetch customer's profile:", error);
      }
    }
    fetchProfile();
  }, [selectedCustomer]); // Empty dependency array to run only once

  return (
    <div className="w-[758px] h-[300px] px-4 py-5 bg-[#f1f4f7] rounded-[10px] flex-col justify-start items-start gap-3 inline-flex">
      {profile ? (
        <>
          <div className="flex flex-col w-[720px] h-[274px] px-[16px] py-[20px] gap-[10px] rounded-[10px] bg-white">
            {/* Second Row */}
            <div className="flex gap-[40px]">
              <div className="flex flex-col">
                <h1 className="font-bold text-gray-700">Mobile</h1>
                <h1 className="text-gray-600">{profile.customer_mobile}</h1>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-gray-700">Email</h1>
                <span className="text-gray-600">{profile.customer_email}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-gray-700">City</span>
                <span className="text-gray-600">{profile.customer_city}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-gray-700">State</span>
                <span className="text-gray-600">{profile.customer_state}</span>
              </div>

            </div>

            {/* Address Row */}
            <div className="flex gap-[70px]">



              <div className="flex flex-col">
                <span className="font-bold text-gray-700">Country</span>
                <span className="text-gray-600">{profile.customer_country}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-gray-700">Pincode</span>
                <span className="text-gray-600">{profile.customer_pincode}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-gray-700">Address</span>
                <span className="text-gray-600">{profile.customer_address}</span>
              </div>

            </div>

            
          </div>

          

          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col items-center justify-center">
              <div className="text-gray-900 text-xs font-bold font-['Roboto Mono'] mb-2">Contract Document</div>
              <div className="w-32 h-32 p-6 border-4 border-gray-200 rounded-lg bg-white flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <FaFile className="text-4xl" />
                </div>
              </div>
            </div>

            <button className="flex px-[4px] py-[9px] w-[80px] h-[34px] bg-[#902f01] text-white text-[14px] font-bold items-center justify-center gap-1.5 rounded-lg">
              <FaEdit /> Edit
            </button>
          </div>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

ProfileTab.propTypes = {
  selectedCustomer: PropTypes.object,
};

export default ProfileTab;