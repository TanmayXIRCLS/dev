import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';

const Section5 = () => {
    const warriorCard = [
        {
            title: "Capture Zero-Party Lead Data.",
        },
        {
            title: "Curate Personalized Incentives.",
        },
        {
            title: "Activate the Impulse to Buy.",
        }
    ]
    return (
        <Row className=' justify-content-center mt170'>
            <Col md="10">
                <h1 className=' display-3 text-center fw-bold main-heading'>BECOME A DROP-OFF WARRIOR</h1>
                <h3 className=' fs-1 text-center fw-bold mt-2 main-heading'>SLASH BOUNCES. BOOST WEBSITE ENGAGEMENT.</h3>

                <Row className=' mt-3'>
                    {
                        warriorCard.map((ele, index) => (
                            <Col key={index} lg="4">
                                <Card className='' style={{ minHeight: "400px", backgroundColor: "rgba(0,0,0,0.8    )", boxShadow: "0px 0px 10px -1px rgba(0,0,0,0.5)" }}>
                                    <CardBody>
                                        <h3 className=' w-50 mx-auto mt-2 fs-2 text-center fw-bold text-white'>{ele.title}</h3>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default Section5