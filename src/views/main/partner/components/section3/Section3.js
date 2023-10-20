import React from 'react'
import { Card, Col, Row } from 'reactstrap'



export default function Section3() {
 
    return (
        <div className='section4 mt170'>

            <div className='w-75 m-auto text-center mt-1'>
                <h2
                    className='display-3 text-center main-heading fw-bolder'>
                    Your network, our Ideal Audience
                </h2>

                <Row className='match-height m-auto py-2 d-flex justify-content-center' >
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1  '>
                            <h3 className='fs-4 text-center text-black m-0 '>Small business owners</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 text-center text-black m-0 '>Reputed brands</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 text-center text-black m-0 '>Publications</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 text-center text-black m-0 '>Ad & Media Agencies</h3>
                        </Card>
                    </Col>
                    <Col md="4" sm="6" >
                        <Card className='border-dark  shadow-none rounded-pill py-1 m-0 mt-1  '>
                            <h3 className='fs-4 text-center  text-black m-0 '>Infrastructure & Utilities Companies</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 text-center text-black m-0 '>Financial Services</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
