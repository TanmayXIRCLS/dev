import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Col, Row } from 'reactstrap'

const Section7 = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column mt170 '
        // style={{backgroundColor:"#F0F0F0"}}
        >
            <div className='section9p5 w-75 '>
                <div className='text-center'>
                    <h2
                        className='display-3 text-center main-heading fw-bolder'
                    >
                        How it Works!
                    </h2>
                </div>
                <div className='text-center'>
                    <h3 className='text-secondary lh-29'
                    >While anyone can become a XIRCLS partner, to be a successful partner you must: <span className='SelectBlack' style={{ color: "#000" }}>three simple steps</span>.</h3>
                </div>
                <Row className="mt-5 lh-29 " >
                    <Col lg="4" className='mt-2'>
                        <div className='NumberHeader'>Step 1  <BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}>Sign up</span></div>
                        <div><h1 className='fs-4 fw-bolder text-black' >Sign up</h1></div>
                        <ul className='fs-4  text-secondary text-start mt-1 '>
                            <li >Understand the importance of end-to-end buyer journey optimization and believe
                                in the power of XIRCLS to accomplish this.</li>
                            <li>Have a client base/audience who need powerful yet simple martech solutions to
                                scale their sales & establish a lasting brand name.</li>
                        </ul>
                    </Col>
                    <Col lg="4" className='mt-2'>
                        <div className='NumberHeader'>Step 2  <BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}> Spread the word</span></div>
                        <div><h4 className='fs-4 fw-bolder text-black' >Spread the word</h4></div>
                        <div><div className='fs-4 text-secondary'>The moment you sign up, you instantly get access to your own dashboard. Start sharing affiliate links with your network and track performance. Our team will also be there for you with product demos, training manuals and other helpful resources to get you going.</div></div>
                    </Col>
                    <Col lg="4" className='mt-2'>
                        <div className='NumberHeader'>Step 3<BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}> Earn!</span></div>
                        <div><h4 className='fs-4 fw-bolder text-black' >Earn</h4></div>
                        <div><div className='fs-4 text-secondary'>You earn upto 30% commission for 24 months for every person who signs up and becomes a paying customer on XIRCLS through your affiliate links. The more you promote XIRCLS to your audience, the greater the opportunity to earn more commissions.</div></div>
                    </Col>
                </Row>
                <div className='text-center mt-2 mt-sm-0'>
                   
                    <button className='btn text-white btn-sm btnCustom fs-4 fw-bold border rounded-1 mt-3 px-2 py-1  '> Start for Free</button>

                </div>
            </div>
        </div>
    )
}

export default Section7