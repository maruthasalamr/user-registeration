import React,{useState} from "react";
import CompanyPage from "./CompanyDetails";
import EmailVerification from "./EmailVerification";
import PersonalDetails from "./personaldetails";
import "../stepper.css";
import { Tabs, Tab } from "react-bootstrap";
function Header() {
  const [key, setkey] = useState(1)
  const handleselect = (key) =>{
    setkey(key);
  }
const next_btn = (key) =>{
  setkey(key);
}
  return (
    <div>
      <div class="container-fluid p-3">
        <Tabs activeKey={key} onSelect={handleselect} id="controlled-tab-example">
          <Tab eventKey={1} title="1 Personal Details"><PersonalDetails selectfun={next_btn}/></Tab>
          <Tab eventKey={2} title="2 Company Details"><CompanyPage thirdtab={next_btn} firstab={next_btn}/></Tab>
          <Tab eventKey={3} title="3 Email Verification"><EmailVerification second_tab={next_btn}/></Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
