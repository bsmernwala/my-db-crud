//student.model.js :-used to define schema or structure of collection or table.
var  mongoose= require('mongoose');//connect library
const Schema=mongoose.Schema; //create schema object
var Student=new Schema({   //define fields
    rno:{type:Number},  
    sname:{type:String},
    marks:{type:Number}     
   },
    {
        collection:'Student'  //define collectionname
    }   
);
module.exports = mongoose.model('Student', 
           Student);
      //set export permission to access this file in other program