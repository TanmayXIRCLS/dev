import React from 'react'
import { MdOutlineCampaign } from 'react-icons/md'
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia'
import { HiOutlineMail } from 'react-icons/hi'

import Avatar from '@components/avatar'
import react from './React.png'


export default function Section1() {
    return (
        <div className='section1 d-flex justify-content-center align-items-start' style={{maxHeight:'100vh'}} >

            <div className='py-3 d-flex justify-content-center flex-column align-items-center' style={{marginTop:'50px'}} >

                <div className=' text-center'>
                    <div>
                        <h1 className='display-3 text-black fw-bolder m-0  '> Leverage Your Network. </h1>
                        <h1 className='display-3 text-black fw-bolder  '> Earn Recurring Revenue. </h1>
                    </div>

                    <h4 className='fs-2  mt-1 w-75 m-auto text-dark fw-bold px-1 '>Grow your business while you hello your audience grow theirs.<span className='text-black fw-bolder'> Earn a 20% commission every time </span>your referrals buy from us. </h4>
                </div>
            </div>

        </div>
    )
}
