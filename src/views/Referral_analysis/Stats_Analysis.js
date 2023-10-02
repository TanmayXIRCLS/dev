
import { Card } from "react-bootstrap"
import { CardBody, CardHeader, CardTitle } from "reactstrap"
import "./style/referralstyle.css"
import { HiArrowLongUp } from "react-icons/hi2"
import { FaFacebookF, FaTwitter, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

function Stats_Analysis() {
  return (
    <>
      {/* Referral Stats */}
      <Card className="text-center text-sm-start">
        <CardHeader>
          <CardTitle>
            <h4 className="fw-bolder CardHead">Referral Stats</h4>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="row d-flex justify-content-evenly ">
            <div className="col-sm Label">
              TOTAL VIEWS
              <h1 className="py-1 fw-bolder CardHead">463,376</h1>
            </div>
            <div className="col-sm Label">
              ADVOCATE SIGNUPS
              <h1 className="py-1 fw-bolder CardHead">33,349</h1>
            </div>
            <div className="col-sm Label">
              TOTAL REFERRALS
              <h1 className="py-1 fw-bolder CardHead">74,497</h1>
            </div>
            <div className="col-sm Label">
              TOTAL REDEMPTIONS
              <h1 className="py-1 fw-bolder CardHead">8,625</h1>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* Revenue Stats */}
      <Card className="text-center text-sm-start">
        <CardHeader>
          <CardTitle>
            <h4 className="fw-bolder CardHead">Revenue Stats</h4>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="row d-flex justify-content-evenly ">
            <div className="col-sm Label">
              FRIEND DISCOUNT USES
              <h1 className="py-1 fw-bolder CardHead">4,366</h1>
            </div>
            <div className="col-sm Label">
              ADVOCATE DISCOUNT USES
              <h1 className="py-1 fw-bolder CardHead">769</h1>
            </div>
            <div className="col-sm Label">
              TOTAL EARNINGS
              <h1 className="py-1 fw-bolder CardHead">
                $307,497.87
              </h1>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* Revenue Growth */}
      <Card className="text-center text-sm-start">
        <CardHeader>
          <CardTitle>
            <div>
              <h4 className="fw-bolder CardHead">Revenue Growth</h4>
            </div>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div>
            <h6
              className=" fw-bolder opacity-75 text-center text-sm-end mb-1 mb-sm-0"
              style={{ fontSize: `12px` }}
            >
              Last 90 days
            </h6>
          </div>
          <div>
            <h1 className="pb-1 fw-bolder CardHead" style={{ fontSize: `18px` }}>
              $80,576.30&nbsp;{" "}
              <span className="fs-4 fw-lighter " style={{ color: `green` }}>
                <HiArrowLongUp />
                13.12%
              </span>
            </h1>
          </div>
          <div className="Label">
            EARNINGS OVER TIME
            <h6 className="py-1 fw-bold CardHead">$778,746 </h6>
          </div>
        </CardBody>
      </Card>
      {/* Shares */}
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="fs-5 opacity-75 ">Shares</div>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <h3 className="fw-bolder CardHead">0 Shares</h3>
          <h6 className="py-1">5 people clicked on the shared link</h6>
          {/* Share Counters */}
          <div class={`grid-container sharesFlex`}>
            <div class="grid-item-FB ">
              <div className="row">
                <div className="col-2 ">
                <div className="Iconbg d-flex text-center" style={{backgroundColor:`#3b5998`}}>
                 <FaFacebookF style={{color:'white', fontSize:`22px`, marginTop:`14px`, marginLeft:`16px`}}/> 
                  </div>
                </div>
                <div className="col mt-1"> <strong>0</strong> </div>
              </div>
            </div>
            <div class="grid-item-TW ">
            <div className="row">
                <div className="col-2 ">
                <div className="Iconbg d-flex text-center" style={{backgroundColor:`#1da1f2`}}>
                  <FaTwitter style={{color:'white', fontSize:`22px`, marginTop:`16px`, marginLeft:`16px`}}/>
                </div>
                </div>
                <div className="col mt-1"> <strong>0</strong> </div>
              </div> 
            </div>
            <div class="grid-item-MG ">
            <div className="row">
                <div className="col-2 ">
                <div className="Iconbg d-flex text-center" style={{backgroundColor:`#0072d0`}}>
                  <FaFacebookMessenger style={{color:'white', fontSize:`24px`, marginTop:`14px`, marginLeft:`14px`}}/>
                </div>
                </div>
                <div className="col mt-1"> <strong>0</strong> </div>
              </div>
            </div>
            <div class="grid-item-WA ">
            <div className="row">
                <div className="col-2 ">
                <div className="Iconbg d-flex text-center" style={{backgroundColor:`#25d366`}}>
                  <FaWhatsapp style={{color:'white', fontSize:`30px`, marginTop:`10px`, marginLeft:`12px`}}/>
                </div>
                </div>
                <div className="col mt-1"> <strong>0</strong> </div>
              </div>
              </div>
          </div>
          <div className="py-4">
            <div className="row d-flex te">
              <div className="col-md-2">
                <a href="">
                  <h6 className="" style={{color:`#3b5998`}}>Update Social Media</h6>
                </a>
              </div>
              <div className="col-md-3">
                <a href="">
                  <h6 className=" pt-1 pt-md-0" style={{color:`#3b5998`}}>Promote on Facebook <FiArrowUpRight/> </h6>
                </a>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default Stats_Analysis
