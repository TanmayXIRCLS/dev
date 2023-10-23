import React from 'react';
import { Col, Row } from 'reactstrap';
import s1 from "@src/assets/images/s1.png";
import Button from 'react-bootstrap/Button';

export const Section4 = () => {
    return (
        <>
            <Row className="justify-content-center" style={{ marginTop: "170px" }}>
                <Col className='' lg="10" xs="12">
                    <Row className="section4-container py-5" style={{ background: "#dedede", borderRadius: "1.5rem", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)" }}>
                        <Col lg={6} sm={12} className='d-flex align-items-center p-5 '>
                            <div>
                                <div className='section4-heading'>
                                    <h1 className='display-4 display-lg-3' style={{ fontWeight: "700" }}>Stop building from scratch !</h1>
                                </div>
                                <div className='section4-info pt-3 pt-md-1'>
                                    <p className='fs-4 mt-2' style={{ lineHeight: "1.4" }}>
                                        Our developer-friendly APIs are easy to understand, implement & iterate.
                                        Build on top of core features such as forms, shopping cart, user profile, wishlist & more.
                                    </p>
                                </div>
                                <div className='section4-button mt-4'>
                                    <Button className='my-1 btn-lg fs-3 px-3 py-1 ' variant="outline-dark">Get Started</Button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} sm={12} className='text-center p-5 '>
                            <div className='section4-img'>
                                <img src={s1} className="img-fluid" width={450} alt="s1" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
