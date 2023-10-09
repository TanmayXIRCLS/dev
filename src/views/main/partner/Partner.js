import React from 'react'
import './partner.scss'
import Navbar from '../Navbar/Navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section4Test from './components/section4/test/Section4Test'
import Section6 from './components/section6/Section6'
import Section7Test from './components/section7/test/Section7'
import Section8 from './components/section8/Section8'
import Section9 from './components/section9/Section9'
import Section9Test from './components/section9/test/Section9p5'
import Section10 from './components/section10/Section10'
import Section11 from './components/section11/Section11'
import Section12 from './components/section12/Section12'
import Footer from '../footer/Footer'
import Section8Test from './components/section8/test/Section8Test'

export default function Partner() {
    return (
        <div className='partnerPage ' style={{ background: "#fff" }}>

            <Navbar />
            <Section1 />
            {/* <Section2 /> */}
            <Section3 />
            {/* <Section4 /> */}
            <Section4Test />
            <Section6 />
            <Section7Test />
            {/* <Section8 /> */}
            <Section8Test />
            {/* <Section9 /> */}
            <Section9Test />
            {/* <Section10 /> */}
            <Section11 />
            <Section12 />
            <Footer />

        </div>
    )
}
