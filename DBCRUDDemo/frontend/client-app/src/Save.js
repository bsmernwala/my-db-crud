import React,{useState,useEffect} from "react";
import axios from "axios";

function Save()
{
    const[rno,setRno]=useState("");
    const[sname,setSName]=useState("");
    const[marks,setMarks]=useState("");
   const API_URL = process.env.REACT_APP_API;
    const handleRnoText=(evt)=>{
        setRno(evt.target.value);
    }
    const handleSName=(evt)=>{
        setSName(evt.target.value);
    }
    const handleMarks=(evt)=>{
        setMarks(evt.target.value);
    }

    const [errors, setErrors] = useState({
        rno: "",
        sname: "",
        marks: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // Validate on every change in textbox
    useEffect(() => {
        validateForm();
    }, [rno, sname, marks]);

 const validateForm = () => {
        const newErrors = {};

        // Roll number: positive number
        if (!rno || isNaN(rno) || Number(rno) <= 0) {
            newErrors.rno = "Roll number must be a positive number.";
        }

        // Name: non-empty and alphabetic
        if (!sname.trim()) {
            newErrors.sname = "Name is required.";
        } else if (!/^[A-Za-z ]+$/.test(sname)) {
            newErrors.sname = "Name can only contain letters and spaces.";
        }

        // Marks: 0 - 100
        if (marks === "") {
            newErrors.marks = "Marks are required.";
        } else if (isNaN(marks) || marks < 0 || marks > 500) {
            newErrors.marks = "Marks must be between 0 and 500.";
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleSaveButton=()=>{


      if (!isFormValid) return;

        var obj={
            rno:rno,
            sname:sname,
            marks:marks
        };        
        axios.post(`${API_URL}/student/save`,obj).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });   
    }
    return(
        <div className="container">
            <center>
            <h4 className="heading">Student Entery Form</h4>
             <div className="form-container">
            <table>
                <tr>
                    <td>RollNo</td>
                    <td>
                        <input type="number" onChange={handleRnoText}/>
                        <span style={{ color: "red", fontSize: "12px" }}>{errors.rno}</span>
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="text" onChange={handleSName}/>
                        <span style={{ color: "red", fontSize: "12px" }}>{errors.sname}</span>
                    </td>
                </tr>
                <tr>
                    <td>Marks</td>
                    <td>
                        <input type="number" onChange={handleMarks}/>
                        <span style={{ color: "red", fontSize: "12px" }}>{errors.marks}</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button type="submit" onClick={handleSaveButton}>Save</button>
                    </td>
                </tr>
            </table>
            </div>
            </center>
        </div>
    );
}export default Save;