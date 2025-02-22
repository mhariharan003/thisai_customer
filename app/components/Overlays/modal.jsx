// components/Overlays/modal.js
import React, { useState } from 'react';
import OverlayOne from './OverlayOne'; // Corrected import path

const modal = ({ isVisible, onClose }) => { // Add props for visibility and closing
  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay div */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Content div */}
        <OverlayOne onclose={onClose}/>
        {/* ... other modal content if needed ... */}
      </div>
    </div>
  );
};

export default modal;