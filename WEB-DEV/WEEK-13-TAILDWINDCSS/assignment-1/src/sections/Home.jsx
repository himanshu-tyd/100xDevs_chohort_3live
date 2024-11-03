import React, { useState } from "react";


const Home = () => {

    const [data,setData]=useState("")

    const handleChange=(e)=>{
        setData(e.target.value)
    }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mt-20 flex items-center justify-center flex-col">
        <h2 className="font-bold text-white text-xl">Verify your age</h2>
        <p className="mt-10 text-white font-thin">
          Please confirm your birthday this data will not stored.
        </p>
      </div>
      <div className="flex flex-col items-center jsutify-center">
        <input
          className="w-[400px] h-[50px] rounded-[10px] mt-10 px-3 py-5 bg-[#b2b5b8] text-white "
          type="data"
          onChange={handleChange}
          placeholder='Your Birth Year'
        />

        <button className={`capitalize w-[400px] h-[45px] text-white rounded-[10px] mt-10 ${data ? 'bg-[#3FDFD0]' : ' bg-[#7F95AC]' } ` }>confirm</button>
      </div>
    </div>
  );
};

export default Home;
