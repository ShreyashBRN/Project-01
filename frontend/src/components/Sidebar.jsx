// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/dashboard/analytics"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        Analytics
      </NavLink>

      <NavLink
        to="/dashboard/inventory"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        Inventory
      </NavLink>

      <NavLink
        to="/dashboard/employees"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        Employees
      </NavLink>

      <NavLink
        to="/dashboard/export"
        className={({ isActive }) =>
          `p-2 rounded mb-2 hover:bg-slate-600 ${isActive ? "bg-slate-700" : ""}`
        }
      >
        Export
      </NavLink>
    </div>
  );
};

export default Sidebar;
