import React from 'react'
import './partner.scss'
import Navbar from '../navbar/Navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Section7 from './components/section7/Section7'
import Section8 from './components/section8/Section8'
import Section9 from './components/section9/Section9'
import Footer from '../footer/Footer'
import Test from './components/section8/test/Test'

export default function Partner() {
    return (
        <div className='partnerPage ' style={{background:"#fff"}}>

            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6/>
            <Section7 />
            <Test/>
            {/* <Section8 />  */}
             <Section9 />
            <Footer />

        </div>
    )
}
