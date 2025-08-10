const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/blogs', blogRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT: http://localhost:${PORT}`);
    
})