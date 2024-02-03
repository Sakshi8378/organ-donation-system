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
      
  </Routes>
  </BrowserRouter>


 


 </>
   
  );
}

export default App;
