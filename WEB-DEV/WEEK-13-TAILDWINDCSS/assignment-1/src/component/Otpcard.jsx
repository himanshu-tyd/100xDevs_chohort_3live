/* eslint-disable react/prop-types */
import React from "react";

const Otpcard = ({ handleChange, inputRef, index, handleKeyDown }) => {
  return (
    <>
      <input
        value={inputRef[index]}
        onChange={(e) => handleChange(e, index)}
        onKeyDown={(e)=> handleKeyDown(e,index)}
        ref={(el) => (inputRef.current[index] = el)}
        
        className="w-[64px] h-[54px] bg-[#b2b5b8] rounded-md text-center font-bold text-[14px]  "
        type="tel"
        maxLength="1"
      />
    </>
  );
};

export default Otpcard;
