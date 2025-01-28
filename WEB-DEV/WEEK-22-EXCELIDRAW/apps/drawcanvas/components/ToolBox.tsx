import React from "react";

const ToolBox = ({ item , handleClick }) => {
  return (
    <div className="cursor-pointer hover:bg-indigo-100 p-3 rounded-md group duration-300 transition-all  "
    
      onClick={()=>handleClick(item.name)}
      >
      <span className="w-3 h-3 text-black  relative ">{item.icon}</span>
      <span
        className="absolute top-0 -translate-x-5 translate-y-16 bg-gray-950 text-gray-50
           text-[12px] hidden group-hover:inline-block p-1 rounded-md  "
      >
        {item.name}
      </span>
    </div>
  );
};

export default ToolBox;
