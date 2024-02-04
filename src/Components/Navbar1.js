import {useNavigate } from "react-router-dom";

function Navbar1() {

  const navigate =useNavigate();
  const goto1 =(flag)=>
    {
        
       
        if(flag===1)
        {
            navigate("/Home")
        }
        else if(flag===2)
        {
          navigate("/DonorReg")
        }
        else if(flag===3)
        {
          navigate("/PatientReg")
        }
        else if(flag===4)
        {
          navigate("/AdminLogin1")
        }
        else if(flag===5)
        {
          navigate("/DonorLogin")
        }
        else if(flag===6)
        {
          navigate("/PatientLogin")
        }

        
            
    }

    return(

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><span className="text-primary"><h2>We Donate</h2></span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a  onClick={()=>goto1(1)} class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          {/* <li class="nav-item">
            <a onClick={()=>goto1(2)} class="nav-link" href="#">Donor</a>
          </li> */}
          <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Donor</a>
                        <div class="dropdown-menu m-0">
                            <a onClick={()=>goto1(2)}  class="dropdown-item">Registration</a>
                            <a  onClick={()=>goto1(5)} class="dropdown-item">Login</a>
                            
                        </div>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Patient</a>
                        <div class="dropdown-menu m-0">
                            <a onClick={()=>goto1(3)}  class="dropdown-item">Registration</a>
                            <a  onClick={()=>goto1(6)}  class="dropdown-item">Login</a>
                            
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">For Hospital</a>
                        <div class="dropdown-menu m-0">
                            <a onClick={()=>goto1(3)}  class="dropdown-item">Registration as patient</a>
                            <a onClick={()=>goto1(6)} class="dropdown-item">Login as patient</a>
                            <a onClick={()=>goto1(2)}  class="dropdown-item">Registration as Donor</a>
                            <a  onClick={()=>goto1(5)} class="dropdown-item">Login as Donor</a>
                        </div>
                    </div>

                    
                    
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Patient</a>
          </li> */}
          <li class="nav-item">
            <a onClick={()=>goto1(4)} class="nav-link" >Admin</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Hospital</a>
          </li> */}
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}

        </ul>
        {/* <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a  onClick={()=>goto1(1)} class="nav-link " aria-current="page" href="tel:+918378859875"><p><span className="text-primary" style={{ whiteSpace:'nowrap'}}>91-9898899988</span></p></a>
          </li>
          <li class="nav-item">
            <a  onClick={()=>goto1(1)} class="nav-link " aria-current="page" href="mailto:wedonate@gmail.com"><span className="text-primary"><h5>wedonate@gmail.com</h5></span></a>
          </li>
        </ul> */}
         






        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>






    );
    




}
export default Navbar1;