import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Avatar from '@components/avatar'
import { GiTrophyCup } from 'react-icons/gi'
import {BiCookie ,BiCheckShield, BiBlock, BiSupport} from 'react-icons/bi'
import {RiTeamLine} from 'react-icons/ri'
import {LuLayoutDashboard} from 'react-icons/lu'
import {BsPerson} from 'react-icons/bs'

export default function Section8() {
    const iconSize = 30
    const color="#6499E9"
    return (
        <div className='section8 d-flex flex-column justify-content-center align-items-center mt100 py-1' >
            {/* <div className='w-75 text-center mt-5'>

                <h1 className='fs-1 fw-bolder text-black ' style={{textShadow: "3px 2px 4px rgba(0, 0, 0, 0.15)"}}>Get the <span className='text-orange'>Affiliate Advantage</span></h1>
                <Row className='match-height mt-2'>
                    <Col lg="3" md="6" >
                        <Card className='box box1 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<GiTrophyCup size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black m-1 ms-1 text-center'>INDUSTRY-LEADING COMMISSION</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Earn up to $10 USD per free trial. plus up to $200 USD per paid subscribe</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box2 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<BiCookie size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>EXTENDED COOKIE LIFE</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Get awarded for any visitor who clicks your affiliate link and begins a trial within 120 days</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box3 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<RiTeamLine size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>DEDICATED AFFILIATE TEAM</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Reach out to our partner support team any time for assistance.or advice</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box4 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<BiCheckShield size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>POACHING PROTECTION</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Get protection from poaching by adware, coupon & trademark bidding affiliates</p>
                        </Card>
                    </Col>
                </Row>
            </div> */}

            {/* part 2 --------------------------------------------------------------------------- */}
            <div className='w-75 text-center'>

                <h1 className='fs-1 fw-bolder mt-3 text-black' style={{textShadow: "3px 2px 4px rgba(0, 0, 0, 0.15)"}}>Get the <span className='text-orange'>XIRCLS Partner Advantage</span></h1>
                <Row className='match-height mt-2'>
                    <Col lg="3" md="6" >
                        <Card className='box box5 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<BiBlock size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black m-1 ms-1 text-center'>No Sign-up Costs</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Earn additional revenue with zero investment or hidden costs!</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box6 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<LuLayoutDashboard size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>Track Performance</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Monitor your clicks, sales & earnings to accurately track your growth via XIRCLS</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box7 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<BsPerson size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>First Access</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Get first dibs on new product releases and early bird pricing</p>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" >
                        <Card className='box box8 shadow-none border d-flex flex-column p-1 justify-content-start align-items-center '>
                            <Avatar icon={<BiSupport size={iconSize} color={color}/>} color="light-info" className='mb-1' style={{ padding: "3px" }} />

                            <h3 className='fs-5 fw-bolder text-start text-black mt-1 ms-1 text-center'>Comprehensive Support</h3>
                            <p className='font-small-3 text-secondary fw-bold '>Receive one-on-one tutorials and a dedicated manager to maximize your conversions and help you build a steady stream of income</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
