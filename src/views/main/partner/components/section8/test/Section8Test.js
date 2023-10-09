import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Avatar from '@components/avatar'


export default function Section8Test() {
    const img = "https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg"
    const iconSize = 30
    const color = "#6499E9"
    return (
        <div className='section8Test d-flex flex-column justify-content-center align-items-center mt100 p-5' >

            <div className=' text-left' style={{ width: "85%" }}>
                <h1 className='display-1 fw-bold mt-3 text-white text-start h1Heading' >Get the <br />XIRCLS Partner <br /> Advantage.</h1>

                <Row className='match-height mt-2 '>
                    <Col lg="6" md="6" className=''>
                        <Card className='box  shadow-none border d-flex flex-column p-1 justify-content-start align-items-start'>
                            <h3 className=' fw-light fw-lig w-75' >Performing at the highest degree possible, these are the common traits reps accepted to XIRCLS have in common.</h3>
                            <button className='btn bg-white text-black fs-4 fw-bold border rounded-1 mt-3 px-3 py-1'> Apply now</button>
                            <div className='ms-auto arrow' >
                                <img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa61452b33bdbd7c9c_Arrow_01.svg" alt="" srcset="" />
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" >
                        <Card className='box box2 shadow-none border d-flex flex-column p-1 justify-content-end align-items-center mt-2'>
                            <ul>
                                <li className=' d-flex align-items-center'><img src={img} alt="" srcset="" width={30} /><h3 className=' text-white fw-lig m-0'>No Sign-up Costs</h3></li>
                                <li className=' d-flex align-items-center'><img src={img} alt="" srcset="" width={30} /><h3 className=' text-white fw-lig m-0'>Track Performance</h3></li>
                                <li className=' d-flex align-items-center'><img src={img} alt="" srcset="" width={30} /><h3 className=' text-white fw-lig m-0'>First Access</h3></li>
                                <li className=' d-flex align-items-center'><img src={img} alt="" srcset="" width={30} /><h3 className=' text-white fw-lig m-0'>Comprehensive Support</h3></li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
