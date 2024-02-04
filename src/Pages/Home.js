import Navbar1 from "../Components/Navbar1";
import './Home.css'
import Footer3 from '../Components/Footer3'
import Footer1 from "../Components/Footer1";
import Footer2 from '../Components/Footer2'
import TopNavBar from '../Components/TopNavBar'
function Home()
{

    return(
        <>
        <div className="homebody">
            {/* <TopNavBar/> */}
        <Navbar1/>
        <div className="footer"> <Footer3/></div>
       
        

        </div>
           
        </>
    );
}export default Home;