import React from 'react'

const Section7 = () => {
    return (
        <div className='w-75 m-auto mt170'>
            <h1 className='text-center display-3 fw-bolder main-heading'>For You. No Matter <br />Who You Are</h1>

            <div className='my-5 d-flex flex-wrap justify-content-center align-items-center gap-5'>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#9BA4B5", width: "190px" }}>
                    <h2 className='text-white fw-bolder text-center'>760k</h2>
                    <p className=' fs-4 text-white text-center'>Transactions</p>
                </div>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#9BA4B5", width: "190px" }}>
                    <h2 className='text-white fw-bolder text-center'>70k</h2>
                    <p className=' fs-4 text-white text-center'>Genuine <br />customers </p>
                </div>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#9BA4B5", width: "190px" }}>
                    <h2 className='text-white fw-bolder text-center'>100%</h2>
                    <p className=' fs-4 text-white text-center'>Verified</p>
                </div>
            </div>

            <div className=' d-flex justify-content-center align-items-center '>
                <h1 className=' fw-bolder m-0 text-black'>Grow your business with XIRCLS</h1>
            </div>

            <h4 className=' fw-bolder text-center mt-0 text-dark' >Reach out for customized solutions.</h4>

            <div className=' d-flex justify-content-center align-items-center gap-3 mt-2'>
                <button type="button" className=' btn btn-lg  btn-primary '>REQUEST DEMO</button>
                <button type="button" className=' btn btn-lg btn-outline-primary '>CONTACT US</button>
            </div>
        </div>
    )
}

export default Section7