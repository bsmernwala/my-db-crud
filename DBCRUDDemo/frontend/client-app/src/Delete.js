import React,{useState,useEffect} from "react";
import axios from "axios";
function Delete()
{
    const API_URL = process.env.API || "http://localhost:5000";     
    const[rno,setRno]=useState();
    
    const handleRno=(evt)=>{
        setRno(evt.target.value);
    }
    const [errors, setErrors] = useState({
                rno: ""         
            });
        
            const [isFormValid, setIsFormValid] = useState(false);
        
            // Validate on every change in textbox
            useEffect(() => {
                validateForm();
            }, [rno]);
        
         const validateForm = () => {
                const newErrors = {};
        
                // Roll number: positive number
                if (!rno || isNaN(rno) || Number(rno) <= 0) {
                    newErrors.rno = "Roll number must be a positive number.";
                   
                }
                 setErrors(newErrors);
            setIsFormValid(Object.keys(newErrors).length === 0);
            }
    
    const handleDeleteButton=()=>{

        if (!isFormValid) return;

        axios.delete(`${API_URL}/student/delete/${rno}`).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div className="container"> 
            <center>
                <h4 className="heading">Delete Student By Roll No</h4>
                <div className="form-container">
                <table>
                    <tr>
                        <td>Enter RollNo</td>
                        <td>
                            <input type="number" onChange={handleRno}/>

                            <span style={{ color: "red", fontSize: "12px" }}>{errors.rno}</span>
                        </td>
                    </tr>
                   <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleDeleteButton}>Delete</button>
                        </td>
                    </tr>
                </table>
                </div>
            </center>
        </div>
    );
}export default Delete;