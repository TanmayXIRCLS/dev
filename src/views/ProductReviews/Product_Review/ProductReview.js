import { useState, useEffect } from 'react'
import { Col, Row, Card, CardBody, Progress } from 'reactstrap'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { Download, Printer, File, FileText, Copy } from 'react-feather'
import DailyBarGraph from './DailyBarGraph'
import ProdReviewTable from './ProdReviewTable'
import "./ProductReview.css"

import apiData from "@src/@core/auth/api/api.json"


const ProductReview = () => {
    const [reviewType, setReviewType] = useState("All")
    const [reviewsPerPage, setReviewsPerPage] = useState(10)
    const [reviewInfo, setReviewInfo] = useState({ total_reviews: 0, average_rating: 0 })
    const [starInfo, setStarInfo] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

    useEffect(() => {
        console.log("fetch useEffect")

        fetch(`${apiData.d_ngrok}/router/reviews/`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': true,
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok')
                }
                return resp.text()
            })
            .then(data => {
                // console.log("reviews", data)

                const jsonData = JSON.parse(data)
                setReviewInfo({ total_reviews: jsonData.total_reviews, average_rating: jsonData.average_rating })
            })
            .catch((error) => {
                console.log(error)
            })

        fetch(`${apiData.d_ngrok}/router/top-products/`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': true,
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok')
                }
                return resp.text()
            })
            .then(data => {
                // console.log("reviews", data)

                const jsonData = JSON.parse(data)
                setStarInfo({ 1: jsonData.ratings_data[1], 2: jsonData.ratings_data[2], 3: jsonData.ratings_data[3], 4: jsonData.ratings_data[4], 5: jsonData.ratings_data[5] })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log("starInfo", starInfo)

    return (
        <>
            <Card>
                <CardBody>
                    <h4>Product Reviews</h4>
                </CardBody>
            </Card>
            <Row className='match-height'>
                <Col xl='6'>
                    <Card className='rounded'>
                        <CardBody>
                            <Row>
                                <Col className='card1' md="6" sm="12">
                                    <h2 className="d-flex align-items-center fw-bold gap-1" style={{ color: "#7367f0", fontSize: "32px" }}>{reviewInfo.average_rating.toFixed(1)}
                                        <FaStar className='my-1' size={20} style={{ color: "#7367f0" }} />
                                    </h2>
                                    <p className='fw-bold'>Total {reviewInfo.total_reviews} reviews</p>
                                    <p className='gap-1'>All reviews are from genuine customers</p>
                                    <span className=' badge week-btn rounded'>+5 This week</span>
                                </Col>
                                <Col md="6" sm="12" className=''>
                                    <div className='d-flex flex-column justify-content-between mx-1 my-1'>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >5 star</span>
                                            <Progress value={61.50} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>{starInfo[5] || 0}</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >4 star</span>
                                            <Progress value={30} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>{starInfo[4] || 0}</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >3 star</span>
                                            <Progress value={15} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>  {starInfo[3] || 0}</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >2 star</span>
                                            <Progress value={7} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>{starInfo[2] || 0}</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >1 star</span>
                                            <Progress value={2} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>{starInfo[1] || 0}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody>
                            <Row className='d-flex justify-content-between'>
                                <Col sm="6">
                                    <div className="mb-5">
                                        <h4 className='text-nowrap mb-1'>Statistics</h4>
                                        <p>
                                            <span>12 new reviews</span>
                                            <span className='badge week-btn1 badge-success mx-1'>+8.4%</span>
                                        </p>
                                    </div>
                                    <div className=' d-flex align-items-end'>
                                        <h4 className="mb-1"><span className="text-success me-1">87%</span>Positive reviews</h4>
                                        <span className='mb-1 pb-1'><AiOutlineInfoCircle size={13} /></span>
                                    </div>
                                    <p className=''>See performance report</p>
                                </Col>
                                <Col sm="6" className='mt-1 '>
                                    <DailyBarGraph />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody className='mt-2' style={{ paddingTop: "0px" }}>
                            <Row className=' d-flex align-items-center'>
                                <Col md="2" sm="8">
                                    <input className="form-control mr-sm-2 w-auto mx-3" type="search" placeholder="Search reviews" aria-label="Search" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center gap-1 dropsdown ' md="7" sm="8">
                                    <select className="form-select dropsdown-width" aria-label="Default select example" value={reviewType} onChange={(e) => setReviewType(e.target.value)}>
                                        <option selected value="All">All reviews</option>
                                        <option value="Published">Published</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                    <div className="dropdown dropsdown-width">
                                        <button className="btn btn-light text-secondary text-center dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Download size={17} style={{ marginRight: "2px" }} />   Export
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><Printer size={17} style={{ marginRight: "2px" }} /> Print</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><File size={17} style={{ marginRight: "2px" }} /> Csv</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><FileText size={17} style={{ marginRight: "2px" }} /> Pdf</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><Copy size={17} style={{ marginRight: "2px" }} /> Copy</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <h5 className=' mt-2'>All Reviews</h5>
                            <hr className='mt-2 mb-0' />
                            <ProdReviewTable reviewType={reviewType} reviewsPerPage={reviewsPerPage} />
                        </CardBody>
                    </Card>

                </Col>

            </Row>
        </>
    )
}

export default ProductReview