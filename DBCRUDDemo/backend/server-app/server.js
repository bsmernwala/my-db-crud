const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const studentRoute = require("./student.route.js");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("MERN Backend Running 🚀");
});

// API route
app.use('/student', studentRoute);

// MongoDB connect
mongoose.connect(process.env.MONGODB_ATLAS_URL)
.then(() => console.log('Database connected'))
.catch(err => console.log('DB error:', err));

// IMPORTANT FIX
app.listen(PORT, "0.0.0.0", () => {
  console.log('Server is running on Port:', PORT);
});
