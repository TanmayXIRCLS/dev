import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Section1 = () => {
    const rowStyles = {
        marginTop: "170px",
    };

    const sectionStyles = {
        background: "#e5e7eb",
        borderRadius: "16px",
        boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
    };

    const headerStyles = {
        fontWeight: "700",
    };

    const buttonStyles = {
        marginTop: "20px",
    };

    const useCasesButtonStyles = {
        borderRadius: 'none',
        marginTop: '10px',
    };

    const olStyles = {
        counterReset: 'li',
        padding: 10,
        textShadow: '0 1px 0 rgba(255,255,255,.5)',
    };

    const pStyles = {
        position: 'relative',
        display: 'block',
        padding: '.6em 3em .6em 3em',
        margin: '.5em 0',
        color: '#444',
        textDecoration: 'none',
        borderRadius: '.3em',
        transition: '0.3s ease-out',
    };

    const pBeforeStyles = {
        content: 'counter(li)',
        counterIncrement: 'li',
        position: 'absolute',
        left: '-1em',
        top: '50%',
        marginTop: '-1em',
        height: '2.5em',
        width: '2.3em',
        lineHeight: '2em',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: '2em',
        transition: 'all 0.3s ease-out',
    };

    return (
        <Row style={rowStyles} className="justify-content-center">
            <Col lg="10" xs="10">
                <Row style={sectionStyles} className="sh p-5">
                    <Col>
                        <div>
                            <h1 style={headerStyles} className="display-3 fw-bolder m-0 mt-2">Become a Technology Partner</h1>
                        </div>
                        <div>
                            <h3 className="fs-4 m-0 mt-2">Help your clients automate and upgrade their marketing. <br /> Solve critical pain points and offer innovative solutions to expand your business.</h3>
                        </div>
                        <div className="d-flex mt-3 flex-wrap gap-2">
                            <div>
                                <Button className="btn-lg fs-3 px-3 py-1" variant="success" style={buttonStyles}>
                                    Start Building
                                </Button>
                            </div>
                            <div>
                                <Button className="btn-lg fs-3 px-3 py-1" variant="outline-success" style={buttonStyles}>Explore APIs</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={rowStyles}>
                    <Col className="d-flex justify-content-md-start" md={6} sm={12}>
                        <div className="d-flex flex-column align-items-center">
                            <h2 className="display-5 fw-bold text-md-start text-center">Discover the next generation of marketing-centric open APIs.</h2>
                            <Button className="btn-lg fs-3 px-3 py-1 mt-5" variant="dark" style={useCasesButtonStyles}>See Use Cases</Button>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="d-flex justify-content-md-end justify-content-center">
                        <ol style={olStyles}>
                            <li className=" fs-4 ">
                                <p style={pStyles}>Cross-Marketing</p>
                            </li>
                            <li className="fs-4">
                                <p style={pStyles}>Rewards & Incentives</p>
                            </li>
                            <li className="fs-4">
                                <p style={pStyles}>CRM</p>
                            </li>
                            <li className="fs-4">
                                <p style={pStyles}>Buyer Journey Optimization</p>
                            </li>
                            <li className="fs-4">
                                <p style={pStyles}>Data Collection</p>
                            </li>
                            <li className="fs-4">
                                <p style={pStyles}>Social Tools</p>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
