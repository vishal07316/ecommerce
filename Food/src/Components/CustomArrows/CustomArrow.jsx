import React from 'react';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50%" }} // Customize color and shape here
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50%" }} // Customize color and shape here
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
