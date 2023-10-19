import React from 'react'
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Section7 from './components/Section7/Section7';
import Section8 from './components/Section8/Section8';
import Navbar from "./../Navbar/Navbar"
import Footer from "./../footer/Footer"
import "../mainCustom.scss"

const SuperLeadz = () => {
    return (
        <div className='colaborateFont'>
            <Navbar />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer />
        </div>
    )
}

export default SuperLeadz