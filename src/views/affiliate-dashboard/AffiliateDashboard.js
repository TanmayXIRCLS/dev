import React from 'react'
import { Card, CardBody, Col, Row, Progress } from 'reactstrap';
import { AiOutlineMenu } from "react-icons/ai"
import { BiDollar } from "react-icons/bi"

import BarChart from "./BarChart"
import "./affiliateDashboard.css"

const AffiliateDashboard = () => {
    const salesReport = [
        {
            title: "Sales",
            value: "0",
            textColor: "rgba(115, 103, 240,255)",
            bgColor: "rgba(115, 103, 240,0.2)"
        },
        {
            title: "Sales Amount",
            value: "0",
            textColor: "rgba(0,208,231,255)",
            bgColor: "rgba(0,208,231,0.2)"
        },
        {
            title: "Your Commission",
            value: "0",
            textColor: "rgba(239,134,135,255)",
            bgColor: "rgba(239,134,135,0.2)"
        }
    ]

    const salesTracker = [
        {
            title: "Qualified Leads",
            value: "0",
            textColor: "rgba(115, 103, 240,255)",
            bgColor: "rgba(115, 103, 240,0.2)"
        },
        {
            title: "Demons",
            value: "0",
            textColor: "rgba(0,208,231,255)",
            bgColor: "rgba(0,208,231,0.2)"
        },
        {
            title: "Dormant leads",
            value: "0",
            textColor: "rgba(239,134,135,255)",
            bgColor: "rgba(239,134,135,0.2)"
        }
    ]
    return (
        <>
            <Row>
                <Col md={5}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>
                            <h3>Sales Reports</h3>
                            <p className=' fs-5'>Here's your performance!</p>

                            <div className=' d-flex justify-content-end'>
                                <AiOutlineMenu size={15} />
                            </div>

                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div>
                                    <h1 className=' text-primary'>218</h1>
                                    <p className=' fs-5'>Total Clicks</p>
                                </div>
                                <BarChart />
                            </div>

                            <Row className=' mt-1' style={{ padding: "8px" }}>
                                {
                                    salesReport.map(ele => (
                                        <Col md={4}>
                                            <div className=' d-flex align-items-center'>
                                                <div className=' rounded mb-1 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", color: `${ele.textColor}`, background: `${ele.bgColor}` }}>
                                                    <BiDollar size={20} />
                                                </div>
                                                <h5 style={{ marginLeft: "5px" }}>{ele.title}</h5>
                                            </div>
                                            <h5 className='mb-1'>$ {ele.value}</h5>
                                            <div style={{ width: "100%" }}>
                                                <Progress
                                                    color="success"
                                                    value={50}
                                                    style={{ height: "10px", marginTop: "4px", marginBottom: "1.2rem" }}
                                                />
                                            </div>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>

                <Col md={5}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>
                            <h3>Sales Tracker</h3>
                            <p className=' fs-5'>Here's your Sales Tracker</p>

                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div>
                                    <h1 className=' text-primary'>0</h1>
                                    <p className=' fs-5'>Leads</p>
                                    {
                                        salesReport.map(ele => (
                                            <div >
                                                <div className=' d-flex align-items-start mb-1'>
                                                    <div className=' rounded mb-1 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", color: `${ele.textColor}`, background: `${ele.bgColor}` }}>
                                                        <BiDollar size={20} />
                                                    </div>
                                                    <div style={{ marginLeft: "5px" }}>
                                                        <h5 className=' m-0'>{ele.title}</h5>
                                                        <p className=' m-0'>$ {ele.value}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>

                <Col md={5}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AffiliateDashboard