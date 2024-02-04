import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3'
import './PatientReg.css'
import { useState } from "react";
function PatientReg()
{
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [password1,setpassword1]=useState("");
    const Save1 =()=>
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
        if(password != password1)
        {
                      
            alert("Reenterd password not similar to previous password");
            return false;
        }
    }
        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Patient Registration Form</h2>
        <div className="container fadmin mt-3 bg-white p-4 rounded" style={{ maxWidth: '50%' }}>
            
    <form className="mx-auto">
        <div className="form-group row mb-1">
            <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="age" className="col-sm-3 col-form-label">Age:</label>
            <div className="col-sm-9">
                <input type="number" className="form-control" id="age" placeholder="Enter your age" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="bloodGroup" className="col-sm-3 col-form-label">Blood Group:</label>
            <div className="col-sm-9">
                <select className="form-control" id="bloodGroup">
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                    <option>O-</option>
                </select>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="gender" className="col-sm-3 col-form-label">Gender:</label>
            <div className="col-sm-9">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="address" className="col-sm-3 col-form-label">Address:</label>
            <div className="col-sm-9">
                <textarea className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
            <div className="col-sm-9">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setusername(e.target.value)} />
                {/* You might want to add email validation here */}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Contact Number:</label>
            <div className="col-sm-9">
                <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
            </div>
        </div>
        {/* <div className="form-group row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="donateOrgan" />
                    <label className="form-check-label" htmlFor="donateOrgan">Donate Organ</label>
                </div>
            </div>
        </div> */}
        <div className="form-group row">
            <label htmlFor="organ" className="col-sm-3 col-form-label">Needed Organ:</label>
            <div className="col-sm-9">
                <select className="form-control" id="organ">
                    <option>Heart</option>
                    <option>Liver</option>
                    <option>Kidney</option>
                    <option>Lung</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
       
        <div className="form-group row">
            <label htmlFor="datetime" className="col-sm-3 col-form-label">Time Required:</label>
            <div className="col-sm-9">
                <input type="datetime-local" className="form-control" id="datetime" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="reenterPassword" className="col-sm-3 col-form-label">Re-enter Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="reenterPassword" placeholder="Re-enter your password" onChange={(e)=>setpassword1(e.target.value)} />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-primary" onClick={Save1}>Submit</button>
            </div>
        </div>
    </form>
</div>





<div className="footer"> <Footer3/></div>
</div>



        
        </>
    );
}export default PatientReg;