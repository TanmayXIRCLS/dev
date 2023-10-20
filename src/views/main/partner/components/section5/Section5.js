import React from 'react'
import {  Col, Row } from 'reactstrap'
export default function Section5() {
    return (
        <div className='section5 d-flex justify-content-center align-items-center flex-wrap mt170 m-auto 'style={{width:"85%"}} >
         

            <Row className=' justify-content-center'>

                <Col md="7"  className='  d-flex justify-content-center flex-column align-items-center '>
                    <div className=' text-center text-sm-start '>
                        <h3 className='display-3  main-heading fw-bolder'>Always Stay in  ‘Earning Mode’</h3>
                        <h6 className='fs-3 text-secondary lh-29  '>Your affiliate links are yours to share - on your website, social media,
                            visiting cards... anywhere you want. Link it and leave it!</h6>
                    </div>

                </Col>
                <Col md="5" className=' ' >
                    {/* <img src={bgimg} alt='...' /> */}
                </Col>
            </Row>
            
        </div>
    )
}
