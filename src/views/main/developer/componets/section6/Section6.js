import React from 'react'
import { Col, Row } from 'reactstrap'
// import XIRCLSLogo from '@src/assets/images/XIRCLS_logo.png'
import Button from 'react-bootstrap/Button'

export const Section6 = () => {
    return (
        <Row className=" justify-content-center " style={{ marginTop: "170px", background: "#000" }}>
            <Col lg="10" xs="10">
                <Row>
                    <Col md={6} sm={12} className="mt-5 mb-5" style={{ paddingTop: "5vh", paddingBottom: "7vh" }}>
                        <div className=" mt-4 mb-4">
                            <div className='section6-heading'>
                                <h1 className='text-white display-3'>Submit your app</h1>
                            </div>
                            <div className='section6-info mt-2'>
                                <p className='text-white fs-4'>Expand your app’s reach. Add it to our marketplace
                                    for the XIRCLS brand community to discover.</p>
                            </div>
                            <div className='section6-buttons mt-5 d-sm-flex gap-2'>
                                <Button className='btn-lg fs-3 px-3 py-1' variant="primary">Submit an App</Button>
                                <Button className='btn-lg fs-3 px-3 py-1' variant="outline-light">Explore Marketplace</Button>
                            </div>
                            <div className='section6-link mt-4'>
                                <p className='text-white fs-4 fw-lighter'><span style={{ textDecoration: "underline" }}>Sign up </span> for early access to new Developer products.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
