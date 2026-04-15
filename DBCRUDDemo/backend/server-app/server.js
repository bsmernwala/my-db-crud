//server.js file is used to connect route,model,and database
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const PORT = 9669;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const studentRoute=require("./student.route.js");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/student', studentRoute);
mongoose.connect(process.env.MONGODB_ATLAS_URL, 
  { useNewUrlParser: true }).then(
  () => {console.log('Database is connected'+process.env.MONGODB_ATLAS_URL) },
  err => { console.log('Can not connect to the database'+ err)}
);
app.listen(PORT, ()=>{
  console.log('Server is running on Port:',PORT);
});

