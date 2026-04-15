//student.route.js :-used to define CRUD operations.
const express = require('express');
const studentRoute = express.Router(); 
var Student = require('./student.model');
//save 
studentRoute.route
('/save').
post( (req, res)=>
 {   
   var student=new Student(req.body);
  student.save().then(student => { 
      res.send('Data Saved');
      res.end();
    }).catch((err) => {
    res.send(err);
    res.end();
    }); 
});
//get all 
studentRoute.route
('/show').
get( (req, res)=> {        
  Student.find()
    .then(student => {      
      res.send(student);
      res.end();
    })
    .catch((err) => {
    res.send(err);
    res.end();
    });
});
//search  from DB
studentRoute.route
('/search/:rno').
get( (req, res)=> {        
  Student.findOne({"rno":req.params.rno})
    .then(student => {      
      res.send(student);
      res.end();
    })
    .catch((err) => {
    res.send(err);
    res.end();
    });
});
//update 
studentRoute.route
('/edit').  
put( (req, res)=>
 {   
   var student=new Student(req.body);       
  Student.updateOne({"rno":student.rno},{"sname":student.sname,"marks":student.marks}).then(student => { 
      res.send('data updated successfully');
      res.end();
    }).catch((err) => {
    res.send(err);
    res.end();
    }); 
});
//delete 
studentRoute.route
('/delete/:rno').
delete( (req, res)=> {        
  Student.deleteOne({"rno":req.params.rno})
    .then(student => {      
      res.send("Data Deleted");
      res.end();
    })
    .catch((err) => {
    res.send(err);
    res.end();
    });
});
module.exports =studentRoute;










