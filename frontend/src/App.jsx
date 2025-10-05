
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
    // <div className='bg-slate-600'>
    //   <HomePage />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </Router>
    
  )
}

export default App