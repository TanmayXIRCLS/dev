import React from 'react';
import { Col, Row } from 'reactstrap';
import "./Section5.css";
import loginform from "@src/assets/images/loginform.png";

export const Section5 = () => {
    return (
        <>
            <Row className="justify-content-center" style={{ marginTop: "170px" }}>
                <Col xl="10" lg="12" md="12" xs="12" className='d-flex'>
                    <Col xl={6} lg={6} md={6} sm={12} className='d-flex justify-content-center'>
                        <div className="wrapper">
                            <ol className="c-stepper">
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 1</strong>
                                        <h3 className="c-stepper__title fs-3">Sign up</h3>
                                        <p className="c-stepper__desc fs-4" style={{ lineHeight: "1.4" }}>
                                            Register and agree to our legal terms & conditions
                                        </p>
                                    </div>
                                </li>
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 2</strong>
                                        <h3 className="c-stepper__title fs-3">Describe your use case and select APIs</h3>
                                        <p className="c-stepper__desc fs-4">Once submitted, we will review your request and reach out within 48 hours</p>
                                    </div>
                                </li>
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 3</strong>
                                        <h3 className="c-stepper__title fs-3">Start developing!</h3>
                                        <p className="c-stepper__desc fs-4">Once your request is approved, access our API documentation to begin your work</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </Col>

                    {/* Hide the login form image on medium and smaller devices */}
                    <Col xl={6} lg={6} className='text-center p-3'>
                        <div className='section4-img'>
                            <img src={loginform} className="img-fluid" alt="Login Form" />
                        </div>
                    </Col>
                </Col>
            </Row>
        </>
    );
};
