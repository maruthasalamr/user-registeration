import React from "react";
import Header from "./header";
import noimage from "../static/images/image_icon.png";
import history from "../helpers/history";
function CompanyDetails() {
  const uploadcompanylogo = () =>{
    document.getElementById('customFile').click();
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
            <form>
              <div className="row">
                 <div class="col-sm-4">
                     <img src={noimage} alt="prof" className="userimg"/>
                 </div>
                 <div class="col-sm-8 pt-4">
                  <div class="">
                      <input type="file" className="hideinput" id="customFile" />
                      <a class="text_color text-left" for="customFile" onClick={(e)=>uploadcompanylogo(e)}>Upload your company logo</a>
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
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email Id</label>
                <input
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Job Title</label>
                <input
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Job title"
                  type="text"
                />
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
                />
              </div>
              <div class="form-check small">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" />
                  <span>I accept the</span>
                  <span className="text_color">&nbsp;Terms and Conditions</span>
                </label>
              </div>
              <div class="row pt-3">
                <div class="col-sm-4">
                   <button class="back_btn" onClick={(e)=>history.push('/')}>Back</button>
                </div>
                <div class="col-sm-8">
                    <button className="next-btn" onClick={(e)=>history.push('/emailverification')}>Send OTP</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
