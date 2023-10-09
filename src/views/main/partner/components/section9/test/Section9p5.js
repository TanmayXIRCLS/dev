import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const Section9p5 = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column mt80 py-3'
        // style={{backgroundColor:"#F0F0F0"}}
        >
            <div className='section9p5 w-75 '>
                <div className='text-center'>
                    <h2
                        className='display-3 text-center text-black fw-bolder h1Heading'
                        style={{ margin: "0px 0px 12px", lineHeight: "80%" }}
                    >
                        How it Works!
                    </h2>
                </div>
                <div className='text-center'>
                    <h5 className='SmallText'
                        style={{ paddingBottom: "80px" }}
                    >While anyone can become a XIRCLS partner, to be a successful partner you must: <span className='SelectBlack' style={{ color: "#000" }}>three simple steps</span>.</h5>
                </div>
                <div className="wrapper">
                    <div>
                        <div className='NumberHeader'>
                            <h2 className=' ' style={{ color: "black !important" }}>Step 1  <BiRightArrowAlt /><span style={{ fontWeight: "bolder" }}>Sign up</span></h2>
                        </div>
                        <div><h3 className=' fw-bolder text-black' >Sign up</h3></div>
                        <ul className='smallText fs-5  text-secondary text-start mt-1'>
                            <li>Understand the importance of end-to-end buyer journey optimization and believe
                                in the power of XIRCLS to accomplish this.</li>
                            <li>Have a client base/audience who need powerful yet simple martech solutions to
                                scale their sales & establish a lasting brand name.</li>
                        </ul>
                    </div>
                    <div>
                        <div className='NumberHeader'>
                            <h2 className=' ' style={{ color: "black !important" }}>Step 2  <BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}> Spread the word</span></h2>
                        </div>
                        <div><h3 className=' fw-bolder text-black' >Spread the word</h3></div>
                        <div><h6 className='SmallText fs-5'>The moment you sign up, you instantly get access to your own dashboard. Start sharing affiliate links with your network and track performance. Our team will also be there for you with product demos, training manuals and other helpful resources to get you going.</h6></div>
                    </div>
                    <div>
                        <div className='NumberHeader'>
                            <h2 className=' ' style={{ color: "black !important" }}>Step 3<BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}> Earn!</span></h2>
                        </div>
                        <div><h3 className=' fw-bolder text-black' >Earn</h3></div>
                        <div><h6 className='SmallText fs-5'>You earn upto 30% commission for 24 months for every person who signs up and becomes a paying customer on XIRCLS through your affiliate links. The more you promote XIRCLS to your audience, the greater the opportunity to earn more commissions.</h6></div>
                    </div>
                </div>
                <div className='text-center mt-2 mt-sm-0'>
                    <button
                        className='btn btn-dark btn-sm btnCustom'
                    >
                        Start for Free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section9p5