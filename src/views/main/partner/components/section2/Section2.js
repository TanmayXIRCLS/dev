import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Section2() {

  
  return (
    <div className='section2 mt100'>

     

        <Row className='img-wrapper ' >
          <Col md="6" lg="4" className='col-box d-flex text-center justify-content-center mt-5'  >
            <h4 className='display-6 fw-bolder text-orange' >
              Who can become an affiliate ?
            </h4>
          </Col>
          <Col md="6" lg="4" className='col-box' >
            <div className='img-cont img-cont1'>
              <div className='img-box'>
                <img src='https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1637&q=80' alt='' />
              </div>
              <div className='p-2'>
                <h3 className='text-black fs-2 fw-bold'>Content Publishers</h3>
                <h6 className='fs-5 text-secondary'>Writing about SEO, PPC, PR, marketing, and content marketing </h6>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className='col-box'  >
            <div className='img-cont img-cont2'>
              <div className='img-box'>
                <img src='https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1637&q=80' alt='' />
              </div>
              <div className='p-2'>
                <h3 className='text-black fs-2 fw-bold'>Marketing Agencies</h3>
                <h6 className='fs-5 text-secondary'>that want to recommend Semrush to their clients </h6>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className='col-box' >
            <div className='img-cont img-cont3'>
              <div className='img-box'>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' alt='' />
              </div>
              <div className='p-2'>
                <h3 className='text-black fs-2 fw-bold'>Course Creators & Professor</h3>
                <h6 className='fs-5 text-secondary'> Who are creating webinars, or teaching SEO and marketing and want to promote Semrush with affiliate links</h6>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className='col-box' >
            <div className='img-cont img-cont4'>
              <div className='img-box'>
                <img src='https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1637&q=80' alt='' />
              </div>
              <div className='p-2'>
                <h3 className='text-black fs-2 fw-bold'>Paid Search Specialists</h3>
                <h6 className='fs-5 text-secondary'> who are eager to run campaigns with free trail landing pages and pre-designed banners</h6>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className='col-box' >
            <div className='img-cont img-cont5'>
              <div className='img-box'>
                <img src='https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg' alt='' />
              </div>
              <div className='p-2'>
                <h3 className='text-black fs-2 fw-bold'>All-Around Marketers</h3>
                <h6 className='fs-5 text-secondary'> that want to continue to grow by promoting Semrush</h6>
                <br />
              </div>
            </div>
          </Col>


        </Row>
        <div className='d-flex justify-content-center mt-2'>
        <button type="button" class="btn btn-warning fs-4">Apply Now</button>        </div>
    </div>

  )
}
