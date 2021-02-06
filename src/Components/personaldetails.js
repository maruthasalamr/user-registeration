import React,{useState} from "react";
import { Dropdown } from "semantic-ui-react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import history from "../helpers/history";
function Personaldetails() {
    const [phone, setphone] = useState("");
    const initialState = {
      name:"",
      gender:"",
      country:"",
      state:"",
      phone:""
    }
    const [personaldetailsform, setpersonaldetailsform] = useState(initialState)
  const countryOptions = [
    { key: "in", value: "in", flag: "in", text: "India"},
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
    { key: "al", value: "al", flag: "al", text: "Albania" },
    { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  ];
  return (
    <div class="container-sm pt-3" style={{ width: "40rem"}}>
      <h1>Add your personal details</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="card text-left card_custom">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Full Name</label>
              <input type="email" class="form-control" placeholder="" value={personaldetailsform.name} onChange={(e)=>setpersonaldetailsform({...personaldetailsform,name:e.target.value})}  required/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Gender</label>
              <div class="row">
                <div class="col-sm">
                  <button className="gender_btn">Male</button>
                </div>
                <div class="col-sm">
                  <button className="gender_btn">Female</button>
                </div>
                <div class="col-sm">
                  <button className="gender_btn">Other</button>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Country</label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
                onChange={(e)=>console.log("check-",e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">State</label>
              <select class="form-control" value={personaldetailsform.state} onChange={(e)=>setpersonaldetailsform({...personaldetailsform,name:e.target.value})} onChange={(e)=>setpersonaldetailsform({...personaldetailsform,name:e.target.value})}>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
              </select>
            </div>
            <div class="form-group inputwidth">
              <label for="exampleFormControlSelect1">Phone</label>
              <ReactPhoneInput
                inputExtraProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                defaultCountry={"in"}
                value={phone}
                onChange={(value)=>setphone(value)}
              />
            </div>
            <button className="next-btn" onClick={(e)=>history.push('/companydetails')}>Next</button>
          </form>
          <div className="text-center pt-3">
              <p>Already have an account? <span className="text_color">Log in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personaldetails;
