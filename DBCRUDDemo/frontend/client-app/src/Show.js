import React,{useState,useEffect} from "react";
import axios from "axios";
import "./index.css"

function Show()
{    
    const [slist,setSList]=useState([]);
   // alert(process.env.REACT_APP_API);
    const API_URL = process.env.REACT_APP_API;
    
    useEffect(()=>{
    
        axios.get(`${API_URL}/student/show`).then((res)=>{
          setSList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    },[]);
    return(
        <div className="container">
            <center>
                <h4 className="heading">Student List </h4>
                <div className="form-container">
                <table border={1}>
                    <tr>
                        <th>RollNo</th>
                        <th>Name</th>
                        <th>Marks</th>
                    </tr>
                        {
                            slist.map((item)=>(
                                <tr>
                                    <td>{item.rno}</td>
                                      <td>{item.sname}</td>
                                        <td>{item.marks}</td>
                                </tr>
                            ))
                        }
                   
                </table>
                </div>
            </center>
        </div>
    );
}export default Show;