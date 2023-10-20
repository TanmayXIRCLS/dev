import React from 'react'
import { Col, Row } from 'reactstrap'
import { MdDeveloperMode } from 'react-icons/md'
import { AiTwotoneShop, AiOutlineSolution } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { SiGooglemarketingplatform } from 'react-icons/si'

export default function Section2() {
    const color = '#9BA4B5'
    const size = 25
    const data = [
        {
            title: "Web Developers",
            icon: <MdDeveloperMode color={color} size={size} />,
            desc: "who can offer XIRCLS integrations as value additions in their tech stack."
        },
        {
            title: "Marketing Agencies",
            icon: <SiGooglemarketingplatform color={color} size={size} />,
            desc: "who want to recommend XIRCLS solutions to their clients."
        },
        {
            title: "Startup Communities",
            icon: <AiTwotoneShop color={color} size={size} />,
            desc: "Such as incubators & accelerators who wish to offer startups a sustainable way to kickstart revenue generations."
        },
        {
            title: "Publishers & Influencer",
            icon: <FaRegNewspaper color={color} size={size} />,
            desc: "Interested in earning commission by referring their audience."
        },
        {
            title: "Other Solution Providers",
            icon: <AiOutlineSolution color={color} size={size} />,
            desc: "Such as resellers, consultancies who offer consulting & implementation services"
        },
    ]

    return (
        <div className="section3 d-flex justify-content-center align-items-center mt170" >
            <Row className=' match-height w-75'>
                <Col lg="4" md="6" className=' d-flex justify-content-center align-items-center'>
                    <div >

                        <h4 className='display-5 fw-bolder main-heading' >Who can become a XIRCLS partner ?</h4>
                    </div>
                </Col>
                {
                    data.map((data) => {
                        return (
                            <Col lg="4" md="6" className=''>
                                <div className='mt-1 p-2'>
                                    <div>
                                        {data.icon}
                                    </div>
                                    <div className='mt-2'>
                                        <h2 className=' text-black '>{data.title}</h2>
                                        <h4 className=' fw-bold text-secondary lh-29'>{data.desc}</h4>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    )
}

