// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { CiExport } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#12121a] text-white flex flex-col p-4">
      <div className="flex items-center gap-2">
        <RiAdminLine  className="w-8 h-8"/>
      <h2 className="text-2xl font-bold ">Admin Panel</h2>
      </div>

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `p-2 mt-5 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        <div className="flex items-center gap-3">
          <MdDashboard />
        Dashboard
        </div>
        
      </NavLink>
      <NavLink
        to="/dashboard/analytics"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        <div className="flex items-center gap-3">
          <TbReportAnalytics />
        Analytics
        </div>
        
      </NavLink>

      <NavLink
        to="/dashboard/inventory"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        <div className="flex  items-center gap-3">
          <MdInventory />
        Inventory
        </div>
        
      </NavLink>

      <NavLink
        to="/dashboard/employees"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        <div className="flex items-center gap-3">
          <GrUserWorker />
        Employees
        </div>
        
      </NavLink>

      <NavLink
        to="/dashboard/export"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        <div className="flex items-center gap-3">
          <CiExport />
        Export
        </div>
        
      </NavLink>
    </div>
  );
};

export default Sidebar;
