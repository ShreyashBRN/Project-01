const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const analyticsRoutes = require("./routes/analyticsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const inventoryRoutes = require('./routes/inventoryRoutes.js');
const exportRoutes = require('./routes/exportRoutes.js');


app.use('/api/analytics', analyticsRoutes);
app.use('/', userRoutes);
app.use('/', inventoryRoutes)
app.use("/export", exportRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT: http://localhost:${PORT}`);
    
})















// project/
// │
// ├── backend/
// │   ├── server.js
// │   ├── package.json
// │   ├── routes/
// │   │   ├── analyticsRoutes.js
// │   │   ├── employeeRoutes.js
// │   │   ├── customerRoutes.js
// │   │   ├── inventoryRoutes.js
// │   │   ├── exportRoutes.js
// │   ├── controllers/
// │   │   ├── analyticsController.js
// │   │   ├── employeeController.js
// │   │   ├── customerController.js
// │   │   ├── inventoryController.js
// │   │   ├── exportController.js
// │   ├── models/
// │   │   ├── Employee.js
// │   │   ├── Customer.js
// │   │   ├── Inventory.js
// │   │   ├── Sales.js
// │   ├── config/
// │       ├── db.js  (will use later for MongoDB)
// │
// └── frontend/
//     ├── src/
//     │   ├── pages/
//     │   │   ├── Dashboard.js
//     │   │   ├── ManageUsers.js
//     │   │   ├── TrackInventory.js
//     │   │   ├── ExportData.js
//     │   ├── components/
//     │   │   ├── Chart.js
//     │   │   ├── Table.js
//     │   │   ├── Navbar.js
//     │   │   ├── Sidebar.js
//     │   ├── App.js
//     │   ├── index.js
//     ├── package.json


// Got it — sounds like your Home page will basically be an Admin Dashboard with 4 key modules:

// Check Analytics 📊 — View metrics like sales, user activity, traffic, etc.

// Manage Users 👥 — Add, remove, or edit user accounts.

// Track Inventory 📦 — Monitor stock levels, product status, etc.

// Export Data 📂 — Download reports (CSV, Excel, PDF).

// Here’s what I’ll do for you:

// Step 1: Make a clear feature structure for these modules in the backend (routes, controllers, models).

// Step 2: Show how they’ll connect to the frontend Home page (dashboard UI).

// Step 3: Give you Thunder Client test examples for each feature so you can verify them while coding.

// Before I start, can you confirm — is this Inventory Dashboard for your InvoiceEase project or is it a new separate project?
// That will decide how we set up the database.








// You said:
// it is completely new project and yes home page will be admin dashboard any other doubt you can ask me


// ChatGPT said:
// Alright, crystal clear — new project, admin dashboard as Home page.
// Before we jump in, I need a few clarifications so we don’t have to redo work later:

// Things I Need to Know
// Tech Stack —

// Are we using MERN again (MongoDB, Express, React, Node.js) or a different backend/frontend?

// Database choice (MongoDB, PostgreSQL, MySQL, or setup later)?

// Auth —

// Will this dashboard have admin login before accessing it, or open access for now?

// Analytics —

// Will "Check Analytics" use mock/test data first, or do we need real analytics (like tracking users, sales, traffic) from a database?

// Manage Users —

// What basic fields should a user have? (e.g., name, email, role, status)

// Track Inventory —

// Are we talking about products with name, quantity, price, category?

// Will stock update automatically from somewhere or manually?

// Export Data —

// Which formats? (CSV, Excel, PDF)

// Will this export all modules’ data or just inventory?

// If you answer these, I can build the backend plan + folder structure and then show Thunder Client test setup so you can hit the ground running.
// Do you want me to ask these one-by-one so it’s easier, or all at once?








// You said:
// 1. Yes MERN and db MongoDB 2. yes there will beAuth buth auth and db will be last 3.yes data will be from database & analytics will contain monthly sales chart, revenue this v/s last month, top 5 selling products 4. Inside manage Users we will have to manage employees and customer and employee will have name, employeeid, department, email, phoneNo, salary, position, JoinedAt and customer will have  name, phone no, email, order and can create edit delete, 5. Track Inventory - (name, price, stock status, uniquecode, category, quantity, price, supplier) will have to add, delete, edit item and required field i will tell after and yes admin will do it manually it will come from db. 6. inventory, employee, customer, performance data in csv format. ok anything else imp which you like to ask please ask


// ChatGPT said:
// Got it — this is shaping up to be a full-featured admin dashboard.
// Since you want auth + database setup at the end, we’ll first create everything with mock data, then later swap in MongoDB and authentication.

// 🔍 Things I Still Need to Confirm Before We Start
// Frontend styling –
// Are we using Tailwind CSS, Material UI, or plain CSS for the dashboard look?

// Charts –
// For analytics charts, are we using something like Chart.js, Recharts, or do you want me to pick a beginner-friendly one?

// Export CSV –
// Should the export happen on backend (Node generates CSV file for download) or on frontend (React converts data to CSV)?

// Role Management –
// Since we have employees and customers, will employees have roles like admin, manager, etc., or is everyone just admin for now?

// Performance Data –
// When you say "performance data" in exports, do you mean sales performance, employee performance, or both?

// Project Structure Preference –
// Should we follow separate folders for backend & frontend like

// Copy
// Edit
// project/
//   frontend/
//   backend/
// or keep it in a single folder with both combined?