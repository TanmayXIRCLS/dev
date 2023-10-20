import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export default function Section8() {

    const faqData = [
        {
            q: "Are there any deposits or fees that I have to pay?",
            a: "There is no deposit, fee or investment of any kind. You can simply sign up and get going!"
        },
        {
            q: "Do I need to relocate? / Where is this opportunity based?",
            a: "There is no fixed location! You can be a XIRCLS Partner right where you are, ANYWHERE in the world."
        },
        {
            q: "Will I have to commit a fixed number of hours or meet any minimum sales targets?",
            a: "There is no time commitment. You decide the number of hours you want to put in! There are no minimum sales targets to be met. However, if there is no activity from your end for 60 days, your partner account access will be revoked."
        },
        {
            q: "Will you give me qualified leads to follow up on?",
            a: "We expect our partners to tap into their own network to identify & convert leads into sales."
        },
        {
            q: "Will I receive any training and/or support?",
            a: "Absolutely. All partners will be given online training & documentation. Our team will also offer assistance with sales queries, onboarding & integration issues during the first few months."
        },
        {
            q: "How are referrals tracked?",
            a: "Once you become a XIRCLS partner, you will receive access to our partner dashboard where you can manage your affiliate referral links and track performance. Our tracking cookie window is 30 days."
        },
        {
            q: "What information can I track about my referrals?",
            a: "You can track your total referrals and those who have successfully purchased a paid plan. For privacy reasons, you cannot track the revenue of a specific merchant."
        },
        {
            q: "What is the commission process?",
            a: "Your affiliate link has a 30-day cookie window, which is activated after someone clicks your link. If that person signs up, and ultimately becomes a paying subscriber, you'll earn a 20% commission in the month following the month where they subscribed. No commissions are given for referrals that don't purchase, request a refund, or have their payment rejected or charged back."
        },
        {
            q: "How will payouts work?",
            a: "Payouts happen on the 1st of the month, and will happen NET-45 i.e. you'll receive a payout on the 1st of the month 30-day refund policy. There is a minimum payout of $50 to receive your commissions. after at least 45 days have passed since your referral became a paying customer.This delay is to account for our"
        }
    ]
    const color = "#9BA4B5"
    return (
        <div className='section11 d-flex justify-content-center  align-items-center flex-column mt80 ' >

            <section id="faq" className="faq " style={{ width: "72%" }}>
                <div className="row">
                    <div className='col-sm-3 d-flex justify-content-sm-start justify-content-center '>
                        <h1 className='display-3 fw-bolder my-2 main-heading ' >FAQ</h1>
                    </div>
                    <div className="col-sm-9 faq-list ">
                        <ul >
                            {
                                faqData && faqData.map((data, index) => {
                                    return (
                                        <li className=' bottom' >
                                            <a data-bs-toggle="collapse" className="collapse fs-2 text-black " data-bs-target={`#faq-list-${index}`}
                                            >{data.q}
                                                <i className="icon-show" aria-hidden="true"><AiOutlinePlus color={color} /></i>
                                                <i className=" icon-close"><AiOutlineMinus color={color} /></i>
                                            </a>
                                            <div id={`faq-list-${index}`} className="collapse " data-bs-parent=".faq-list">
                                                <h4 className='ms-5  fw-bold text-secondary lh-29'>{data.a} </h4>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>


            </section>

        </div>
    )
}
