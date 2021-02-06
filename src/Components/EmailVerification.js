import React from "react";
import Header from "./header";
import history from "../helpers/history";
function EmailVerification() {
  return (
    <div>
      <Header />
      <div class="container-sm pt-3" style={{ width: "40rem" }}>
        <h1>Enter your OTP</h1>
        <p>
          For your security, we need to verify your identity. We sent a 5-digit
          code to <span class="font-weight-bold">name@domain.com</span>. Please
          enter it below.
        </p>
        <div class="card text-left card_custom">
          <div class="card-body">
            <label for="exampleFormControlInput1">Enter your code</label>
            <div class="row selectedinput">
               <div class="col-sm">
                   <input autocomplete="off" class="form-control input_height" maxlength="3" pattern="\d{1}" placeholder="" type="text"/>
               </div>
              <div class="col-sm">
                  <input autocomplete="off" class="form-control input_height" maxlength="3" pattern="\d{1}" placeholder="" type="text"/>
              </div>
              <div class="col-sm">
                   <input autocomplete="off" class="form-control input_height" maxlength="3" pattern="\d{1}" placeholder="" type="text"/>
              </div>
              <div class="col-sm">
                   <input autocomplete="off" class="form-control input_height" maxlength="3" pattern="\d{1}" placeholder="" type="text"/>
              </div>
              <div class="col-sm">
                   <input autocomplete="off" class="form-control input_height" maxlength="3" pattern="\d{1}" placeholder="" type="text"/>
              </div>
            </div>
            <div class="row pt-3">
                <div class="col-sm-4">
                   <button class="back_btn" onClick={(e)=>history.push('/companydetails')}>Back</button>
                </div>
                <div class="col-sm-8">
                    <button className="next-btn">Verify</button>
                </div>
            </div>
          </div>
          <div class="card-footer pt-3 text-center cardbg">
              Didn’t receive the email?  Check your spam filter for an email from <span className="text_color">name@domain.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
