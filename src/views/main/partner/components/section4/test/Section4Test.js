import React from 'react'
import { Card, Col, Row } from 'reactstrap'



export default function Section4() {
    const iconSize = 24
    return (
        <div className='section4 mt100'>

            <div className='w-75 m-auto text-center mt-1'>
                <h2
                    className='display-3 text-center text-black fw-bolder h1Heading'
                    style={{ margin: "0px 0px 12px", lineHeight: "80%" }}>
                    Your network, our Ideal Audience
                </h2>

                <Row className='match-height m-auto py-2 d-flex justify-content-center' >
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1  '>
                            <h3 className='fs-4 fw-bold text-center text-black m-0 '>Small business owners</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 fw-bold text-center text-black m-0 '>Reputed brands</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 fw-bold text-center text-black m-0 '>Publications</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 fw-bold text-center text-black m-0 '>Ad & Media Agencies</h3>
                        </Card>
                    </Col>
                    <Col md="4" sm="6" >
                        <Card className='border-dark  shadow-none rounded-pill py-1 m-0 mt-1  '>
                            <h3 className='fs-4 fw-bold text-center  text-black m-0 '>Infrastructure & Utilities Companies</h3>
                        </Card>
                    </Col>
                    <Col md="3" sm="6" >
                        <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-1 '>
                            <h3 className='fs-4 fw-bold text-center text-black m-0 '>Financial Services</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
