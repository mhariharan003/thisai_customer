"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Item 1",
    content: (
        <div className="grid grid-cols-8 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium">Length</p>
            <p>40 <span className="text-xs">cm</span></p>
          </div>
          <div>
            <p className="font-medium">Height</p>
            <p>40 <span className="text-xs">cm</span></p>
          </div>
          <div>
            <p className="font-medium">Weight</p>
            <p>40 <span className="text-xs">cm</span></p>
          </div>
          <div>
            <p className="font-medium">Width</p>
            <p>40 <span className="text-xs">cm</span></p>
          </div>
          <div>
            <p className="font-medium">Package Type</p>
            <p className="text-blue-500">Box</p>
          </div>
          <div>
            <p className="font-medium">Carrier</p>
            <p className="text-blue-500">FedEx</p>
          </div>
          <div>
            <p className="font-medium">Est. Delivery Date</p>
            <p>21/10/2024</p>
          </div>
          <div>
            <p className="font-medium">Est. Delivery Cost</p>
            <p className="text-green-500">₹ 20,000</p>
          </div>
        </div>
      ),
  },
  {
    id: 2,
    title: "Item 2",
    content: (
      <div className="grid grid-cols-8 gap-4 text-sm text-gray-600">
        <div>
          <p className="font-medium">Length</p>
          <p>40 <span className="text-xs">cm</span></p>
        </div>
        <div>
          <p className="font-medium">Height</p>
          <p>40 <span className="text-xs">cm</span></p>
        </div>
        <div>
          <p className="font-medium">Weight</p>
          <p>40 <span className="text-xs">cm</span></p>
        </div>
        <div>
          <p className="font-medium">Width</p>
          <p>40 <span className="text-xs">cm</span></p>
        </div>
        <div>
          <p className="font-medium">Package Type</p>
          <p className="text-blue-500">Box</p>
        </div>
        <div>
          <p className="font-medium">Carrier</p>
          <p className="text-blue-500">FedEx</p>
        </div>
        <div>
          <p className="font-medium">Est. Delivery Date</p>
          <p>21/10/2024</p>
        </div>
        <div>
          <p className="font-medium">Est. Delivery Cost</p>
          <p className="text-green-500">₹ 20,000</p>
        </div>
      </div>
    ),
  }
];

const ItemDropdown = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id); // Collapse if clicked again
  };

  return (
    <>
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-2">Item Details</h2>

      {/* Dynamic Items */}
      {items.map((item) => (
        <div key={item.id} className="bg-gray-100 p-3 rounded-lg mb-2">
          {/* Clickable Title */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <span className="font-semibold">{item.title}</span>
            {openItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {/* Expandable Content */}
          {openItem === item.id && item.content && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
};

export default ItemDropdown;


