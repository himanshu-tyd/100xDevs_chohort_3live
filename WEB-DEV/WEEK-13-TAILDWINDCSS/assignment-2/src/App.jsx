import React from "react";
import Sidebar from "./sections/Sidebar";
import Profile from "./sections/Profile";
import Hero from "./sections/Hero";
import Scheduler from "./sections/Scheduler";

const App = () => {
  return (
    <div className="flex items-center justtify-center relative ">
      <Sidebar />
      <div className="w-full h-[560px] bg-[#f4f8ff] mt-auto flex ">
        <Profile />
        <Hero />
        <Scheduler />
      </div>
    </div>
  );
};

export default App;
