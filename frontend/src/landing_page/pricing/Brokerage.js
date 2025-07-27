import React from "react";

function Brokerage() {
  return (
    <div className="containier">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-6 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
            <ul style={{textAlign:"left"}}>
                <li>Securities/Commodities transaction tax</li>
                <li>Transaction/Turnover Charges</li>
                <li>GST</li>
                <li>SEBI Charges</li>
                <li>DP (Depository participant) charges</li>
                <li>Call & trade</li>
                <li>AMC (Account maintenance charges)</li>
            </ul>
        </div>
        <div className="col-6 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
            <ul style={{textAlign:"left"}}>
                <li>Charges for account opening</li>
                <li>Charges for optional value added services</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
