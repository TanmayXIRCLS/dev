import React from 'react'
import { Col, Row } from 'reactstrap'
import { PiHandshakeFill } from 'react-icons/pi'
import { BiCookie, BiLineChart } from 'react-icons/bi'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdWifiTethering } from 'react-icons/md'

export default function Section4() {
    const iconSize = 30
    const color = "#9BA4B5"
    const data = [
        {
            title: "Instant Trust",
            icon: <PiHandshakeFill color={color} size={iconSize} />,
            desc: "Boost your credibility with an industry-transforming martech company that consistently launches innovative marketing solutions."
        },
        {
            title: "Scale & Grow",
            icon: <BiLineChart color={color} size={iconSize} />,
            desc: "Expand your business by offering XIRCLS solutions to existing & new customers, thereby attracting new business opportunities."
        },
        {
            title: "Industry-Leading Commissions",
            icon: <GiTakeMyMoney color={color} size={iconSize} />,
            desc: "Earn upto 20% commission per sale on first & recurring sales."
        },
        {
            title: "Extended Cookie Life",
            icon: <BiCookie color={color} size={iconSize} />,
            desc: "Get paid for any visitor who makes a purchase within 120 days of clicking on your affiliate link."
        },
        {
            title: "Earn in Multiple Currencies",
            icon: <FaMoneyBillTransfer color={color} size={iconSize} />,
            desc: "Earn sales commissions in the currencies that your clients purchase our plans in. Set up a global revenue stream."
        },
        {
            title: "Remote-First Culture",
            icon: <MdWifiTethering color={color} size={iconSize} />,
            desc: "Our team is accustomed to working with partners across the globe. Stay connected to us no matter where you are."
        }

    ]
    return (
        <div className='section6 d-flex justify-content-center align-items-center flex-column mt170' >
            <div className=' text-center'>
                <h2 className='display-3 text-center main-heading fw-bolder'>
                    Why become a XIRCLS Partner?
                </h2>
                <Row className='text-start match-height w-75 m-auto mt-2'>

                    {
                        data.map((data) => {
                            return (
                                <Col lg="4" md="6" className=''>
                                    <div className='m-1 mt-3  '>
                                        <div> {data.icon} </div>
                                        <div className='mt-1'>
                                            <h2 className='text-black'>{data.title}</h2>
                                            <h4 className=' text-secondary lh-29'>{data.desc}</h4>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </div>
        </div>
    )
}
