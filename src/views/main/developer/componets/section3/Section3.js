import React from 'react'
import { Col, Row } from 'reactstrap'
import { FiSettings } from "react-icons/fi"
import { MdPrivacyTip } from "react-icons/md"
import { BsFileEarmarkBarGraph } from "react-icons/bs"
import { BsEye } from "react-icons/bs"
import { MdDeveloperMode } from "react-icons/md"

export const Section3 = () => {
    return (
        <Row className=" justify-content-center " style={{ marginTop: "170px" }}>
            <Col lg="10" xs="10">
                <Row>
                    <Col className=''>
                        <div className='' >
                            <div className='section3-heading'>
                                <h1 className=' display-5 ' style={{ fontWeight: "600" }}>Our tech, your growth</h1>
                            </div>
                            <div className='section3-info'>
                                <p className=' fs-4 mt-1'>Monetize the most cutting-edge APIs in marketing</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='text-center mt-5'>
                    <Col md={6} sm={12}>
                        <div className='d-flex justify-content-start'>
                            <div className='img'>
                                <FiSettings style={{ marginTop: "1.2vh" }} size={51} />
                            </div>
                            <div className='Easy-to-integrate ms-2'>
                                <div className='heading'>
                                    <h3 className='fs-2 fw-bolder' style={{ textAlign: "left" }}>Easy to integrate</h3>
                                </div>
                                <div className='info'>
                                    <p className=' fs-4' style={{ textAlign: "left" }}>Deeply integrate our APIs into your applications with ease.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className='d-flex justify-content-center'>
                            <div className='img'>
                                <BsFileEarmarkBarGraph style={{ marginTop: "1.2vh" }} size={51} />
                            </div>
                            <div className='Data-privacy-first ms-2'>
                                <div className='heading'>
                                    <h3 className='fs-2 fw-bolder' style={{ textAlign: "left" }}>Data privacy first</h3>
                                </div>
                                <div className='info'>
                                    <p className=' fs-4' style={{ textAlign: "left" }}>Our in-built security protocols future-proof you against data theft & ad fraud.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='text-center mt-md-5'>
                    <Col md={6} sm={12}>
                        <div className='d-flex justify-content-start'>
                            <div className='img'>
                                <BsEye style={{ marginTop: "1.2vh" }} size={51} />
                            </div>
                            <div className='Easy-to-integrate ms-2'>
                                <div className='heading'>
                                    <h3 className='fs-2 fw-bolder' style={{ textAlign: "left" }}>Easy to integrate</h3>
                                </div>
                                <div className='info'>
                                    <p className=' fs-4' style={{ textAlign: "left" }}>Deeply integrate our APIs into your applications with ease.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className='d-flex justify-content-center'>
                            <div className='img'>
                                <MdDeveloperMode style={{ marginTop: "1.2vh" }} size={51} />
                            </div>
                            <div className='Data-privacy-first ms-2'>
                                <div className='heading'>
                                    <h3 className='fs-2 fw-bolder' style={{ textAlign: "left" }}>Data privacy first</h3>
                                </div>
                                <div className='info'>
                                    <p className=' fs-4' style={{ textAlign: "left" }}>Our in-built security protocols future-proof you against data theft & ad fraud.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
