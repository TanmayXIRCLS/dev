import React from 'react'
import cryptoImg from "@src/assets/images/crpto-decentralised.svg"
import { Col, Row } from 'react-bootstrap';
import peer from './img/peer.png'
import { FiShare2 } from 'react-icons/fi'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsDatabaseSlash } from 'react-icons/bs'

const Section3 = () => {
    const size = 30;
    const color = '#9BA4B5'
    return (
        <Row className=' mt-200 justify-content-center align-items-center '  >
             <Col xs="10" md="10" lg="8">
                <Row className=' text-start text-sm-start ' >
                    <Col md="7" >
                        <h4 className=' fw-bolder mb-2 text-secondary'>TOGETHER WE WIN</h4>
                        <h1 className=' display-3 fw-bolder main-heading '>Join a Global Network of Like-minded Companies</h1>
                        <h4 className='  text-secondary lh-29 text-start' >Operating online and offline, across diverse categories and industries, other businesses help you sustainably reach your marketing goals. </h4>
                    </Col>


                    <Col md="5" className=' mt-5' >
                        <Row className='mt-2 gap-3'>
                            <Col sm="12" className='d-flex flex-row  align-items-center'>
                                <div className=' rounded-circle me-1 main-heading' style={{ backgroundColor: "#F0F0F0", padding: "20px" }}>
                                    <FiShare2 size={size} color={color} />
                                </div>
                                <div>
                                    <h2 className=' fw-bold text-black m-0'>DECENTRALIZED</h2>
                                    <h4 className=' text-secondary lh-29 m-0'>Global network of companies with no central authority</h4>
                                </div>
                            </Col>
                            <Col sm="12" className='d-flex flex-row  align-items-center'>
                                <div className=' rounded-circle me-1' style={{ backgroundColor: "#F0F0F0", padding: "20px" }}>
                                    {/* <img src={peer} alt="crpto-image" /> */}
                                    <GiEarthAfricaEurope size={size} color={color} />
                                </div>
                                <div>
                                    <h2 className=' fw-bold text-black m-0'>PEER-TO-PEER VERIFIED</h2>
                                    <h4 className=' text-secondary lh-29 m-0'>Real-time customer verification by companies.</h4>
                                </div>
                            </Col>
                            <Col sm="12" className='d-flex flex-row  align-items-center'>
                                <div className=' rounded-circle me-1' style={{ backgroundColor: "#F0F0F0", padding: "20px" }}>
                                    <BsDatabaseSlash size={size} color={color} />

                                </div>
                                <div>
                                    <h2 className=' fw-bold text-black m-0'>NO DATA SHARING</h2>
                                    <h4 className=' text-secondary lh-29 m-0'>Localized 100% secure data protocols</h4>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Section3