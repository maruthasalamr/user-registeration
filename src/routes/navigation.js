import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../helpers/history";
import Home from "../Components/home";
import SuccessPage from "../Components/successPage";
export default function navigation() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Successpage" component={SuccessPage} />
      </div>
    </Router>
  );

}
