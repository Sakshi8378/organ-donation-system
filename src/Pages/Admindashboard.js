import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import AdminNavbar from '../Components/AdminNavbar'
import { useState } from "react";
import {useNavigate } from "react-router-dom";
function Admindashboard()
{

    

    return(
        <>
        <div className="xyz">
        <AdminNavbar/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Admin Dashboard</h2>
        





</div>



        
        </>
    );
}export default Admindashboard;