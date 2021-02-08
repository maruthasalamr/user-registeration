import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import history from "../helpers/history";
function Personaldetails() {
  const initialState = {
    name: "",
    gender: "",
    country: "",
    state: "",
    phone: "",
  };

  const [personaldetailsform, setpersonaldetailsform] = useState(initialState);
  const handleChange = (e, { value }) =>
    setpersonaldetailsform({ ...personaldetailsform, country: value });
  const countryOptions = [
    { key: "in", value: "in", flag: "in", text: "India" },
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
    { key: "al", value: "al", flag: "al", text: "Albania" },
    { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  ];
  const nextpage = () =>{
    if(personaldetailsform.name ==""){
       document.getElementById('valid_user').style.display = "block";
       setTimeout(() => {
        document.getElementById('valid_user').style.display = "none";
       }, 3000);
    }
    else if(personaldetailsform.gender == ""){
      document.getElementById('valid_gender').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_gender').style.display = "none";
      }, 3000);
    }
    else if(personaldetailsform.country == ""){
      document.getElementById('valid_country').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_country').style.display = "none";
      }, 3000);
    }
    else if(personaldetailsform.state == ""){
      document.getElementById('valid_state').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_state').style.display = "none";
      }, 3000);
    }
    else if(personaldetailsform.phone == ""){
      document.getElementById('valid_phone').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_phone').style.display = "none";
      }, 3000);
    }
    else{
      history.push("/companydetails");
      localStorage.setItem('personaldetails',JSON.stringify(personaldetailsform))
    }
  }
  console.log("state", personaldetailsform);
  return (
    <div class="container-sm pt-3" style={{ width: "40rem" }}>
      <h1>Add your personal details</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="card text-left card_custom">
        <div class="card-body">
          <div>
            <div class="form-group">
              <label for="exampleFormControlInput1 ">Full Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                value={personaldetailsform.name}
                onChange={(e) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    name: e.target.value,
                  })
                }
                required
              />
                <div id="valid_user" className="invalid" style={{display:'none'}}>
                     Please enter user name.
                 </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Gender</label>
              <div class="custom-choose mb-3">
                <input type="radio" id="opt-1" value="Male" name="gender" onChange={(e) =>setpersonaldetailsform({...personaldetailsform,gender: e.target.value})}/>
                <label for="opt-1">Male</label>
                <input type="radio" id="opt-2" value="Female" name="gender" onChange={(e) =>setpersonaldetailsform({...personaldetailsform,gender: e.target.value})} />
                <label for="opt-2">Female</label>
                <input type="radio" id="opt-3" value="Other" name="gender" onChange={(e) =>setpersonaldetailsform({...personaldetailsform,gender: e.target.value})}/>
                <label for="opt-3">Other</label>
              </div>
                <div id="valid_gender" className="invalid" style={{display:'none'}}>
                     Please select the gender.
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
                value={personaldetailsform.country}
                onChange={handleChange}
              />
               <div id="valid_country" className="invalid" style={{display:'none'}}>
                     Please select the country.
                 </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">State</label>
              <select
                class="form-control"
                value={personaldetailsform.state}
                onChange={(e) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    state: e.target.value,
                  })
                }>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
              </select>
                <div id="valid_state" className="invalid" style={{display:'none'}}>
                     Please select the state.
                 </div>
            </div>
            <div class="form-group inputwidth">
              <label for="exampleFormControlSelect1">Phone</label>
              <PhoneInput
                country={personaldetailsform.country}
                value={personaldetailsform.phone}
                onChange={(value) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    phone: value,
                  })
                }
              />
                 <div id="valid_phone" className="invalid" style={{display:'none'}}>
                     Please select the phone.
                 </div>
            </div>
            <button
              className={"next-btn "+(personaldetailsform.name !==""&&personaldetailsform.gender !==""&&personaldetailsform.country !==""&&personaldetailsform.state !==""&&personaldetailsform.phone !=="" ?'enable_btn':'disable_btn')}
              // disabled={personaldetailsform.name ==""&&personaldetailsform.gender ==""&&personaldetailsform.country ==""&&personaldetailsform.state ==""&&personaldetailsform.phone =="" ? true:false}
              type="submit"
             onClick={(e) =>nextpage(e)}>
              Next
            </button>
          </div>
          <div className="text-center pt-3">
            <p>
              Already have an account?{" "}
              <span className="text_color">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personaldetails;
