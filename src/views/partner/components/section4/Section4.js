import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { AiOutlineShoppingCart, AiOutlineShop, AiOutlineGlobal } from 'react-icons/ai'
import { GiTrophyCup } from 'react-icons/gi'
import { SiBrandfolder } from 'react-icons/si'
import { BsGlobeAmericas, BsCameraReels } from 'react-icons/bs'
import { BiBuildings } from 'react-icons/bi'
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia'

import { Briefcase, User } from 'react-feather'
import Avatar from '@components/avatar'


export default function Section4() {
    const iconSize = 24
    return (
        <div className='section4 mt100'>

                <div className=' text-center mt-1'>
                    <div className=' display-6 fw-bolder text-black '>Your network, our <span className='text-orange'>Ideal Audience</span></div>
                    {/* <p className=4fs-6 fw-bolder text-dark'>We served a wide range of users</p> */}

                    <Row className='match-height w-75 m-auto py-2'>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center  '>
                                <Avatar icon={<AiOutlineShop size={iconSize} />} color="light-primary" style={{ padding: "3px" }} />
                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Small business owners</h3>
                            </Card>
                        </Col>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center '>
                                <Avatar icon={<SiBrandfolder size={iconSize} />} color="light-info" style={{ padding: "3px" }} />

                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Reputed brands</h3>
                            </Card>
                        </Col>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center '>
                                <Avatar icon={<AiOutlineGlobal size={iconSize} />} color="light-success" style={{ padding: "3px" }} />
                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Publications</h3>
                            </Card>
                        </Col>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center '>
                                <Avatar icon={<BsCameraReels size={iconSize} />} color="light-warning" style={{ padding: "3px" }} />
                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Ad & Media Agencies</h3>
                            </Card>
                        </Col>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center '>
                                <Avatar icon={<BiBuildings size={iconSize} />} color="light-danger" style={{ padding: "3px" }} />
                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Infrastructure & Utilities Companies</h3>
                            </Card>
                        </Col>
                        <Col md="4" sm="6" >
                            <Card className='border d-flex flex-row p-1 justify-content-center align-items-center '>
                                <Avatar icon={<LiaMoneyBillWaveAltSolid size={iconSize} />} color="light-warning" style={{ padding: "3px" }} />
                                <h3 className='fs-4 fw-bold text-start text-dark m-0 ms-1'>Financial Services</h3>
                            </Card>
                        </Col>
                    </Row>
                </div>
        </div>
    )
}
