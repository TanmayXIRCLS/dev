import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import expand from "@src/assets/images/expand.svg"
import { Col, Row } from 'react-bootstrap'
import {TbRoute, TbPigMoney,TbShieldDollar} from 'react-icons/tb'

const Section4 = () => {
    const size = 45
    const color = '#9BA4B5'
    return (
        <div className=' mt170'>
            <div >
                <h4 className=' text-center fw-bolder text-secondary'>ALL IN ONE PLACE</h4>
                <h1 className=' text-center display-3 fw-bolder main-heading '>Marketing solutions you actually need.<br/> No fluff.</h1>
                <Row className=' w-75 m-auto justify-content-between  mt-3 '>
                    <Col md="4" className='mt-2 ' >
                        {/* <img src={expand} alt="expand" className=' mb-1' /> */}
                        <TbRoute size={size} color={color}/>
                        <h2 className=' fw-bold mt-1 text-black'>Buyer Journey Optimization </h2>
                        <h4 className='text-secondary'>Optimization tools for frictionless, super-fast checkouts.</h4>
                    </Col>
                    <Col md="4" className='mt-2 '>
                    <TbPigMoney size={size} color={color}/>
                        <h2 className=' fw-bold mt-1 text-black'>Revenue Generation </h2>
                        <h4 className='text-secondary'>Incentivize customers to buy more than they intended to.</h4>
                    </Col>
                    <Col md="4" className='mt-2 '>
                    <TbShieldDollar size={size} color={color}/>
                        <h2 className=' fw-bold mt-1 text-black'>Revenue Recovery </h2>
                        <h4 className='text-secondary'>Predict, protect or recover lost or at-risk revenue across the buying cycle.</h4>
                    </Col>
                </Row>
            </div>
            <h2 className=' fw-bolder fs-2 text-primary text-center mt-5' >Coming Soon... </h2>
        </div>
    )
}

export default Section4