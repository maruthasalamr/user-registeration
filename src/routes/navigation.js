import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../helpers/history";
import Home from "../Components/home";
import CompanyPage from "../Components/CompanyDetails";
import EmailVerification from "../Components/EmailVerification";
export default function navigation() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path ="/companydetails" component={CompanyPage} />
        <Route path="/emailverification" component={EmailVerification} />
      </div>
    </Router>
  );

}
