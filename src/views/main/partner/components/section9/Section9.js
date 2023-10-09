import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import rocket from './img/rocket.png';
import people from './img/people.png';
import share from './img/share2.png';
import screen from './img/screen.png';

export default function Section9() {
  const imgSize = 35
  return (
    <div className='section9 d-flex justify-content-center align-items-center flex-column  mt100' >
      <div className='step-cont w-75'>
        <h2 className='text-center display-6 fw-bolder text-black my-2' >Three <span className='text-orange'>Easy</span> Steps</h2>
        <Row className='py-2 '>
          <Col sm="12" lg="6">
            <Card className='card shadow-none'>
              <div className='label'>Step 01</div>
              <CardBody>
                <h1 className='fs-2 fw-bold text-black' >Understand the Requirements</h1>
                <div className='fs-5 fw-bold text-dark' >
                  You DON'T need to be a customer in order to start earning commission. However, to be most successful, it is important to have the following:
                </div>
                <div className='d-flex justify-content-center align-items-center m-1  '>
                  <img src={rocket} alt="" width={imgSize} /><h6 className='ms-1 fs-5 text-secondary'>Good understanding of the value of Sales Engagement and how Reply.io can make lives easier.</h6></div>
                <div className='d-flex justify-content-center align-items-center m-1  '>
                  <img src={people} alt="" width={imgSize} /><h6 className='ms-1 fs-5 text-secondary'>Have an audience that can benefit from simple yet powerful Sales Engagement platform that is Reply.io.</h6></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Row>

              <Col lg="12">
                <Card className='card shadow-none'>
                  <div className='label'>Step 02</div>
                  <CardBody>
                    <h1 className='fs-2 fw-bold text-black' >Actively share with your audience</h1>
                    <div className='d-flex justify-content-center align-items-center m-1  '>
                      <img src={share} alt="" width={imgSize} /><h6 className='ms-1 fs-5 text-secondary'>Once you're registered as an affiliate, simply start sharing your custom link with your audience in those places where it's most effective: social, forums, blogs, your website etc.</h6></div>

                  </CardBody>
                </Card>
              </Col>

              <Col lg="12">
                <Card className='card shadow-none'>
                  <div className='label'>Step 03</div>
                  <CardBody>
                    <h1 className='fs-2 fw-bold text-black' >Monitor your growth with a helpful dashboard</h1>
                    <div className='d-flex justify-content-center align-items-center m-1  '>
                      <img src={screen} alt="" width={imgSize} /><h6 className='ms-1 fs-5 text-secondary'>Once your referrals subscribe, you'll start earning a recurring commission on their payments to us.</h6></div>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

        </Row>

      </div>
    </div>
  )
}
