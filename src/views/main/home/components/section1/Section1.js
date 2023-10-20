import React from 'react'
import image1 from "@src/assets/images/image 1.png"
import { Col, Row } from 'react-bootstrap'

const Section1 = () => {
  return (
    <Row className=' mt150 justify-content-center align-items-center ' >

      <Col xs="10" md="10" lg="8">
        <Row className='justify-content-center align-items-center   '>
          <Col md="5">
            <div className='text-center' >
              <img src={image1} alt="image1" className='mt-n2' style={{ width: "300px", marginTop: "-20px" }} />
            </div>
          </Col>
          <Col md="7">
            <div className=' d-flex  flex-column justify-content-center align-items-start ' >
              <h4 className=' fw-bolder mb-1 text-secondary mt-4 mt-sm-0'>SUPERLEADZ</h4>
              <h1 className=' mb-1 display-3 fw-bolder main-heading  ' >Gain High-Quality Leads & Convert With Ease</h1>
              <h2 className=' mb-1 text-black'>Reduce Bounce Rates</h2>
              <h4 className=' mb-1 text-secondary '  >Optimize your website sales funnel. Gain qualified leads & personalize
                shopper journeys. Serve instant incentives for faster conversions.</h4>
              <button className='btn btn-primary btn-lg'>Learn more about SuperLeadz</button>
            </div>
          </Col>
        </Row>
      </Col>

    </Row>
  )
}

export default Section1