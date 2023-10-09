import React from 'react'

const Section9p5 = () => {
  return (
    <div 
    className='d-flex justify-content-center align-items-center flex-column mt80 py-3'
    // style={{backgroundColor:"#F0F0F0"}}
    >
        <div className='section9p5 w-75 '>
        <div className='text-center'>
            <h2 
            className='text-center text-black fs-1 fw-bolder' 
            style={{ margin: "0px 0px 12px", lineHeight: "80%", textShadow: "3px 2px 4px rgba(0, 0, 0, 0.15)"}}
            >
                Less stress. More results.
            </h2>
        </div>
        <div className='text-center'>
            <h6 className='SmallText fs-4.5'
            style={{paddingBottom: "80px"}}
            >The tools you need to build, grow, and manage a thriving knowledge business are right here. Get started in <span className='SelectBlack' style={{color:"#000"}}>three simple steps</span>.</h6>
        </div>
        <div className="wrapper">
            <div>
                <div className='NumberHeader'>1</div>
                <div><h1 className='fs-4 fw-bolder text-black' >Prep your content</h1></div>
                <div><h6 className='SmallText fs-5'>Outline your course, plan a coaching program, or design a digital product you’d like to upload and sell.</h6></div>
            </div>
            <div>
                <div className='NumberHeader'>2</div>
                <div><h1 className='fs-4 fw-bolder text-black' >Price your product</h1></div>
                <div><h6 className='SmallText fs-5'>Set prices for each of your offerings, then use our simple sales page builder to quickly create a place to send people to purchase.</h6></div>
            </div>
            <div>
                <div className='NumberHeader'>3</div>
                <div><h1 className='fs-4 fw-bolder text-black' >Upload your content</h1></div>
                <div><h6 className='SmallText fs-5'>Use our intuitive drag-and-drop builder to create your product with videos, slides, quizzes, and more</h6></div>
            </div>
        </div>
        <div className='text-center mt-2 mt-sm-0'>
            <button
            className='btn btn-dark btn-sm btnCustom'
            >
                Start for Free
            </button>
        </div>
        </div>
    </div>
  )
}

export default Section9p5