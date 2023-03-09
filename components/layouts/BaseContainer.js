import React from "react";

const BaseContainer = ({ children, className = " " }) => {
  return <div className={` w-full max-w-[1512px] px-[1rem] md:px-16 ${className}`}>{children}</div>;
};

export default BaseContainer;