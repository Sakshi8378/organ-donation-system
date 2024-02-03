import {useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate =useNavigate();
  const goto1 =(flag)=>
    {
        
       
        if(flag===1)
        {
            navigate("/Admindashboard")
        }
        else if(flag===2)
        {
          navigate("/AdminDonorDetails")
        }
        else if(flag===3)
        {
          navigate("/AdminPatientDetails")
        }
        else if(flag===4)
        {
          navigate("/AdminDonorPatientDetails")
        }
        else if(flag===5)
        {
          navigate("/Home")
        }
       
        

        
            
    }

    return(

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">We Donate</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a  onClick={()=>goto1(5)} class="nav-link active" aria-current="page" href="">Main Page</a>
          </li>
          <li class="nav-item">
            <a  onClick={()=>goto1(1)} class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a onClick={()=>goto1(2)} class="nav-link" >Donor Details</a>
          </li>
          <li class="nav-item">
            <a onClick={()=>goto1(3)} class="nav-link" >Patient Details</a>
          </li>
          <li class="nav-item">
            <a onClick={()=>goto1(4)} class="nav-link" >Donor-Patient</a>
          </li>
          

                   
                  

                    
                    
         
        </ul>
       
      </div>
    </div>
  </nav>






    );
    




}
export default AdminNavbar;