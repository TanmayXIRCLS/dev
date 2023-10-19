import React from 'react'
import { Col, Row } from 'reactstrap'
import popLogo from "@src/assets/images/PopupLogo.png"
import "./section7.css"

const Section7 = () => {
    return (
        <Row className=' justify-content-center mt170'>
            <Col md="10">
                <h1 className=' display-3 text-center fw-bold main-heading'>We've Given Pop-Ups a Makeover</h1>

                <Row className=' align-items-center mt-2'>
                    <Col md="5" className=' d-flex flex-column justify-content-center'>
                        <p className='popFeature popFeature1  text-end fs-3 mb-5'>Multiple Offers inOne Pop-Up</p>
                        <p className='popFeature popFeature1 text-end fs-3'>OTP Verification Build High Quality Email List</p>
                        <p className='popFeature popFeature1 text-end fs-3 mt-5'>Customer Page Redirection</p>
                    </Col>
                    <Col className='' md="2">
                        <img className='popLogo' src={popLogo} alt="popup logo" width={150} />
                    </Col>
                    <Col md="5" className='popCol d-flex flex-column justify-content-center'>
                        <p className='popFeature popFeature2 fs-3 mb-5'>Multiple Offers inOne Pop-Up</p>
                        <p className='popFeature popFeature2 fs-3'>OTP Verification Build High Quality Email List</p>
                        <p className='popFeature popFeature2 fs-3 mt-5'>Customer Page Redirection</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Section7