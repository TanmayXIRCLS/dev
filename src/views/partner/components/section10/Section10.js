import React from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import world from './img/world.png'
import earn from './img/earn.png'
export default function Section10() {
    const imgSize=50
    return (
        <div className='section10 d-flex justify-content-center  align-items-center flex-column mt80' >
            <div className='w-75'>
                <h2 className='text-center mb-5 display-6 fw-bolder text-black'  >How it <span  className='text-orange'>Works!</span></h2>
                <Row className='match-height'>
                    <Col lg="4" >
                        <Card className='card '>
                            <span className='span'>Sign up</span>
                            <CardBody className='mt-2'>
                                <div className='fs-4 fw-bold text-start text-black' >
                                    While anyone can become a XIRCLS partner, to be a successful partner you
                                    must:
                                    <ul className='fs-5  text-secondary text-start mt-1'>
                                        <li>Understand the importance of end-to-end buyer journey optimization and believe
                                            in the power of XIRCLS to accomplish this.</li>
                                        <li>Have a client base/audience who need powerful yet simple martech solutions to
                                            scale their sales & establish a lasting brand name.</li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" >
                        <Card className='card'>
                            <span className='span'>Spread the word</span>
                            <CardBody className='mt-2 fs-5 text-center'>
                                <img src={world} alt="" width={imgSize} />
                                <h6 className='fs-5  text-secondary  mt-2 lh-lg' >
                                The moment you sign up, you instantly get access to your own dashboard. Start
                                sharing affiliate links with your network and track performance. Our team will also
                                be there for you with product demos, training manuals and other helpful
                                resources to get you going.</h6>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" >
                        <Card className='card'>
                            <span className='span'>Earn!</span>
                            <CardBody className='mt-2 fs-5 text-center'>
                                <img src={earn} alt="" width={imgSize} />
                                <h6 className=' fs-5  text-secondary mt-2 lh-lg' >
                                    You earn upto 30% commission for 24 months for every person who signs up and
                                    becomes a paying customer on XIRCLS through your affiliate links. The more
                                    you promote XIRCLS to your audience, the greater the opportunity to earn more
                                    commissions.</h6>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
