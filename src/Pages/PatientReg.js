import Navbar1 from "../Components/Navbar1";
import './PatientReg.css'
function PatientReg()
{
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
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
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
            <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</div>






</div>



        
        </>
    );
}export default PatientReg;