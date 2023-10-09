import React from 'react'
import { Col, Row } from 'reactstrap'
import { PiHandshakeFill } from 'react-icons/pi'
import { BiCookie, BiLineChart } from 'react-icons/bi'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdWifiTethering } from 'react-icons/md'

export default function Section6() {
    const iconSize = 30
    const color = "#9BA4B5"
    return (
        <div className='section6 d-flex justify-content-center align-items-center flex-column mt190' >
            <div className=' text-center'>
                <h2 className='display-3 text-center text-black fw-bolder h1Heading'>
                    Why become a XIRCLS Partner?
                </h2>
                <Row className='text-start match-height w-75 m-auto mt-2'>
                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  '>
                            <div >
                                <PiHandshakeFill color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Instant Trust</h3>
                                <p className='fs-5 fw-bold text-secondary'>Boost your credibility with an industry-transforming martech company
                                    that consistently launches innovative marketing solutions.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  '>
                            <div >
                                <BiLineChart color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Scale & Grow</h3>
                                <p className='fs-5 fw-bold text-secondary'>Expand your business by offering XIRCLS solutions to existing & new
                                    customers, thereby attracting new business opportunities.</p>
                            </div>
                        </div>
                    </Col>


                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  '>
                            <div>
                                <GiTakeMyMoney color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Industry-Leading Commissions</h3>
                                <p className='fs-5 fw-bold text-secondary'>Earn upto 20% commission per sale on first & recurring sales.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  '>
                            <div>
                                <BiCookie color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Extended Cookie Life</h3>
                                <p className='fs-5 fw-bold text-secondary'>Get paid for any visitor who makes a purchase within 120 days of
                                    clicking on your affiliate link.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  h-shadow '>
                            <div>
                                <FaMoneyBillTransfer color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Earn in Multiple Currencies</h3>
                                <p className='fs-5 fw-bold text-secondary'>Earn sales commissions in the currencies that your clients purchase
                                    our plans in. Set up a global revenue stream.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" className=''>
                        <div className='m-1 mt-3  '>
                            <div>
                                <MdWifiTethering color={color} size={iconSize} />
                            </div>
                            <div className='mt-2'>
                                <h3 className=' sub-heading text-black'>Remote-First Culture</h3>
                                <p className='fs-5 fw-bold text-secondary'>Our team is accustomed to working with partners across the globe.
                                    Stay connected to us no matter where you are.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
