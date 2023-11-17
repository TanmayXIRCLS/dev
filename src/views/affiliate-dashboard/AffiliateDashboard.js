import { useState } from 'react'
import { Card, CardBody, Col, Row, Progress } from 'reactstrap'
import {
    AiOutlineMenu,
    AiFillFacebook,
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineTwitter,
    AiFillYoutube,
    AiOutlineMail,
} from "react-icons/ai"
import { BiCopy } from "react-icons/bi"
import { BiDollar } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"

import TableData from './TableData'
import GaugeChart from './GaugeChart';
import BarChart from "./BarChart"
import "./affiliateDashboard.scss"

const AffiliateDashboard = () => {
    const [affiliateLink, setAffiliateLink] = useState("https://www.xircls.com/signup/referral/147576")
    const [cardPop, setCardPop] = useState(false)
    const [copySuccess, setCopySuccess] = useState('')

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

    const copyToClipboard = () => {
        navigator.clipboard.writeText(affiliateLink)
            .then(() => setCopySuccess('Copied to clipboard!'))
            .catch(() => setCopySuccess('Copy failed. Please try again.'))
    }


    const iconColorSuccess = {
        backgroundColor: "#b2ffa96f",
        borderRadius: "25%",
        width: "35px",
        height: "35px",
    }

    const iconColorPrimary = {
        backgroundColor: "#b0d5ff7e",
        borderRadius: "25%",
        width: "35px",
        height: "35px"
    }

    const iconColorWarning = {
        backgroundColor: "#fae5a595",
        borderRadius: "25%",
        width: "35px",
        height: "35px"
    }

    const iconColorSecondary = {
        backgroundColor: "#b0b0b043",
        borderRadius: "25%",
        width: "35px",
        height: "35px"
    }

    const iconSuccess = (
        <div
            className="col-2 mx-auto ms-1 position-relative"
            style={iconColorSuccess}
        >
            <AiOutlineMail
                size={20}
                className="text-success position-absolute"
                style={{ top: "8px", left: "8px" }}
            />
        </div>
    )
    const iconPrimary = (
        <div
            className="col-2 mx-auto ms-1 position-relative"
            style={iconColorPrimary}
        >
            <AiOutlineMail
                size={20}
                className="text-primary position-absolute"
                style={{ top: "8px", left: "8px" }}
            />
        </div>
    )
    const iconWarning = (
        <div
            className="col-2 mx-auto ms-1 position-relative"
            style={iconColorWarning}
        >
            <AiOutlineMail
                size={20}
                className="text-warning position-absolute"
                style={{ top: "8px", left: "8px" }}
            />
        </div>
    )
    const iconSecondary = (
        <div
            className="col-2 mx-auto ms-1 position-relative"
            style={iconColorSecondary}
        >
            <AiOutlineMail
                size={20}
                className="text-secondary position-absolute"
                style={{ top: "8px", left: "8px" }}
            />
        </div>
    )

    const leadData = [
        {
            title: "Sign Up",
            icon: iconSuccess,
            value: "0",
        },
        {
            title: "Plan Purchased",
            icon: iconPrimary,
            value: "0",
        },
        {
            title: "Outlet Added",
            icon: iconWarning,
            value: "0",
        },
        {
            title: "Offers Designed",
            icon: iconSuccess,
            value: "0",
        },
        {
            title: "Campaign Created",
            icon: iconPrimary,
            value: "0",
        },
        {
            title: "Plugin Integration",
            icon: iconWarning,
            value: "0",
        },
        {
            title: "Campaign Live",
            icon: iconSecondary,
            value: "0",
        }
    ]

    return (
        <div className=' position-relative'>
            <Card className={` position-absolute z-3 ${cardPop ? "cardPopDown" : "cardPopUp"}`} style={{ width: "550px" }}>
                <CardBody>
                    <div className="d-flex justify-content-between flex-row-reverse align-items-center mb-2">
                        <RxCross2 size={20} onClick={() => setCardPop(false)} />
                    </div>

                    <div className=' d-flex flex-wrap justify-content-between align-items-center '>
                        <div >
                            <h5>Product specific :</h5>
                            <select className="form-select dropsdown-width ms-0" aria-label="Default select example" style={{ width: "200px" }}>
                                <option className='' value="Product 1">Product 1</option>
                                <option className='' value="Product 1">Product 2</option>
                                <option className='' value="Product 1">Product 3</option>
                            </select>
                        </div>
                        <div >
                            <h5>Page specific :</h5>
                            <select className="form-select dropsdown-width ms-0" aria-label="Default select example" style={{ width: "200px" }}>
                                <option value="Product 1">Page 1</option>
                                <option value="Product 1">Page 2</option>
                                <option value="Product 1">Page 3</option>
                            </select>
                        </div>
                    </div>

                    <div class="input-group mt-1 mb-3">
                        <input type="text" class="form-control" style={{ pointerEvents: "none" }} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={affiliateLink} onChange={e => setAffiliateLink(e.target.value)} />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" onClick={copyToClipboard}><BiCopy /></button>
                        </div>
                    </div>

                </CardBody>
            </Card>

            <Row className={`${cardPop ? "opacity-25" : "opacity-100"}`} >
                <Col md={5} className="d-flex flex-column">
                    <Card style={{ minHeight: "450px", flex: "1" }}>
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

                            <Row className='border mt-3' style={{ padding: "8px" }}>
                                {
                                    salesReport.map(ele => (
                                        <Col lg={4}>
                                            <div className=' d-flex align-items-center'>
                                                <div className=' rounded mb-1 d-flex justify-content-center align-items-center' style={{ width: "25px", height: "25px", color: `${ele.textColor}`, background: `${ele.bgColor}` }}>
                                                    <BiDollar size={15} />
                                                </div>
                                                <h6 style={{ marginLeft: "5px" }}>{ele.title}</h6>
                                            </div>
                                            <p className='mb-1'>$ {ele.value}</p>
                                            <div style={{ width: "100%" }}>
                                                <Progress
                                                    color="success"
                                                    value={50}
                                                    style={{ height: "8px", marginTop: "4px", marginBottom: "1.2rem", }}
                                                />
                                            </div>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7} className="d-flex flex-column">
                    <Card style={{ minHeight: "450px", flex: "1" }}>
                        <CardBody className="text-center">
                            <div>
                                <h3>Your Affiliate Link</h3>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="z-0 rounded position-relative "
                                    placeholder="https://www.xircls.com/signup/referral/147576"
                                    value={affiliateLink}
                                    id="affiliatelink"
                                    style={{
                                        width: "100%",
                                        appearance: "none",
                                        outline: "none",
                                        border: "dashed 1px #c7c8c9",
                                        height: "35px",
                                        padding: "5px 8px",
                                        pointerEvents: "none"
                                    }}
                                />
                                <button
                                    className="btn btn-success btn-sm z-1 position-absolute "
                                    style={{ top: "70px", right: "40px" }}
                                    onClick={copyToClipboard}
                                >
                                    Copy
                                </button>
                            </div>
                            <div className="mt-2">
                                <h6 className="text-success">
                                    Copy your link and share it anywhere
                                </h6>
                            </div>
                            <div className="mt-3">
                                <h6>Share on Social Media</h6>
                            </div>
                            <div
                                className="d-flex justify-content-between mx-auto mt-1"
                                style={{ width: "120px" }}
                            >
                                <AiOutlineInstagram size={16} />
                                <AiFillLinkedin size={16} />
                                <AiOutlineTwitter size={16} />
                                <AiFillFacebook size={16} />
                                <AiFillYoutube size={16} />
                            </div>
                            <div className="mt-3">
                                <h6>Create and share discount codes with friends</h6>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-primary" onClick={() => setCardPop(true)}>
                                    Generate Specific Link
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={5} className="d-flex flex-column">
                    <Card style={{ minHeight: "450px", flex: "1" }}>
                        <CardBody>
                            <h3>Sales Tracker</h3>
                            <p className=' fs-5'>Here's your Sales Tracker</p>

                            <div className=' mt-3 d-flex flex-wrap justify-content-between'>
                                <div>
                                    <h1 className=''>0</h1>
                                    <p className=' fs-5'>Leads</p>
                                    {
                                        salesTracker.map(ele => (
                                            <div >
                                                <div className=' d-flex flex-wrap align-items-start mb-1'>
                                                    <div className=' rounded mb-1 d-flex justify-content-center align-items-center' style={{ width: "25px", height: "25px", color: `${ele.textColor}`, background: `${ele.bgColor}` }}>
                                                        <BiDollar size={15} />
                                                    </div>
                                                    <div style={{ marginLeft: "5px" }}>
                                                        <h6 className=' m-0'>{ele.title}</h6>
                                                        <p className=' m-0'>{ele.value}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                                <GaugeChart value={75} />

                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7} className="d-flex flex-column">
                    <Card style={{ minHeight: "450px", flex: "1" }}>

                        <CardBody>
                            <h3>Activity Timeline</h3>
                            <div class="container">
                                <div class="timeline">
                                    <div class="timeline-container primary">
                                        <div class="timeline-icon">
                                        </div>

                                        <div class="timeline-body">

                                            <h4 class="timeline-title">Primary<p class="timeline-subtitle">1 Hours Ago</p></h4>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit.</p>

                                        </div>
                                    </div>
                                    <div class="timeline-container danger">
                                        <div class="timeline-icon">
                                        </div>

                                        <div class="timeline-body">

                                            <h4 class="timeline-title">Danger<p class="timeline-subtitle">2 Hours Ago</p></h4>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit.</p>

                                        </div>
                                    </div>
                                    <div class="timeline-container success">
                                        <div class="timeline-icon">
                                        </div>

                                        <div class="timeline-body">

                                            <h4 class="timeline-title">Success<p class="timeline-subtitle">6 Hours Ago</p></h4>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={5} className="d-flex flex-column">
                    <Card style={{ minHeight: "450px", flex: "1" }}>

                        <CardBody>
                            <div>
                                <h3>Leads by Stage</h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "grey",
                                        opacity: "0.5",
                                        marginBottom: "25px"
                                    }}
                                >
                                    281 total clicks
                                </p>
                            </div>
                            {leadData.map((lead, index) => (
                                <div className="row mt-1" key={index}>
                                    {lead.icon}
                                    <div className="col-6 text-start">
                                        <h6 style={{ paddingTop: "6px", letterSpacing: "0.5px" }}>
                                            {lead.title}
                                        </h6>
                                    </div>
                                    <div className="col text-end">
                                        <h6
                                            className="opacity-75"
                                            style={{ paddingTop: "6px", letterSpacing: "0.5px" }}
                                        >
                                            0
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card style={{ minHeight: "450px" }}>
                        <CardBody
                            className='position-relative '
                        >
                            <h3
                                className='text-center'
                            >My Accounts</h3>
                            <div
                                style={{ top: "20px", right: "25px" }}
                                className='d-flex justify-content-end position-absolute '>
                                <input type="text" placeholder='  Search' className='rounded accountSearch'
                                    style={{ padding: "2px", border: "1px solid rgba(0,0,0,0.3)", width: "150px" }}
                                />
                            </div>
                            <TableData />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AffiliateDashboard