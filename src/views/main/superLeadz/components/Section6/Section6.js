import React from 'react'
import { Row, Col } from 'reactstrap'
import img from "@src/assets/images/nav.png"
import "./section6.css"

const Section6 = () => {
    return (
        <Row className=' justify-content-center mt170 main-bg-dark' style={{ minHeight: "550px" }}>
            <Col md="10">
                <div className=''>
                    <h1 className=' display-3 text-center fw-bold mt-4 text-white'>Accurately Track Every Visitor</h1>

                    <Row>
                        <Col><p className='pTag fs-2 fw-bold text-white mt-2' style={{
                            maxWidth: "450px", lineHeight: "1.5",
                        }}>Deliver Unique Experiences Based on Who's Arrived at Your Store - From First - Time Shoppers to Registered Users!</p></Col>
                        <Col className=''>
                            <img src={img} alt="nav" width={600} />
                        </Col>
                    </Row>
                </div>
            </Col>

        </Row>
    )
}

export default Section6