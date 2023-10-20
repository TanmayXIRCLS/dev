import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from "./logo copy.png"

import "./hero.scss"

const Hero = () => {
  return (
    <>
    <div className=' '  >
      <Carousel className=' ' >
        <Carousel.Item style={{height:'500px'}} className='' >
          <div className='   d-flex flex-column justify-content-center ' style={{height:'100%'}} >
            <h1 className=' text-center main-heading fw-bolder  demo'>
              From First Visit <br/> To Forever Loyal.
            </h1>
            <h2 className=' text-center text-black  mt-1' style={{ marginBottom: "80px" }}>An end-to-end martech stack for every step of the buyer journey.</h2>
            <div className=' d-flex  justify-content-center align-items-center gap-3' style={{marginTop:"-3vh"}}>
              <button type="button" className=' btn btn-lg newBtn '>SEE PRODUCTS</button>
              <button type="button" className=' btn  border-black  btn-lg fw-bold' style={{fontSize:"18px",color:"black"}}>REQUEST DEMO</button>
            </div>
          </div>
        </Carousel.Item>
{/* 
        <Carousel.Item style={{height:'500px'}} className=''>
          <div className='   d-flex flex-column justify-content-center ' style={{height:'100%'}} >
            <h1 className='display-3 text-center main-heading fw-bolder '>
              XIRCLS
            </h1>
            <h2 className=' text-center text-black mt-1' style={{ marginBottom: "80px" }}>THE WORLD’S FIRST DECENTRALIZED COLLABORATIVE MARKETING NETWORK.</h2>
            <div className=' d-flex   justify-content-center align-items-center gap-3' style={{marginTop:"-3vh"}}>
              <button type="button" className=' btn btn-lg btn-primary '>JOIN NETWORK </button>
              <button type="button" className=' btn btn-lg btn-outline-primary '>LEARN MORE</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{height:'500px'}} className=''>
          <div className='   d-flex flex-column justify-content-center ' style={{height:'100%'}} >
            <h1 className='display-3 text-center main-heading fw-bolder '>
              BREAK FREE FROM  AGGREGATORS.
            </h1>
            <h2 className='text-center text-black mt-1'>YOUR CUSTOMERS STAY YOURS ALONE.</h2>
            <h4 className=' text-center  mt-1' style={{ marginBottom: "80px" }}>Stop driving customers to your competition. Avoid harmful discounting.<br/> Cultivate loyalty for your business, not third-party platforms.</h4>
            <div className=' d-flex  justify-content-center align-items-center gap-3' style={{marginTop:"-3vh"}}>
              <button type="button" className=' btn btn-lg btn-primary '>Get Started</button>
              <button type="button" className=' btn btn-lg btn-outline-primary '>Let's Talk</button>
            </div>
          </div>

        </Carousel.Item> */}
      </Carousel>
    </div>
    </>
  )
}

export default Hero