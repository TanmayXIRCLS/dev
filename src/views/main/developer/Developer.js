// import React from 'react'
// import './style.scss'
// import { Section1 } from './componets/section1/Section1'
// import { Section2 } from './componets/section2/Section2'
// import { Section3 } from './componets/section3/Section3'
// import { Section4 } from './componets/section4/Section4'
// import { Section5 } from './componets/section5/Section5'
// import { Section6 } from './componets/section6/Section6'
// import { Section7 } from './componets/section7/Section7'
// // import { Section8 } from './componets/section8/Section8'

// export const Developer = () => {
//   return (
//     <div className='home'>
//         <Section1/>
//         <Section2/>
//         <Section3/>
//         <Section4/>
//         <Section5/>
//         <Section6/>
//         <Section7/>
//         {/* <Section8/> */}
//     </div>
//   )
// }


import React from 'react';
import { Section1 } from './componets/section1/Section1';
import { Section2 } from './componets/section2/Section2';
import { Section3 } from './componets/section3/Section3';
import { Section4 } from './componets/section4/Section4';
import { Section5 } from './componets/section5/Section5';
import { Section6 } from './componets/section6/Section6';
import { Section7 } from './componets/section7/Section7';

export const Developer = () => {
  const inlineStyles = {
    fontFamily: 'Colaborate',
  };

  const fontStyles = {
    fontFamily: 'Colaborat Lig',
  };

  return (
    <div style={inlineStyles} className='home'>
      <Section1 style={fontStyles} />
      <Section2 style={fontStyles} />
      <Section3 style={fontStyles} />
      <Section4 style={fontStyles} />
      <Section5 style={fontStyles} />
      <Section6 style={fontStyles} />
      <Section7 style={fontStyles} />
    </div>
  );
};
