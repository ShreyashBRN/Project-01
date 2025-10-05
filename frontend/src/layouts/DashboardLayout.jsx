// src/pages/DashboardLayout.js
import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom"; // used for nested routes

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will display the page (Dashboard, Analytics, etc.) */}
      </div>
    </div>
  );
};

export default DashboardLayout;
