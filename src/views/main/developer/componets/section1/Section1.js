import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap';
import { BiRightArrowAlt } from 'react-icons/bi'
import '../../style.scss'
import Button from 'react-bootstrap/Button';

export const Section1 = () => {
    return (
        <div className='partnerPage pt-5'>
            <Row className='justify-content-center'>
                <Col sm="11" xs="11" lg="10" md="11">
                    <Card className='cookieCard p-5 border' style={{ background: "#e5e7eb", border: "1px solid #dcdddf" }}>
                        <div>
                            <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2'>
                                Become a Technology Partner
                            </h1>
                            <h3 className='text-black m-0 fs-3'>
                                Help your clients automate and upgrade their marketing.<br /> Solve critical pain points and offer innovative solutions to expand your business
                            </h3>
                            <br />
                            <div className='d-flex gap-2 '>
                                <Button variant="success my-1 btn-lg fs-3 px-3 py-1 ">Start Building</Button>
                                <Button variant="outline-success btn-lg fs-3 px-3 py-1  my-1">Explore APIs</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
