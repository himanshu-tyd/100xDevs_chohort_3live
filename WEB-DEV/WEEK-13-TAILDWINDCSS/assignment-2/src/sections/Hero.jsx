import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { timeline } from "../assets/data";
import TimeCard from "../components/TimeCard";

const Hero = () => {
  return (
    <div className="flex flex-col w-full ml-60 p-2 ">
      <div className=" p-5">
        <h2 className="text-[24px] font-light"> Monday, 14 October </h2>
        <span className="font-bold  text-[#0D3563] mt-3  block text-[22px]  ">
          Good Morning, Rusika 👋
        </span>
      </div>

      <div className="flex flex-col mt-2 w-full  bg-white px-3 py-3 shadow-md rounded-xl">
        <div className="flex items-center justify-between bg-[#F5F6F8] px-5 py-2  border border-slate-200 rounded-md   ">
          <div className="flex items-center gap-2 w-full ">
            <SlCalender />
            <select className="bg-transparent p-2 outline-none ">
              <option>Monday, 14 October 2024</option>
            </select>
          </div>
          <div className="ml-auto flex gap-6  text-[24px]">
            <IoIosArrowRoundBack />
            <IoIosArrowRoundForward />
          </div>
        </div>

        <div className="flex flex-col mt-2 " >
          {
            timeline.map((items,index)=>(
              <div key={index} className=' border-gray-400 border-b pb-2' >
                  <TimeCard items={items}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
