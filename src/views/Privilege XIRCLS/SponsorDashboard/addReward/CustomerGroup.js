import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Table, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { MdKeyboardArrowDown, MdDone } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { Data_customer_red, Data_group_red } from './redux/addRewardSlice'

export default function CustomerGroup() {
    const dispatch = useDispatch()
    const nagivate = useNavigate()

    const dataDefault_customer = [
        { id: "c1", isChecked: false, name: "Jhon Doe", email: "Jhondoe@gmail.com" },
        { id: "c2", isChecked: false, name: "Rin Ruin", email: "rin@gmail.com" },
        { id: "c3", isChecked: false, name: "lisa Doe", email: "rin@gmail.com" },
        { id: "c4", isChecked: false, name: "tt Doe", email: "rin@gmail.com" },
        { id: "c5", isChecked: false, name: "ross Doe", email: "rin@gmail.com" },
        { id: "c6", isChecked: false, name: "lisa Doe", email: "rin@gmail.com" },
        { id: "c7", isChecked: false, name: "tt Doe", email: "rin@gmail.com" },
        { id: "c8", isChecked: false, name: "ross Doe", email: "rin@gmail.com" },
        { id: "c9", isChecked: false, name: "Jhon Doe", email: "Jhonttdoe@gmail.com" }

    ]
    const dataDefault_group = [
        { id: "g1", isChecked: false, name: "Lisa cop", cust_no: "325" },
        { id: "g2", isChecked: false, name: "Brus Ldt", cust_no: "325" },
        { id: "g3", isChecked: false, name: "Joe cop", cust_no: "325" },
        { id: "g4", isChecked: false, name: "Rin cop", cust_no: "325" },
        { id: "g5", isChecked: false, name: "grup cop", cust_no: "124" },
        { id: "g6", isChecked: false, name: "dine grup", cust_no: "124" },
        { id: "g7", isChecked: false, name: "tt Doe", cust_no: "124" },
        { id: "g8", isChecked: false, name: "dine grup", cust_no: "124" },
        { id: "g9", isChecked: false, name: "Jhon tt", cust_no: "325" },
        { id: "g10", isChecked: false, name: "Jhon Doe", cust_no: "325" }

    ]

    const [Data_group_array, setData_group_array] = useState([])
    const [Data_group, setData_group] = useState(dataDefault_group)
    const [Group_error, setGroup_error] = useState(false)

    const [Data_customer, setData_customer] = useState(dataDefault_customer)
    const [Cust_error, setCust_error] = useState(false)
    const [Data_customer_array, setData_customer_array] = useState([])

    useEffect(() => {
        
    }, [])
    
    console.log(Data_customer_array)
    function clearSrch_fun(srchNo) {
        if (srchNo === 'one') {
            const srch_input_1 = document.getElementById("srch_input_1")
            srch_input_1.value = ''
            setData_group(dataDefault_group)
        }

        if (srchNo === 'two') {
            const srch_input_2 = document.getElementById("srch_input_2")
            srch_input_2.value = ''
            setData_customer(dataDefault_customer)
        }
    }


    function filterFun(e) {
        const filterVal_grupue = e.target.value.trim().toLowerCase()
        if (filterVal_grupue.length >= 1) {
            const filterData = Data_group.filter((el) => {
                return el.name.toLowerCase().startsWith(filterVal_grupue) || el.name.toLowerCase().includes(filterVal_grupue)
            })
            setData_group(filterData)

        } else {
            setData_group(dataDefault_group)
        }
    }

    function handleCheckBtn(id) {
        const obldata = Data_group.filter((obj => obj.id === id))
        const findObj2 = Data_group_array.filter((obj => obj.id === id))
        // console.log(findObj2)
        if (findObj2.length === 0) {
            setData_group_array([...Data_group_array, ...obldata])
            const temp = [...Data_group_array, ...obldata]
            dispatch(Data_group_red(temp))
        } else {
            const newid = findObj2[0].id
            const newArr = Data_group_array.filter((obj => obj.id !== newid))
            setData_group_array(newArr)
            dispatch(Data_group_red(newArr))

        }
    }

    function toggleSel1(box) {
        const box1 = document.getElementById(box)
        if (box1.style.display === "block") {
            box1.style.display = "none"
        } else {
            box1.style.display = "block"

        }
    }

    // for cust
    function filterFun_cust(e) {
        const filterVal_grupue = e.target.value.trim().toLowerCase()
        // console.log(filterVal_grupue)

        if (filterVal_grupue.length >= 1) {
            const filterData = Data_customer.filter((el) => {
                return el.name.toLowerCase().startsWith(filterVal_grupue) || el.name.toLowerCase().includes(filterVal_grupue)
            })
            setData_customer(filterData)

        } else {
            setData_customer(dataDefault_customer)
        }
    }
    function handleCheckBtn_cust(id) {

        const obldata = Data_customer.filter((obj => obj.id === id))
        const findObj2 = Data_customer_array.filter((obj => obj.id === id))
        // console.log(findObj2)
        if (findObj2.length === 0) {
            setData_customer_array([...Data_customer_array, ...obldata])
            const temp = [...Data_customer_array, ...obldata]
            dispatch(Data_customer_red(temp))

        } else {
            const newid = findObj2[0].id
            const newArr = Data_customer_array.filter((obj => obj.id !== newid))
            setData_customer_array(newArr)
            dispatch(Data_customer_red(newArr))
        }
    }

    // console.log(Data_group_filter, "filter array")
    // console.log(Data_customer_array, "chechked array")

    // check validatipon
    function checkVal() {
        if (Data_group_array.length === 0) {
            return setGroup_error(true)
        }
        setGroup_error(false)
        if (Data_customer_array.length === 0) {
            return setCust_error(true)
        }
        setCust_error(false)
        nagivate("/merchant/sponsor/add-reward/review")
    }
    return (
        <>
            <Row className="match-height ">
                <Col lg="3" className='py-2'>
                    <RewardNav />
                </Col>
                <Col >
                    <Card className='p-3'>
                        <div className='d-flex align-items-center justify-content-between p-0 '>
                            <div>
                                <h3 className='fs-3 fw-bolder text-black'>Select Individual Customers</h3>
                                <h6 className="font-small-4 text-secondary m-0 p-0">to assign this reward to</h6>
                            </div>

                            <div>
                                <h6 className="font-small-6 text-dark "></h6>

                            </div>
                        </div>

                        <Form className='mt-2'>
                            <Row>


                                {/* group scroll bar */}
                                <Col md={6}>

                                    <FormGroup >
                                        <div id="list" className="dropdown-check-list" tabIndex="1 ">
                                            <h4 className={`anchor fs-5  ${Group_error ? 'invalid' : ''}`} onClick={() => toggleSel1("dropdown-box-2")}>
                                                Select Groups
                                                <MdKeyboardArrowDown size={20} /></h4>

                                            <div className='dropdown-box ' id='dropdown-box-2'>
                                                <div className='srchBox'>

                                                    <input type="text" onChange={filterFun} id='srch_input_1' placeholder='Search . . .' />
                                                    <RxCross1 id='srchIcon2' onClick={() => clearSrch_fun("one")} />
                                                </div>
                                                <hr />

                                                <ul className="items ">
                                                    {
                                                        Data_group && Data_group.map((item, index) => {
                                                            const isPresent = Data_group_array.filter((obj => obj.id === item.id))
                                                            if (isPresent.length === 1) {
                                                                return (
                                                                    <li key={index}>
                                                                        <label className='active-label' onClick={() => handleCheckBtn(item.id)}>
                                                                            <h5 className=''>{item.name} <div id="tick-icon"><MdDone /></div></h5>
                                                                            <h6 className='text-secondary font-small-2'> total customers ( {item.cust_no} )</h6>
                                                                        </label>
                                                                    </li>
                                                                )
                                                            } else {
                                                                return (
                                                                    <li key={index}>
                                                                        <label onClick={() => handleCheckBtn(item.id)}>
                                                                            <h5 className=''>{item.name} <div id="tick-icon"><MdDone /></div></h5>
                                                                            <h6 className='text-secondary font-small-2'> total customers ( {item.cust_no} )</h6>
                                                                        </label>
                                                                    </li>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </ul>


                                                {Data_group.length === 0 ? <h6 className='fs-6 text-center p-1 py-3'>No Result </h6> : ''}

                                                {/* </ul> */}
                                            </div>
                                        </div>
                                    </FormGroup>
                                    <div className='drpResult_conatiner m-1'>
                                        <h4 className='fs-5 fw-bold'>Selected Groups</h4>
                                        <Table className='table table-bordered table-sm' style={{ width: "95%" }}>
                                            <thead className='table-light'>
                                                <tr>
                                                    <th style={{ width: "80px" }}>#</th>
                                                    <th >Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Data_group_array && Data_group_array.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row" className='fs-small-6 fw-normal'>{index + 1}</th>
                                                                <td className='px-1'>
                                                                    <h5 className='p-0 m-0'>{item.name} </h5>
                                                                    <h6 className='p-0 m-0 text-secondary font-small-2'> total customers ( {item.cust_no} )</h6>
                                                                </td>

                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>

                                        </Table>
                                        {
                                            Data_group_array.length === 0 && <div className='py-1 text-center'>No Groups are selected</div>

                                        }
                                    </div>

                                </Col>

                                {/* individual employe */}
                                <Col md={6}>

                                    <FormGroup >
                                        <div id="list1" className="dropdown-check-list" tabIndex="2">
                                            <h4 className={`anchor fs-5  ${Cust_error ? 'invalid' : ''}`} onClick={() => toggleSel1("dropdown-box-1")}>
                                                Select Individual Customers<MdKeyboardArrowDown size={20} />
                                            </h4>

                                            <div className='dropdown-box ' id='dropdown-box-1'>
                                                <div className='srchBox'>

                                                    <input type="text" id='srch_input_2' placeholder='Search . . .' onChange={filterFun_cust} />
                                                    <RxCross1 id='srchIcon2' onClick={() => clearSrch_fun("two")} />
                                                </div>
                                                <hr />
                                                <ul className="items ">
                                                    {
                                                        Data_customer && Data_customer.map((item, index) => {
                                                            const isPresent = Data_customer_array.filter((obj => obj.id === item.id))
                                                            if (isPresent.length === 1) {
                                                                return (
                                                                    <li key={index}>
                                                                        <label className='active-label' onClick={() => handleCheckBtn_cust(item.id)}>
                                                                            <h5 className=''>{item.name} <div id="tick-icon"><MdDone /></div></h5>
                                                                            <h6 className='text-secondary font-small-2'>{item.email}</h6>
                                                                        </label>
                                                                    </li>
                                                                )
                                                            } else {
                                                                return (
                                                                    <li key={index}>
                                                                        <label onClick={() => handleCheckBtn_cust(item.id)}>
                                                                            <h5 className=''>{item.name} <div id="tick-icon"><MdDone /></div></h5>
                                                                            <h6 className='text-secondary font-small-2'>{item.email}</h6>
                                                                        </label>
                                                                    </li>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </ul>
                                                {Data_customer.length === 0 ? <h6 className='fs-6 text-center p-1 py-3'>No Result </h6> : ''}
                                            </div>
                                        </div>
                                    </FormGroup>
                                    {/* resu;t */}
                                    <div className='drpResult_conatiner m-1'>
                                        <h4 className='fs-5 fw-bold'>Selected Customers</h4>
                                        <Table className='table table-bordered table-sm' style={{ width: "95%" }}>
                                            <thead className='table-light'>
                                                <tr>
                                                    <th style={{ width: "80px" }}>#</th>
                                                    <th >Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Data_customer_array && Data_customer_array.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row" className='fs-small-6 fw-normal'>{index + 1}</th>
                                                                <td className='px-1'>
                                                                    <h5 className='p-0 m-0'>{item.name} </h5>
                                                                    <h6 className='p-0 m-0 text-secondary font-small-2'> {item.email}</h6>
                                                                </td>

                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>

                                        </Table>
                                        {
                                            Data_group_array.length === 0 && <div className='py-1 text-center'>No Customers are selected</div>

                                        }
                                    </div>
                                </Col>


                            </Row>

                        </Form>


                        <div className='d-flex justify-content-between mt-2'>
                            <Link to='/merchant/sponsorRewards-rewards' className='btn btn-primary rounded-1 '> <BiLeftArrowAlt /> Previous</Link>
                            <div>
                            <Button color='primary' className='btn rounded-1 me-1' onClick={checkVal}>Save </Button>
                            <Button color='primary' className='btn rounded-1' onClick={checkVal}>Save and Continue <BiRightArrowAlt /></Button>
                            </div>

                        </div>

                    </Card>
                </Col>
            </Row>
        </>
    )


}
