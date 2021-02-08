import React, { useState } from "react";
import Header from "./header";
import noimage from "../static/images/image_icon.png";
import history from "../helpers/history";
function CompanyDetails() {
  const uploadcompanylogo = () => {
    document.getElementById("customFile").click();
  };
  
  const [companydetails, setcompanydetails] = useState({
    company_logo: "",
    company_name: "",
    email_id: "",
    job_title: "",
    experiance: "",
    terms:false
  });
  const handleinput = (e) =>{
    if(e.target.checked){
      setcompanydetails({
        ...companydetails,
        terms: true,
      })
    }
    else{
      setcompanydetails({
        ...companydetails,
        terms: false,
      })
    }
  }
   const sendbtn = (e) =>{
    if(companydetails.company_name ==  ""){
           document.getElementById('valid_companyname').style.display = "block";
           setTimeout(() => {
            document.getElementById('valid_companyname').style.display = "none";
           }, 3000);
    }
    else if(companydetails.email_id == ""){
      document.getElementById('valid_email').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_email').style.display = "none";
      }, 3000);
    }
    else if(companydetails.job_title == ""){
      document.getElementById('valid_job').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_job').style.display = "none";
      }, 3000);
    }
    else if(companydetails.experiance == ""){
      document.getElementById('valid_expe').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_expe').style.display = "none";
      }, 3000);
    }
    else if(companydetails.terms == false){
      document.getElementById('valid_terms').style.display = "block";
      setTimeout(() => {
       document.getElementById('valid_terms').style.display = "none";
      }, 3000);
    }
    else{
      localStorage.setItem('companydetails',JSON.stringify(companydetails))
      history.push("/emailverification");
    }
  }
  return (
    <div>
      <Header />
      <div class="container-sm pt-3" style={{ width: "40rem" }}>
        <h1>Add your company details</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="card text-left card_custom">
          <div class="card-body">
            <div>
              <div className="row">
                <div class="col-sm-4">
                  <img src={noimage} alt="prof" className="userimg" />
                </div>
                <div class="col-sm-8 pt-4">
                  <div class="">
                    <input type="file" className="hideinput" id="customFile" />
                    <a
                      class="text_color text-left"
                      for="customFile"
                      onClick={(e) => uploadcompanylogo(e)}>
                      Upload your company logo
                    </a>
                  </div>
                </div>
              </div>
              <div class="form-group pt-3">
                <label for="exampleFormControlInput1">Company Name</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Company Name"
                  type="text"
                  value={companydetails.company_name}
                  onChange={(e) =>
                    setcompanydetails({
                      ...companydetails,
                      company_name: e.target.value,
                    })
                  }
                  required
                />
                <div id="valid_companyname" className="invalid" style={{display:'none'}}>
                     Please enter company name.
                 </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email Id</label>
                <input
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  type="email"
                  value={companydetails.email_id}
                  onChange={(e) =>
                    setcompanydetails({
                      ...companydetails,
                      email_id: e.target.value,
                    })
                  }
                  required
                />
                <div id="valid_email" className="invalid" style={{display:'none'}}>
                     Please enter valid email.
                 </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Job Title</label>
                <input
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Job title"
                  type="text"
                  value={companydetails.job_title}
                  onChange={(e) =>
                    setcompanydetails({
                      ...companydetails,
                      job_title: e.target.value,
                    })
                  }
                  required
                />
                 <div id="valid_job" className="invalid" style={{display:'none'}}>
                     Please enter your job titile.
                 </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Years of Experience
                </label>
                <input
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Years of Experience"
                  type="text"
                  value={companydetails.experiance}
                  onChange={(e) =>
                    setcompanydetails({
                      ...companydetails,
                      experiance: e.target.value,
                    })
                  }
                  required
                />
                  <div id="valid_expe" className="invalid" style={{display:'none'}}>
                     Please enter your experiance.
                 </div>
              </div>
              <div class="form-check small">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value={companydetails.terms} onChange={(e)=>handleinput(e)} required />
                  <span>I accept the</span>
                  <span className="text_color">&nbsp;Terms and Conditions</span>
                </label>
                <div id="valid_terms" className="invalid" style={{display:'none'}}>
                     Please accept the terms and Conditions
                 </div>
              </div>
              <div class="row pt-3">
                <div class="col-sm-4">
                  <button class="back_btn" onClick={(e) => history.push("/")}>
                    Back
                  </button>
                </div>
                <div class="col-sm-8">
                  <button
                    className={"next-btn "+(companydetails.company_name !==""&&companydetails.job_title !==""&&companydetails.experiance !==""&&companydetails.email_id !==""&&companydetails.terms!==false ? 'enable_btn':'disable_btn')}
                    onClick={(e) => sendbtn(e)}>
                    Send OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
