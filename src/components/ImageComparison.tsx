import React from 'react';
import { useState } from 'react';
import './ImageComparison.css';

interface ImageComparisonProps {
  image1: string;
  image2: string;
  onImageSelect: (imageUrl: string) => void;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ image1, image2, onImageSelect }) => {
  const [mode, setMode] = useState<'sideBySide'>('sideBySide');

  const handleImageClick = (imageUrl: string) => {
    onImageSelect(imageUrl);
  };

  return (
    <div className="image-comparison">
      <div className="menubar">
        <button onClick={() => setMode('sideBySide')}>Side by Side</button>
        {/* Add more buttons for other modes here */}
      </div>
      <div className="comparison-container">
        {mode === 'sideBySide' && (
          <div className="side-by-side">
            <img src={image1} alt="Image 1" onClick={() => handleImageClick(image1)} />
            <img src={image2} alt="Image 2" onClick={() => handleImageClick(image2)} />
          </div>
        )}
        {/* Add more comparison modes here */}
      </div>
    </div>
  );
};

export default ImageComparison;
