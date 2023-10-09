import React from 'react'
import { Col, Row } from 'reactstrap'
import { MdDeveloperMode } from 'react-icons/md'
import { AiTwotoneShop, AiOutlineSolution } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { SiGooglemarketingplatform } from 'react-icons/si'

export default function Section3() {
    const color = '#9BA4B5'
    const size = 25
    return (
        <div className="section3 d-flex justify-content-center align-items-center mt100" >
            <Row className='text-center match-height w-75'>
                <Col lg="4" md="6" className=' d-flex justify-content-center align-items-center'>
                    <div >

                        <h4 className='display-5 fw-bolder text-black h1Heading' >Who can become a XIRCLS partner ?</h4>
                    </div>
                </Col>
                <Col lg="4" md="6" className=''>
                    <div className='mt-1 p-2'>
                        <div >
                            <MdDeveloperMode color={color} size={size} />
                        </div>
                        <div className='mt-2'>
                            <h3 className=' sub-heading text-black'>Web Developers</h3>
                            <p className='fs-5 fw-bold text-secondary'>who can offer XIRCLS integrations as value additions in their tech stack.</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className=''>
                    <div className='mt-1 p-2'>
                        <div>
                            <SiGooglemarketingplatform color={color} size={size} />
                        </div>
                        <div className='mt-2'>
                            <h3 className=' sub-heading text-black'>Marketing Agencies</h3>
                            <p className='fs-5 fw-bold text-secondary'>who want to recommend XIRCLS solutions to their clients.</p>
                        </div>
                    </div>
                </Col>

                <Col lg="4" md="6" className=''>
                    <div className='mt-1 p-2'>
                        <div >
                            <AiTwotoneShop color={color} size={size} />
                        </div>
                        <div className='mt-2'>
                            <h3 className=' sub-heading text-black'>Startup Communities</h3>
                            <p className='fs-5 fw-bold text-secondary'>Such as incubators & accelerators who wish to offer startups a sustainable way to kickstart revenue generations.</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className=''>
                    <div className='mt-1 p-2'>
                        <div>
                            <FaRegNewspaper color={color} size={size} />
                        </div>
                        <div className='mt-2'>
                            <h3 className=' sub-heading text-black'>Publishers & Influencer </h3>
                            <p className='fs-5 fw-bold text-secondary'>Interested in earning commission by referring their audience.</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" className=''>
                    <div className='mt-1 p-2'>
                        <div>
                            <AiOutlineSolution color={color} size={size} />
                        </div>
                        <div className='mt-2'>
                            <h3 className=' sub-heading text-black'>Other Solution Providers</h3>
                            <p className='fs-5 fw-bold text-secondary'>Such as resellers, consultancies who offer consulting & implementation services</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

