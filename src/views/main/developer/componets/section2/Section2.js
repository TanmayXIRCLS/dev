import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export const Section2 = () => {
  return (
    <Row className=" justify-content-center " style={{ marginTop: "170px" }}>
      <Col lg="10" xs="10">
        <Row>
          <Col className='d-flex justify-content-center'>
            <div className='' style={{ width: "30rem", position: "relative" }}>
              {/* <div style={{width: "5rem", height: "5rem", background: "rgb(192 217 231)", position: "absolute", top: "0", left: "0", zIndex: "-1", borderRadius: "6px"}}></div> */}
              <div className='section2-heading' style={{ marginTop: "2.2rem", marginLeft: "2rem" }}>
                <h1 className=' display-2 '><span style={{ fontWeight: "700" }}>Why build</span> <span className=' display-2 ' style={{ fontWeight: "500" }}>on</span> <span className=' display-2' style={{ fontWeight: "700" }}>XIRCLS ?</span></h1>
              </div>
              <div style={{ marginLeft: "2rem" }} className='section2-info'>
                <p className=' fs-4 mt-1' style={{ textAlign: "left", fontSize: "1.1rem", lineHeight: "1.2" }}>We empower you to leverage our 100+ brand network
                  and powerful functionalities to build industry-shaping apps
                  that will delight your clients and impress your peers.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
