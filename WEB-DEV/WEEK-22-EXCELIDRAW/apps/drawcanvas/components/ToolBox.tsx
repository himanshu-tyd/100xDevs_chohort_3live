import React, { useState } from "react";

const ToolBox = ({ item, handleClick, currentShape }) => {

  

  return (
    <div
      className={`cursor-pointer hover:bg-indigo-100 px-2 py-2 rounded-md group duration-300 transition-all ${
        currentShape == item.name ? "bg-indigo-100" : "bg-white"
      }  `}
      onClick={() => {
        handleClick(item.name);
      }}
    >
      <span className="!text-[12px]   text-black  relative ">{item.icon}</span>
      <span
        className=" capitalize absolute top-0 -translate-x-5 translate-y-10 bg-gray-950 text-gray-50
            text-[9px] hidden group-hover:inline-block p-1 rounded-md  "
      >
        {item.name}
      </span>
    </div>
  );
};

export default ToolBox;
