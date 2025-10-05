
import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Inventory from "./pages/Inventory";
import Employees from "./pages/Employees";
import Export from "./pages/Export";

const App = () => {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />           {/* /dashboard */}
      <Route path="analytics" element={<Analytics />} />  {/* /dashboard/analytics */}
      <Route path="inventory" element={<Inventory />} />  {/* /dashboard/inventory */}
      <Route path="employees" element={<Employees />} />  {/* /dashboard/employees */}
      <Route path="export" element={<Export />} />        {/* /dashboard/export */}
    </Route>
  </Routes>
</Router>

    
  )
}

export default App