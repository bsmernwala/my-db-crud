//npm install react-router-dom --save
import React from "react";
import { Link,Route,Routes } from "react-router-dom";
import Save from "./Save"
import Search from "./Search"
import Update from "./update"
import Delete from "./Delete"
import Show from "./Show";
import schoolpic from "./school.jpeg";
import "./index.css"

function MainPage()
{
    return(
        <div>
            <center>
            <img src={schoolpic} height={200} width={1150}/>
            </center>
            <nav>
                <ul>
                    <li>
                        <Link to="/save">Save</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete</Link>
                    </li>
                    <li>
                        <Link to="/show">Show</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/save" element={<Save/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/update" element={<Update/>}></Route>
                <Route path="/delete" element={<Delete/>}></Route>
                <Route path="/show" element={<Show/>}></Route>
            </Routes>
            <marquee>Welcome  ....बेटी पढ़ाओ देश बचाओ....सुस्वागतम...   </marquee>
          
        </div>
    );
}export default MainPage;