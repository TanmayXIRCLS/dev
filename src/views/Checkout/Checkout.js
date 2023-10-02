import './Checkout.css'

import React from 'react'

const Checkout = () => {
  return (
    <>
                <div className="mx-auto text-center" style={{maxWidth:"600px"}}>
                    <div className="row">
                        <div className="col-sm">
                            <input style={{marginTop:"8px"}} type='text'></input>
                        </div>
                        <div className="col-sm">
                            <input type="checkbox" id="LoggedInUser" name="checkoutOption"/>
                                <label for="Logged In User" style={{margin:"10px"}}>Logged In User</label>
                            <span style={{marginLeft:"12px"}}>
                                <input type="checkbox" id="GuestCheckout" name="checkoutOption"/>
                                    <label for="Guest Checkout" style={{marginLeft:"4px"}}> Guest Checkout</label>
                            </span>
                        </div>
                                {/* <div className="col-sm"><button className='btn btn-primary w-auto h-auto ' style={{fontSize:"12px", marginTop:"6px"}}> Logged In User</button></div>
                                <div className="col-sm"><button className='btn btn-primary w-auto h-auto ' style={{fontSize:"12px", marginTop:"6px"}}> Guest Checkout</button></div> */}
                            {/* <div className="row text-center py-1">
                            </div> */}
                    </div>
                </div>
    </>
  )
}

export default Checkout