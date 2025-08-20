import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto lg:px-6 px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
