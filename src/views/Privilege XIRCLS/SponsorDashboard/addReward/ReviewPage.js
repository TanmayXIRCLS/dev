import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card, CardBody } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiUpload, BiLeftArrowAlt } from 'react-icons/bi'

export default function ReviewPage() {
    const rupee = "₹ "


    return (
        <>
            <Row className="match-height">
                <Col lg="3" className='py-2'>
                    <RewardNav />

                </Col>

                <Col >
                    <Card>
                        <CardBody className=''>
                            <div className='d-flex align-items-center justify-content-between p-2 '>
                                <div>
                                    <h3 className='fs-3 fw-bolder text-black'>Review</h3>
                                    <h6 className="font-small-4 text-secondary m-0 p-0">your reward rules</h6>
                                </div>
                            </div>

                            <Row >
                                <Col md='6' className='border-end ' >
                                    <div className='text-center border m-auto mt-2' style={{ width: "90%", height: "200px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px 3px rgba(0,0,0,0.2" }}>
                                        <img className='' src='https://images.unsplash.com/photo-1572238916064-69673fdc419f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="img" style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div className='mt-3 ms-1' style={{ marginLeft: "10px" }}>
                                        <h3 className='fs-4 fw-bolder text-dark mt-1 mb-1 '>Budget Review</h3>
                                        <div className='fw-bold fs-6 d-flex flex-column ' style={{ gap: "6px" }} >

                                            <Row><Col md="6" xs="6" >Total Sponsorship Amount </Col> <Col md="6" xs="6" className='text-success'>: {rupee} 65,201 </Col></Row>
                                            <Row ><Col md="6" xs="6">Total Customers Rewarded  </Col> <Col md="6" xs="6" >: 652</Col></Row>
                                            <Row ><Col md="6" xs="6">Sponsorship Start Date  </Col> <Col md="6" xs="6" >: 08-12-2022</Col></Row>
                                            <Row ><Col md="6" xs="6">Sponsorship End Date  </Col> <Col md="6" xs="6" >: 28-12-2023</Col></Row>
                                        </div>

                                    </div>


                                </Col>

                                <Col md='6' >
                                    <div className='text-center border m-auto mt-2' style={{ width: "90%", height: "200px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px 3px rgba(0,0,0,0.2" }}>
                                        <img className='' src='https://zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-768x280.png' style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div className='mt-3 ms-1' style={{ marginLeft: "10px" }}>
                                        <h3 className='fs-4 fw-bolder text-dark mt-1 mb-1 '>Reward Details</h3>
                                        <div className='fw-bold fs-6 d-flex flex-column ' style={{ gap: "6px" }} >

                                            <Row><Col md="6" xs="6">Product Name </Col> <Col md="6" xs="6" >: Gift-Card (500)</Col></Row>
                                            <Row ><Col md="6" xs="6">Product Amount </Col> <Col md="6" xs="6" >: {rupee} 500.00</Col></Row>
                                            <Row ><Col md="6" xs="6">Discount  </Col> <Col md="6" xs="6" >: 10%</Col></Row>
                                            <Row ><Col md="6" xs="6">Discounted Amount  </Col> <Col md="6" xs="6" className='text-success'>: {rupee}450.00</Col></Row>
                                        </div>

                                    </div>


                                </Col>

                            </Row>
                            <div className='mt-3 d-flex justify-content-between'>

                                <Link to='/merchant/sponsor/add-reward/customerGroup' className='btn btn-primary rounded-1 d-flex'> <BiLeftArrowAlt /> Previous</Link>
                                <Link to='/merchant/sponsor/add-reward/review' className='btn btn-primary rounded-1 d-flex'>Save <BiUpload style={{ marginLeft: "5px" }} /></Link>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
