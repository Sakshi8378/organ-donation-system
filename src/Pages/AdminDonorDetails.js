import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import AdminNavbar from '../Components/AdminNavbar'
import Footer3 from '../Components/Footer3'
import './AdminDonorDetails.css'
function AdminDonorDetails()
{

    

    return(
        <>
        <div className="xyz">
        <AdminNavbar/>
        <div className="container">
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Donor Details</h2>
       

      
        <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Organ to Donate</th>
      <th scope="col">Is Donor alive or dead</th>
      <th scope="col">death certificate</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">xyz</th>
      <td>21</td>
      <td>A+</td>
      <td>Female</td>
      <td>xyz xyz xyz xyz</td>
      <td>xyz@xyz.com</td>
      <td>7878787878</td>
      <td>Eye</td>
      <td>Alive</td>
      <td>Filename</td>
  
    </tr>
    
  </tbody>
</table>
</div>


        



<div className="footer"> <Footer3/></div>

</div>



        
        </>
    );
}export default AdminDonorDetails;