import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap';
import { BiRightArrowAlt } from 'react-icons/bi'

export default function Section12() {
  return (
    <div className='section12 py-5 mt-3 border-bottom mt60'>
      <Row className='justify-content-center'>
        <Col sm="11" xs="11" lg="10" md="11">
          <Card className='cookieCard p-5 border'>
            <div>
              <h1 className='mainHeader display-3 text-black fw-bolder m-0 mt-2 h1Heading'>
                Start Earning <br /> Today
              </h1>
              <h3 className='text-black m-0'>
                Earn upto <span className='text-warning fw-bolder'>30% commission</span> <br /> for every XIRCLS product purchase.
              </h3>
              <br />
              <button className='acceptButton btn my-1 text-white px-3 py-1'>Get Started</button>
              <button className='acceptButton2 btn my-1  px-3 py-1' >Speak with our team</button>
              <Link to='' className='reDirect text-black fw-bold fs-4' style={{ boxShadow: 'none' }}>Sign up as a XIRCLS Partner <BiRightArrowAlt /></Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
