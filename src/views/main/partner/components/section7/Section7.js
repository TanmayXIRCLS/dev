import React from 'react'
import bgimg from './bg2.png'
import { Card, Col, Row } from 'reactstrap'
export default function Section7() {
    return (
        <div className='section7 d-flex justify-content-center align-items-center flex-wrap mt100 ' >
            <div className='text-center'>
                <h1 className='display-6 fw-bolder text-black h1Heading'  >Share your referral <span className='text-orange'>Link</span></h1>
                <h6 className='fs-5 text-secondary w-75 m-auto'>Share your affiliate Link on your website, blog, social media, webinars, and in training courses, it doesn't matter where, just share!</h6>
            </div>

            <Row className=' box w-75'>

                <Col md="7" className=' d-flex justify-content-center flex-column align-items-center '>
                    <div className='inbox bg-white shadow-lg border px-3 py-2  rounded-3'>
                        <h3 className=' fw-bolder mb-1 text-black'>Always Stay in <span className='text-orange'> ‘Earning Mode’</span></h3>
                        <h6 className='fs-5 text-secondary '>Your affiliate links are yours to share - on your website, social media,
                            visiting cards... anywhere you want. Link it and leave it!</h6>
                    </div>

                </Col>
                <Col md="5" className='section7-bg-icon ' >
                    <img src={bgimg} alt='...' />
                </Col>
            </Row>
            {/* <Row className='justify-content-center  mb-5'>

                <Col sm="11" >

                </Col>
            </Row> */}
        </div>
    )
}
