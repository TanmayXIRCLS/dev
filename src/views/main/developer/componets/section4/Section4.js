import React from 'react'
import { Col, Row } from 'reactstrap'
import s1 from "@src/assets/images/s1.png"
import s2 from "@src/assets/images/s2.png"
import Button from 'react-bootstrap/Button'

export const Section4 = () => {
    return (
        <>
            <Row className=" justify-content-center " style={{ marginTop: "170px" }}>
                <Col lg="10" xs="10">
                    <Row style={{ background: "#dedede", borderRadius: "1.5rem", boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px" }}>
                        <div className='d-flex justify-content-end' style={{ height: "70vh" }}>
                            <Col className=' flex-wrap d-flex align-items-center' md={5} sm={12}>
                                <div className='ms-5'>
                                    <div className='section4-heading'>
                                        <h1 className=' display-3' style={{ fontWeight: "700" }}>Stop building from scratch !</h1>
                                    </div>
                                    <div className='section4-info'>
                                        <p className=' fs-4 mt-1 ' style={{ lineHeight: "1.2" }}>Our developer-friendly APIs are
                                            easy to understand, implement & iterate.
                                            Build on top of core features such as forms,
                                            shopping cart, user profile, wishlist & more</p>
                                    </div>
                                    <div className='section4-button mt-5'>
                                        <Button className=' btn-lg fs-3 px-3 py-1 ' variant="outline-dark">Get Started</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col md={7} sm={12} className='text-center' style={{ marginTop: "9vh" }}>
                                <div className=' flex-wrap section4-img position-relative '>
                                    <img src={s1} width={400} />
                                    <img src={s2} width={400} style={{ position: "absolute", zIndex: "1", top: "100px", left: "370px" }} />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
