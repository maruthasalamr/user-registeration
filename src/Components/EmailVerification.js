import React,{useState} from "react";
import Header from "./header";
import history from "../helpers/history";
function EmailVerification() {
  const [otponedata, setotponedata] = useState(null);
  const [otptwodata, setotptwodata] = useState(null);
  const [otpthree, setotpthree] = useState(null);
  const [otpfour, setotpfour] = useState(null);
  const Emailid = localStorage.getItem('companydetails') ? JSON.parse(localStorage.getItem('companydetails')) :"";
  const verify_btn = () =>{
    var otpdata = {otponedata,otptwodata,otpthree,otpfour}
     localStorage.setItem('optdetails',JSON.stringify(otpdata))
    history.push('/Successpage')
  }
  return (
    <div>
      <Header />
      <div class="container-sm pt-3" style={{ width: "40rem" }}>
        <h1>Enter your OTP</h1>
        <p>
          For your security, we need to verify your identity. We sent a 5-digit
          code to <span class="font-weight-bold">{Emailid.email_id}</span>. Please
          enter it below.
        </p>
        <div class="card text-left card_custom">
          <div class="card-body">
            <label for="exampleFormControlInput1">Enter your code</label>
             <div class="d-flex flex-row mt-5 otpform">
                <input type="text" class="form-control input_height" value={otponedata} onChange={(e)=>setotponedata(e.target.value)} />
                 <input type="text" class="form-control input_height" value={otptwodata} onChange={(e)=>setotptwodata(e.target.value)}/>
                 <input type="text" class="form-control input_height" value={otpthree} onChange={(e)=>setotpthree(e.target.value)}/>
                 <input type="text" class="form-control input_height" value={otpfour} onChange={(e)=>setotpfour(e.target.value)}/>
              </div>
            <div class="row pt-3">
                <div class="col-sm-4">
                   <button class="back_btn" onClick={(e)=>history.push('/companydetails')}>Back</button>
                </div>
                <div class="col-sm-8">
                    <button 
                     className={"next-btn "+(otponedata!=null&&otptwodata!==null&&otpthree!==null&&otpfour!==null ? 'enable_btn':'disable_btn')}
                     onClick={()=>verify_btn()}
                     >Verify</button>
                </div>
            </div>
          </div>
          <div class="card-footer pt-3 text-center cardbg">
              Didn’t receive the email?  Check your spam filter for an email from <span className="text_color">{Emailid.email_id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
