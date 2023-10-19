import React from 'react'
import { Row, Col } from 'reactstrap'

const Section8 = () => {
    return (
        <Row className='mt170 justify-content-center main-bg-dark'>
            <Col md="10">
                <div className=' d-flex flex-column justify-content-between' style={{ gap: "100px" }}>
                    <div>
                        <h1 className=' display-3 text-center fw-bold text-white mt-2'>Do Justice To Your Lead Generation Efforts</h1>
                        <h3 className=' fs-1 text-center fw-bold mt-2 text-white'>Install SUPERLEADZ and Boost your Roas.</h3>
                    </div>
                    <div className=' d-flex flex-column justify-content-between align-items-center mb-2'>
                        <h3 className=' display-4 text-center fw-bold mt-2 text-white'>See It With Your Own Eyes!</h3>
                        <button className='main-btn-blue p-1 rounded-pill mx-auto text-white'>Schedule a Demo</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Section8