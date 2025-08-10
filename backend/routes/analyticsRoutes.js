const express = require('express');
const router = express.Router();

// Dummy analytics data
router.get("/", (req, res) => {
  const analyticsData = {
    monthlySales: [
      { month: "January", sales: 1200 },
      { month: "February", sales: 1500 },
      { month: "March", sales: 1800 },
      { month: "April", sales: 1400 }
    ],
    revenueComparison: {
      thisMonth: 8000,
      lastMonth: 7200
    },
    topProducts: [
      { name: "Product A", sold: 320 },
      { name: "Product B", sold: 280 },
      { name: "Product C", sold: 250 },
      { name: "Product D", sold: 200 },
      { name: "Product E", sold: 180 }
    ]
  };

  res.json(analyticsData);
});

module.exports = router;
