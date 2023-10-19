/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Form, FormGroup, FormFeedback, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { CustReward_red, EndDate_red, SponAmt_red, StartDate_red } from './redux/addRewardSlice'

export default function AddRewardPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [AvaBal, setAvaBal] = useState(2000)
    const [CustReward, setCustReward] = useState('')
    const [SponAmt, setSponAmt] = useState('')
    const [DisAmt, setDisAmt] = useState(550)
    const [StartDate, setStartDate] = useState('')
    const [EndDate, setEndDate] = useState('')
    const [Error, setError] = useState({
        isError: false,
        err_msg: ""
    })
    const [Error_cust, setError_cust] = useState({
        isError: false,
        err_msg: ""
    })
    const [Error_sdate, setError_sdate] = useState(false)
    const [Error_edate, setError_edate] = useState(false)


    useEffect(() => {
        console.log("use effeect runedf")


    }, [])

    // for sponsorship amt cal
    function sponAmt_fun(e) {
        const custNum_id = document.getElementById("custNum_id")
        const getVal = e.target.value
        setSponAmt(getVal)
        const validValue = getVal % DisAmt
        // if val is smaller than dicount
        setError_cust({ isError: false })

        if (getVal < DisAmt) {
            console.log("amt is small ", DisAmt)
            custNum_id.value = 0
            setError({
                isError: true,
                err_msg: `Sponsorship Amount can not be less than ${DisAmt} `
            })
            return null
        }

        // main retrun
        // if val is multiple of dicount
        if (validValue === 0) {
            setCustReward(getVal / DisAmt)
            custNum_id.value = getVal / DisAmt
            setError({ isError: false })
            return null
        }

        // if val is not in multiple of dicopunt
        if (validValue !== 0) {
            const roundCount = Math.round(getVal / DisAmt)
            // if amt is more than aval bal.
            if ((roundCount * DisAmt) > AvaBal) {
                custNum_id.value = 0
                setError({
                    isError: true,
                    err_msg: `Sponsorship Amount can not exceed Available balance`
                })

            } else {
                const roundCount = Math.round(getVal / DisAmt)
                const maxamt = (roundCount * DisAmt)
                setCustReward(Math.floor(getVal / DisAmt))
                custNum_id.value = (Math.floor(getVal / DisAmt))

                setError({
                    isError: true,
                    err_msg: `Closest Sponsorship Amount can be ${maxamt}`
                })
            }
            return null
        }
    }

    // for customer cal
    function custNum_fun(e) {
        setError({ isError: false })
        const sponAmt_id = document.getElementById("sponAmt_id")
        // sponAmt_id.value = 3
        const getVal = e.target.value
        setCustReward(getVal)
        const newSponAmt = getVal * DisAmt

        // if cust num is greater return error
        if (newSponAmt > AvaBal) {
            const noOfCust = Math.round(AvaBal / DisAmt)
            if (AvaBal < (noOfCust * DisAmt)) {
                const newcount = (noOfCust - 1)
                sponAmt_id.value = ''
                setError_cust({
                    isError: true,
                    err_msg: `max customer can be ${newcount}`
                })
            }
        } else {
            setSponAmt(newSponAmt)
            sponAmt_id.value = newSponAmt
            setError_cust({
                isError: false,
                err_msg: ``
            })
        }

    }

    // validate date
    function sDate_fun(e) {
        setStartDate(e.target.value)
        const sDate_id = document.getElementById("sDate_id").value
        const eDate_id = document.getElementById("eDate_id")
        eDate_id.min = sDate_id
    }

    // check all values 
    function checkAllVal() {
      
        if (SponAmt === '' || (Error_cust.isError)) {
            console.log("sponsor amt error ")
            setError({ isError: true, err_msg: '' })

            return false
        }
        if (CustReward === '' || (Error.isError)) {
            console.log("CustReward error ")
            setError_cust({ isError: true, err_msg: '' })

            return false
        }
        if (StartDate === '') {
            console.log("StartDate value not ")
            setError_sdate(true)
            return false
        }
        setError_sdate(false)

        if (EndDate === '') {
            console.log("EndDate value not ")
            setError_edate(true)
            return false
        }
        console.log("value all set")
        navigate("/merchant/sponsor/add-reward/customerGroup")
        return true
    }

    return (
        <>
            <Row className="match-height ">
                <Col lg="3" className='py-2'>
                    <RewardNav />
                </Col>
                <Col >
                    <Card className='p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-between p-0 '>
                            <div>
                                <h3 className='fs-3 fw-bolder text-black'>Set a budget</h3>
                                <h6 className="font-small-4 text-secondary m-0 p-0">& customise how you spend it</h6>
                            </div>

                            <div>
                                <h6 className="font-small-6 text-dark mt-1">Available Balance : <span className='text-success'>{AvaBal}</span></h6>

                            </div>
                        </div>

                        <Form className='mt-2'>
                            <Row>
                                <Col md={6}>
                                    <FormGroup >
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Total Sponsorship Amount
                                        </Label>
                                        <Input
                                            id='sponAmt_id'
                                            placeholder="Total Sponsorship Amount"
                                            type="number"
                                            onChange={sponAmt_fun}
                                            invalid={Error.isError}
                                        />
                                        <FormFeedback>
                                            {Error.err_msg}
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Total no. of Customers Rewarded
                                        </Label>
                                        <Input
                                            id='custNum_id'
                                            placeholder="Total Customers"
                                            type="number"
                                            // onChange={(e) => { setCustReward(e.target.value); dispatch(CustReward_red(e.target.value)) }}
                                            onChange={custNum_fun}
                                            invalid={Error_cust.isError}

                                        />
                                        <FormFeedback>
                                            {Error_cust.err_msg}
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Discount Amount
                                        </Label>
                                        <Input
                                            type="text"
                                            disabled
                                            value={DisAmt}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Fixed Reward ()
                                        </Label>
                                        <Input
                                            type="number"
                                            disabled
                                            value={"500"}

                                        />
                                    </FormGroup>
                                </Col>


                            </Row>

                        </Form>

                        <Row >
                            <h4 className='fs-4 mt-2 fw-bold text-black'>How Long</h4>
                            <h5 className='m-0 mb-1'>will this Sponsorship last?</h5>

                            <Col md={6}>
                                <FormGroup >
                                    <Label for="exampleEmail" className='fs-6 fw-bold'>
                                        Sponsorship Start Date
                                    </Label>
                                    <Input
                                        id='sDate_id'
                                        placeholder="Sponsorship Start Date"
                                        type="date"
                                       
                                        onChange={sDate_fun}
                                        min={new Date().toISOString().split("T")[0]}
                                        invalid={Error_sdate}

                                    />

                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="endDate" className='fs-6 fw-bold'>
                                        Sponsorship End Date
                                    </Label>
                                    <Input
                                        id='eDate_id'
                                        placeholder="Sponsorship End Date"
                                        type="date"
                                        onChange={(e) => { setEndDate(e.target.value); dispatch(EndDate_red(e.target.value)) }}
                                  
                                    invalid={Error_edate}

                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                        <div className='d-flex justify-content-between'>
                            <Link to='/merchant/sponsorRewards-rewards' className='btn btn-primary rounded-1 '> <BiLeftArrowAlt /> Previous</Link>
                            <div>
                            <Button color='primary' className='btn rounded-1 me-1' onClick={checkAllVal}>Save </Button>
                            <Button color='primary' className='btn rounded-1' onClick={checkAllVal}>Save and Continue <BiRightArrowAlt /></Button>
                            </div>

                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
