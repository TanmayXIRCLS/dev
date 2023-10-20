import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from 'react-bootstrap/Button'

export const Section7 = () => {
  return (
      <Row className=" justify-content-center " style={{ marginTop: "170px" }}>
          <Col lg="10" xs="10">
        <Row>
            <Col>
                <div className=''>
                    <div className='text-center mt-5 section7-heading'>
                        <h1>Ready to build the future?</h1>
                    </div>
                    <div className='text-center mt-5 mb-5 section7-button mt-5'>
                              <Button className='btn-lg fs-3 px-3 py-1' variant="primary">Get started</Button>
                    </div>
                </div>
            </Col>
              </Row>
          </Col>
    </Row>
  )
}
