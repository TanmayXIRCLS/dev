import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap';
import {BiRightArrowAlt} from 'react-icons/bi'

export default function Section9() {
  return (
    <div className='section12 py-5 mt-3 border-bottom mt170'>
      <Row className='justify-content-center'>
        <Col sm="11" xs="11" lg="10" md="11">
          <Card className='cookieCard p-5 border'>
            <div>
              <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2'>
                Start Earning <br /> Today
              </h1>
              <h3 className='text-black m-0 fs-3'>
                Earn upto <span className='text-warning fw-bolder'>30% commission</span> <br /> for every XIRCLS product purchase.
              </h3>
              <br />
              
              <button className='acceptButton btn my-1 text-white px-3 py-1'>Get Started</button>
              <button className='acceptButton2 btn my-1  px-3 py-1' >Speak with our team</button>
              <Link to='' className='reDirect text-black fw-bold fs-3' style={{ boxShadow: 'none' }}>Sign up as a XIRCLS Partner <BiRightArrowAlt/></Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
