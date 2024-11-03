/* eslint-disable react/prop-types */
import React from "react";

const TimeCard = ({ items }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="flex flex-col ">
        <h3>{items.time}</h3>
        <p className="text-slate-600 text-[12px] ">{items.time}</p>
      </div>
      <div className="text-[28px] font-light text-[#40DFD0] ">|</div>
      <div className="flex flex-col justify-center">
        <div className="text-[12px] text-slate-600 flex items-center gap-2 ">
          <p>{items.status}</p>
          {console.log(items.color)}
          <img
            src={items.icon}
            className={` text-[${items.color}]  `}
            width={20}
            height={20}
          />
    
        </div>
        <div className="mt-1" >
            <h3>{items.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
