import { SiGooglecalendar } from "react-icons/si";
import { LuPlus } from "react-icons/lu";

const Scheduler = () => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className=" flex flex-wrap w-80 h-60 bg-white shadow-xl rounded-lg p-4  text-[#012B5B] text-[23px] gap-5 ">
        <div className="flex justify-center  flex-col items-center  ">
          <div className="w-10 h-10 bg-[#3FE0CF] flex items-center justify-center rounded-md    ">
            <SiGooglecalendar />
          </div>
          <p className="text-[12px] text-black font-bold  ">
            Schedule a Webinnar.
          </p>
        </div>
        <div className="flex justify-center  flex-col items-center  ">
          <div className="w-10 h-10 bg-[#3FE0CF] flex items-center justify-center rounded-md    ">
            <LuPlus />
          </div>
          <p className="text-[12px] text-black font-bold  ">Join Webinnar.</p>
        </div>
        <div className="flex justify-center  flex-col items-center  ">
          <div className="w-10 h-10 bg-[#3FE0CF] flex items-center justify-center rounded-md    ">
            <LuPlus />
          </div>
          <p className="text-[12px] text-black font-bold  ">
            Open Recordings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
