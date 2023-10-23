
import React from 'react';
import Navbar from '../navbar/Navbar'
import { Section1 } from './componets/section1/Section1';
import { Section2 } from './componets/section2/Section2';
import { Section3 } from './componets/section3/Section3';
import { Section4 } from './componets/section4/Section4';
import { Section5 } from './componets/section5/Section5';
import { Section6 } from './componets/section6/Section6';
import { Section7 } from './componets/section7/Section7';
import Footer from '../footer/Footer'

export const Developer = () => {
  const inlineStyles = {
    fontFamily: 'Colaborate',
  };

  const fontStyles = {
    fontFamily: 'Colaborat Lig',
  };

  return (
    <div style={inlineStyles} className='home'>
      <Navbar/>
      <Section1 style={fontStyles} />
      <Section2 style={fontStyles} />
      <Section3 style={fontStyles} />
      <Section4 style={fontStyles} />
      <Section5 style={fontStyles} />
      <Section6 style={fontStyles} />
      <Section7 style={fontStyles} />
      <Footer />
    </div>
  );
};
