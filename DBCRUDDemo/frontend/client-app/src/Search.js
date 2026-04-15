import React,{useState,useEffect} from "react";
import axios from "axios";
import "./index.css";

function Search()
{
   const API_URL = process.env.REACT_APP_API;
    const[rno,setRno]=useState("");
    const[sname,setSName]=useState("");
    const[marks,setMarks]=useState("");

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

    const handleSearchButton=()=>{
        
        if (!isFormValid) return;

        axios.get(`${API_URL}/student/search/${rno}`).then((res)=>{
            setSName(res.data.sname);
            setMarks(res.data.marks);
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div className="container">
            <center>
                <h4 className="heading">Search Student By Roll No</h4>
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
                        <td>Name</td>
                        <td>{sname}</td>
                    </tr>
                    <tr>
                        <td>Marks</td>
                        <td>{marks}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleSearchButton}>Search</button>
                        </td>
                    </tr>
                </table>
                </div>
            </center>
        </div>
    );
}export default Search;