import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
            <h3>Search for an answer or browse help topics to create a ticket</h3 >
            <input placeholder="E.g: How do I activated F&O, why is my order getting rejected..."/><br/>
            <a href="">Track account opening</a>
            <a href="" style={{marginLeft:"10px"}}>Track segment activation</a>
            <a href="" style={{marginLeft:"10px"}}>Intraday margins</a>
            <a href="" style={{marginLeft:"10px"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
            <h3>Featured</h3>
            <ol style={{lineHeight:"35px"}}>
                <li><a href="">Surveillance measure on scrips - June 2025</a><br/></li>
                <li><a href="">Offer for sale (OFS) June 2025</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
