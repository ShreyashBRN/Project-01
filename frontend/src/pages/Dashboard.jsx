// src/pages/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="text-black ml-12 flex flex-col gap-6">
      <div className="flex items-center gap-5">

      <div className="flex ">
        <div className="flex flex-col gap-4">
        <p className="text-[45px] text-white">11 October</p>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center">box1</div>
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
