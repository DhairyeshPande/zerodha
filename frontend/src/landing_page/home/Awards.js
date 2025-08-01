import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                     <img src="media/images/largestBroker.svg" alt='Largest Broker Image'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                     <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stokes and IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government Securities</li>
                            </ul>
                        </div>
                     </div>
                     <img src='media/images/pressLogos.png' alt='Press Logo Image' style={{width:"95%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;