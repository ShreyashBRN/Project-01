import React from 'react'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />  {/* Left side (always visible) */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />  {/* Right side (changes when route changes) */}
      </div>
    </div>
  )
}

export default DashboardLayout