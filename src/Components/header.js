import React from 'react';
import { useLocation } from 'react-router-dom';
import "../stepper.css";
function Header() {
  const location = useLocation();
  console.log("location.pathnam;",location.pathname);
  const getCurrentRoute = () =>{
    return location.pathname.split('/')[1].toLowerCase()
  }
    return (
    <div class="container-fluid p-3 text-white bgcolor">
        <div class="row">
          <div class="col-4"><span class={"badge badgeclr "+(getCurrentRoute() == '' ? 'bg_select':'unselect_bg')}>1</span>Personal Details</div>
          <div class="col-4"><span class={"badge badgeclr "+(getCurrentRoute() == 'companydetails' ? 'bg_select':'unselect_bg')}>2</span>Company Details</div>
          <div class="col-4"><span class={"badge badgeclr "+(getCurrentRoute() == 'emailverification' ? 'bg_select':'unselect_bg')}>3</span>Email Verification</div>
        </div>
      </div>
    )
}

export default Header
