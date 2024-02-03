import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import AdminNavbar from '../Components/AdminNavbar'
function AdminDonorPatientDetails()
{

    

    return(
        <>
        <div className="xyz">
        <AdminNavbar/>
        <div className="container">
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Donor - Patient Details</h2>
        <div className="addbutton" style={{textAlign : "center"}}>
    <button class="btn btn-primary rounded-pill py-2 px-3"  style={{marginTop: "20px"}}>Insert</button>

    </div>
        <table class="table table-striped mt-5">
  <thead class="thead-dark">
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Patient Aadhar Number</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient Email</th>
      <th scope="col">Patient Contact</th>
      <th scope="col">Donor Aadhar Number</th>
      <th scope="col">Donor Name</th>
      <th scope="col">Donor Email</th>
      <th scope="col">Donor Contact</th>
      <th scope="col">Date Of Assignment</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">xyz</th>
      <td>xyz</td>
      <td>xyz+</td>
      <td>xyz</td>
      <td>xyz</td>
      <td>xyz</td>
      <td>xyz</td>
      <td>xyz</td>
      <td>xyz</td>
      <td>xyz</td>
      <td><button class="btn btn-primary rounded-pill py-1 px-1" >Edit</button></td>
      <td><button class="btn btn-primary rounded-pill py-1 px-1" >Delete</button></td>
    </tr>
    
  </tbody>
</table>
</div>







</div>



        
        </>
    );
}export default AdminDonorPatientDetails;