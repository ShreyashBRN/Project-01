// src/pages/Dashboard.js
import React from "react";
import { FiRefreshCcw } from "react-icons/fi"; 
import { useState } from "react";

const Dashboard = () => {


  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // stop rotation after 1 second
  };
















  return (

    <div className="text-black ml-12 flex flex-col gap-6">
      <div className="flex items-center gap-5">

      <div className="flex ">
        <div className="flex flex-col gap-4">
        <p className="text-[45px] text-white">11 October</p>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-white flex justify-between items-center pl-6 pr-6">
            <p className="w-[300px]">Use the refresh button anytime to see the most recent updates.</p>
            <button
        onClick={handleClick}
        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        <FiRefreshCcw size={20}
          className={`text-3xl ${rotate ? "animate-spin" : ""} transition-transform`}
        />
      </button>

            </div>
          <div className="w-[420px] h-[170px] bg-[#12121a]  rounded-[20px]">box2</div>
        </div>
      </div>

        <div className="h-[250px] w-[300px]  bg-[#12121a]  mt-[89px] rounded-[20px]">
          box3
          </div>

      <div className="flex flex-col gap-3">
        <p className="text-white text-[45px] ">Calendar</p>
        <div className="h-[250px] w-[300px] rounded-[20px] bg-[#12121a] ">box4</div>
      </div>

      </div>

      <div className="flex gap-5">
        <div className="w-[650px] h-[295px] bg-[#12121a]  rounded-[20px]">box5</div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-[20px]">Upcoming Events</p>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center">box1</div>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center">box1</div>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center">box1</div>
        </div>
      </div>

    </div>
  )
};

export default Dashboard;
