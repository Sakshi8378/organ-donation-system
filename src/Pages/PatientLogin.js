import Navbar1 from "../Components/Navbar1";
import './PatientLogin.css'
import Footer3 from '../Components/Footer3'
import { useState } from "react";
function PatientLogin()
{
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const Save =()=>
    {
        if(username.length==0)
        {
            alert("Usename cannot be empty");
            return false;
        }
        else if(password.length==0)
        {
            alert("password cannot be empty");
            return false;
        }
       
    }
        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Patient Login Form</h2>
        <div className="container fadmin mt-3 bg-white p-4 rounded" style={{ maxWidth: '50%' }}>
            
    <form className="mx-auto">
    <div className="form-group row">
            <label htmlFor="userId" className="col-sm-3 col-form-label" >User ID:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="userId" placeholder="Enter your user ID" onChange={(e)=>setusername(e.target.value)} />
            </div>
        </div>
        
        <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-success" onClick={Save}>Submit</button>
            </div>
        </div>
    </form>
</div>



<div className="footer"> <Footer3/></div>


</div>



        
        </>
    );
}export default PatientLogin;