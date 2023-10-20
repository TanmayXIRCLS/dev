import React from 'react'
import './home.scss'
import Navbar from '../navbar/Navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Section7 from './components/section7/Section7'
import Footer from '../footer/Footer'
import Hero from './components/Hero/Hero'
import TestS5 from './components/section5/TestS5'

const Home = () => {
  return (
    <div style={{ background: "#fff" }} className='home '>
      <Navbar />
      <Hero />
      
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <TestS5/>
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <hr align="center" className='mt170' style={{ width: "75%" }} />
      <Footer />
    </div>
  )
}

export default Home