import React from 'react';
import history from "../helpers/history";
function successPage() {
    return (
        <div class="container pt-3" style={{ width: "40rem",marginTop:'70px' }}>
            <div class="card text-left card_custom">
            <div class="card-header text-center bfcol">
                 <div className="icon_box">
                   
                 </div>
                 <h1>Thank You!</h1>
             </div>
                 <div class="card-body custombd">
                      <p className="text-center">You have successfully registered.</p>
                 </div>
                 <div class="card-footer text-center bfcol">
                     <button type="button" class="btn btn-success btn-lg changecl" onClick={(e) => history.push("/")}>Go to home</button>
                 </div>
            </div>
        </div>
    )
}

export default successPage
