// src/pages/Dashboard.js
// import React from "react";
import { FiRefreshCcw } from "react-icons/fi"; 
// import { useState } from "react";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import 'js-circle-progress';
// import { ProgressCircle } from "@chakra-ui/react";
import React, {  useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import Calendar from 'react-calendar';
import { Calendar } from "@/components/ui/calendar"
import ExpenseGraph from "../components/expenseGraphDashboard"
import { BsPersonCircle } from "react-icons/bs";


const Dashboard = () => {
          const percentage = 75;
          const EmployeeCount = 12;


  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // stop rotation after 1 second
  };
 const [progress, setProgress] = useState(50);

  const handleChange = (e) => {
    setProgress(Number(e.target.value));
  };
  
 
const [date, setDate] = React.useState(new Date())

  return (

    <div className="text-white ml-12 flex flex-col gap-6">
      <div className="flex items-center gap-5">

      <div className="flex ">
        <div className="flex flex-col gap-4">
        <p className="text-[45px] text-white">12 October</p>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-white flex justify-between items-center pl-6 pr-6">
            <p className="w-[300px] text-[13px] pt-1 pb-1 leading-[14px]">Use the refresh button to fetch the most recent data in real time and latest system activity.</p>
            <button
        onClick={handleClick}
        className="p-3  bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        <FiRefreshCcw size={20}
          className={`text-3xl ${rotate ? "animate-spin" : ""} transition-transform`}
        />
      </button>

            </div>
          <div className="w-[420px] h-[170px] bg-[#12121a] flex rounded-[20px] items-center text-center gap-5">
            <div>
            <HiMiniCurrencyDollar size={110} color="white" />
            </div>
            <div>
              <p className="text-[20px] mb-1">Total Revenue</p>
              <p className="text-[35px] font-bold">$45,970</p>
              <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
        className="w-[230px] accent-[#3b82f6] mt-3 cursor-pointer"
      />


            </div>

          </div>
        </div>
      </div>

        <div className="h-[250px] w-[300px]  bg-[#12121a]  mt-[89px] rounded-[20px] flex flex-col gap-2 items-center justify-center">
         <div className="text-center flex flex-col gap- mt-4"> <p className="text-[22px]">Inventory Progress</p>
          <p className="-mt-2 text-[#70707c]">________________________________</p></div>
          <div className="" style={{ width: 130, height: 130 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          
          <p className="text-[14px] text-[#82829e] mb-5">Employees Count: {EmployeeCount}</p>
          </div>

      <div className="flex flex-col gap-3">
        <p className="text-white text-[45px] ">Calendar</p>
        <div className="h-[250px] w-[330px] rounded-[20px] bg-[#12121a] ">
          <div className="scale-x-125 scale-y-90 origin-top-left mt-2 ml-2">
          <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border text-white  bg-black"
  />
  </div>
        </div>
      </div>

      </div>

      <div className="flex gap-5">
        <div className="w-[650px] h-[295px] bg-[#12121a]  rounded-[20px]">
          <ExpenseGraph />
        </div>











        <div className="flex flex-col gap-4">
          <p className="text-white text-[20px]">Recent Orders</p>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center flex gap-16 items-center">
            <BsPersonCircle size={40} className="ml-4" />
            <p className="text-blue-600">#14526</p>
            <p className="">Harry Donaldson</p>

          </div>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center flex gap-16 items-center">
            <BsPersonCircle size={40} className="ml-4" />
            <p className="text-blue-600">#14526</p>
            <p className="">Harry Donaldson</p>

          </div>
          <div className="w-[420px] h-[70px] bg-[#12121a]  rounded-[40px] text-center flex gap-16 items-center">
            <BsPersonCircle size={40} className="ml-4" />
            <p className="text-blue-600">#14526</p>
            <p className="">Harry Donaldson</p>

          </div>
        </div>
      </div>

    </div>
  )
};

export default Dashboard;
