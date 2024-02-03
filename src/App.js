import logo from './logo.svg';
import './App.css';
import navbar from './Components/navbar';
import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';
import organdonationimage from './organdonationimage.jpg'
import Footer1 from './Components/Footer1';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import DonorReg from './Pages/DonorReg';
import Home from './Pages/Home';
import AdminLogin1 from './Pages/AdminLogin1'
import PatientReg from './Pages/PatientReg'
import Admindashboard from './Pages/Admindashboard'
import DonorLogin from './Pages/DonorLogin'
import PatientLogin from './Pages/PatientLogin'
import AdminDonorDetails from './Pages/AdminDonorDetails'
import AdminDonorPatientDetails from './Pages/AdminDonorPatientDetails'
import AdminPatientDetails from './Pages/AdminPatientDetails'
function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
    <>
    </>
      <Route path="/DonorReg" element ={<DonorReg/>}></Route>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/Home" element ={<Home/>}></Route>
      <Route path="/PatientReg" element ={<PatientReg/>}></Route>
      <Route path="/AdminLogin1" element ={<AdminLogin1/>}></Route>
      <Route path="/Admindashboard" element ={<Admindashboard/>}></Route>
      <Route path="/DonorLogin" element ={<DonorLogin/>}></Route>
      <Route path="/PatientLogin" element ={<PatientLogin/>}></Route>
      <Route path="/AdminDonorDetails" element ={<AdminDonorDetails/>}></Route>
      <Route path="/AdminDonorPatientDetails" element ={<AdminDonorPatientDetails/>}></Route>
      <Route path="/AdminPatientDetails" element ={<AdminPatientDetails/>}></Route>
  </Routes>
  </BrowserRouter>


 


 </>
   
  );
}

export default App;
