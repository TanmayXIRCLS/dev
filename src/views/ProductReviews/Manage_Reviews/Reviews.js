import { useState, useEffect } from "react"
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap"
import { TfiEmail } from "react-icons/tfi"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { FiSettings, FiEdit } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import { VscVerifiedFilled } from "react-icons/vsc"
import { CgProfile } from "react-icons/cg"
import StarRating from "./StarRating"
import "./style/ReviewStyle.css"

import Star from "../../Assets/default-star.svg"
import Heart from "../../Assets/default-heart.svg"
import Smiley from "../../Assets/default-smiley.svg"
import blankStar from "../../Assets/blank-star.svg"
import blankHeart from "../../Assets/blank-heart.svg"
import blankSmiley from "../../Assets/blank-smiley.svg"

import blueTick from "../../Assets/blue-tick.svg"
import arrowUp from "../../Assets/arrow-up.svg"
import arrowDown from "../../Assets/arrow-down.svg"

import apiData from "@src/@core/auth/api/api.json"
import ColorsInput from "../components/ColorsInput"
import NumberInput from "../components/NumberInput"

const Reviews = () => {
  const initialState = { widgetTab: false, permissionTab: false, emailTab: false, emailReminderTab: false, customTab: false }
  const [openTab, setOpenTab] = useState({ ...initialState, customTab: true })
  const [customStyle, setCustomStyle] = useState({ primaryColor: "#000", secondaryColor: "#fd7e97", backgroundColor: "#f3ecec", fontSize: 15, fontColor: "#000", borderColor: "#000", borderSize: 0, borderRadius: 10, defaultRating: Star, blankRating: blankStar })
  const [styleDropDown, setStyleDropDown] = useState({ basic: true, font: true, border: true, rating: true })
  const [rating] = useState(4)
  const [ratings] = useState([0, 2, 4, 3, 2])

  const [autoApproved, setAutoApproved] = useState(false)
  const [autoPublished, setAutoPublished] = useState(0)
  const [anonymousLikes, setAnonymousLikes] = useState(false)

  // const handleRatingChange = (newRating, index) => {
  //   const newRatings = [...ratings]
  //   newRatings[index] = newRating
  //   // setRatings(newRatings)
  // }

  const renderReviews = () => {
    const reviews = [
      {
        name: "Rajeev Tikekar",
        date: "Yesterday",
        comment: "Tex Chinos"
      },
      {
        name: "Shruti Jain",
        date: "2 months ago",
        comment: "Best Service I've ever got... keep it up"
      },
      {
        name: "Sahil Modak",
        date: "5 months ago",
        comment: "One of the Best"
      },
      {
        name: "Poorva Jain",
        date: "8 months ago",
        comment: "Customer service superb"
      },
      {
        name: "Rajeev Tikekar",
        date: "10 months ago",
        comment: "Tex Chinos"
      },
      {
        name: "Simon Kaur",
        date: "12 months ago",
        comment: "Very Bad"
      }
    ]

    return reviews.map((review, index) => (
      <div key={index} className="col-lg-4">
        <Card className="CardHeight">
          <CardBody>
            <div className="row">
              <div className="col-md-8 col-4 text-nowrap">
                <CgProfile
                  style={{
                    fontSize: "28px",
                    marginRight: "4px",
                    marginBottom: "5px"
                  }}
                />
                <span className="fw-bold">{review.name}</span>
                <VscVerifiedFilled
                  style={{
                    color: "#4FB6EC",
                    fontSize: "16px",
                    marginBottom: "4px",
                    marginLeft: "2px"
                  }}
                />
              </div>
              <div className="col-md-4 col-8 text-end text-nowrap">
                <span className="ReviewPeriod">{review.date}</span>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-lg-6 fw-bold">{review.comment}</div>
              <div className="col-lg-6 d-flex justify-content-end">
                <StarRating
                  rating={ratings[index]}
                // onRatingChange={(newRating) => handleRatingChange(newRating, index)}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    ))
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa ${i <= rating ? "fa-star" : "fa-star-o"}`}
        ></i>
      )
    }
    return stars
  }

  const handleAutoApproved = async () => {
    console.log("toggle")
    setAutoApproved(!autoApproved)
    try {
      const response = await fetch(
        `${apiData.d_ngrok}/toggle-status/`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`Authorization failed due to:${response.status} `);
      }
      console.log("Authorization successful!");
    } catch (error) {
      console.error("Authorizing error: ", error);
    }

  }

  const handleAnonymousLikes = async () => {
    try {
      const response = await fetch(
        `${apiData.d_ngrok}/toggle-like-config/`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`Authorization failed due to:${response.status} `);
      }
      setAnonymousLikes(!anonymousLikes)
      console.log("Anonymous Likes successful!");
    } catch (error) {
      console.error("Authorizing error: ", error);
    }
  }

  const handleSubmit = async () => {
    const form_data = new FormData()
    form_data.append('minimum_rating', autoPublished)
    try {
      const response = await fetch(
        `${apiData.d_ngrok}/update-rating/`,
        {
          method: "POST",
          body: form_data
        }
      );

      if (!response.ok) {
        throw new Error(`Authorization failed due to:${response.status} `);
      }
      console.log("Authorization successful!");
    } catch (error) {
      console.error("Authorizing error: ", error);
    }
  }

  const handleStyling = (e) => {
    setCustomStyle({ ...customStyle, [e.target.name]: e.target.value })
  }

  const handleRatingStyle = (e) => {
    const selectedValue = e.target.value
    let defaultRating, blankRating
    if (selectedValue === 'Star') {
      defaultRating = Star;
      blankRating = blankStar;
    } else if (selectedValue === 'Heart') {
      defaultRating = Heart;
      blankRating = blankHeart;
    } else if (selectedValue === 'Smiley') {
      defaultRating = Smiley;
      blankRating = blankSmiley;
    }
    setCustomStyle({ ...customStyle, defaultRating, blankRating })
  }

  const submitCustomStyle = () => {
    const form_data = new FormData()
    form_data.append("uid", "bb8f4c53cb0b5e19")
    for (const item in customStyle) {
      form_data.append(item, customStyle[item])
    }
    try {
      fetch(`${apiData.d_ngrok}/store-styles/`,
        {
          method: "POST",
          body: form_data
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Authorization failed due to:${response.status} `)
          }
          console.log("Send Successful")
        })
    } catch (error) {
      console.error("Authorizing error: ", error);
    }
  }

  useEffect(async () => {
    const url1 = `${apiData.d_ngrok}/router/current-status/`
    const url2 = `${apiData.d_ngrok}/router/current-min/`
    const url3 = `${apiData.d_ngrok}/router/anonymous-status/`
    const url4 = `${apiData.d_ngrok}/router/card-styles/`

    const responses = await Promise.all([
      fetch(url1,
        {
          method: "GET",
          headers: {
            'ngrok-skip-browser-warning': true,
          }
        }),
      fetch(url2,
        {
          method: "GET",
          headers: {
            'ngrok-skip-browser-warning': true,
          }
        }),
      fetch(url3,
        {
          method: "GET",
          headers: {
            'ngrok-skip-browser-warning': true,
          }
        }),
      fetch(url4,
        {
          method: "GET",
          headers: {
            'ngrok-skip-browser-warning': true,
          }
        })
    ])

    const autoApprovedData = await responses[0].json()
    setAutoApproved(autoApprovedData[0].auto_approve)

    const autoPublishedData = await responses[1].json()
    setAutoPublished(autoPublishedData[0].minimum_rating)

    const anonymousLikesData = await responses[2].json()
    setAnonymousLikes(anonymousLikesData[0]["use_user_auth"])

    const customStyleData = await responses[3].json()
    console.log("customStyleData", customStyleData)
    setCustomStyle({ primaryColor: customStyleData[0].primary_color, secondaryColor: customStyleData[0].secondary_color, backgroundColor: customStyleData[0].background_color, fontSize: customStyleData[0].font_size, fontColor: customStyleData[0].font_color, borderColor: customStyleData[0].border_color, borderSize: customStyleData[0].border_size, borderRadius: customStyleData[0].border_radius })

    console.table({ autoApprovedData, autoPublishedData, anonymousLikes })



  }, [])

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Manage Settings</CardTitle>
        </CardHeader>
      </Card>
      <div class="row d-flex justify-content-evenly ">
        <div class="col-md-12">
          <ul class="nav nav-pills flex-column flex-sm-row" role="tablist">
            <li className={`nav-item nav-link ${openTab.widgetTab ? 'active' : ''}`} onClick={() => {
              setOpenTab({ ...initialState, widgetTab: true })
            }} role="presentation">

              <BiCommentDetail style={{ fontSize: "16px" }} />Widgets

            </li>
            <li class={`nav-item nav-link ${openTab.permissionTab ? 'active' : ''}`} onClick={() => {
              setOpenTab({ ...initialState, permissionTab: true })
            }} role="presentation">
              <FiSettings style={{ fontSize: "16px" }} />Permissionsx
            </li>
            <li class={`nav-item nav-link ${openTab.emailTab ? 'active' : ''}`} onClick={() => {
              setOpenTab({ ...initialState, emailTab: true })
            }} role="presentation">

              <TfiEmail style={{ fontSize: "16px" }} />Emails
            </li>
            <li class={`nav-item nav-link ${openTab.emailReminderTab ? 'active' : ''}`} onClick={() => {
              setOpenTab({ ...initialState, emailReminderTab: true })
            }} role="presentation">

              <AiOutlineClockCircle style={{ fontSize: "16px" }} />Integrations

            </li>
            <li class={`nav-item nav-link ${openTab.customTab ? 'active' : ''}`} onClick={() => {
              setOpenTab({ ...initialState, customTab: true })
            }} role="presentation">
              <FiEdit style={{ fontSize: "16px" }} />Custom
            </li>
          </ul>
        </div>
      </div>

      {/* widget tab */}
      {openTab.widgetTab && (
        <>
          <Card>
            <CardBody className="text-center">
              <h5 className="row fs-4 d-flex justify-content-center fw-bolder"
                style={{ paddingBottom: "6px" }}
              >
                Customer Reviews
              </h5>
              <div className="star-rating">
                {renderStars()}
                <span style={{ fontSize: "12px", marginLeft: "6px", fontWeight: "500" }}>
                  {rating} out of 5
                </span>
              </div>
              <div
                className="pb-1"
                style={{ fontSize: "12px", fontWeight: "bold", paddingTop: "4px" }}
              >
                Based on 2 Reviews
              </div>
              <div
                className="HeadReview text-nowrap"
                style={{
                  paddingTop: "5.5px",
                  paddingBottom: "1px",
                  marginLeft: "50px",
                  marginRight: "50px",
                  marginBottom: "0px"
                }}
              >
                <h4
                  style={{ color: "white", fontSize: "13px" }}
                >
                  <span className="NoSelect">Write a review</span>
                </h4>
              </div>
            </CardBody>
          </Card>
          {/* <Card>
          <CardBody>

          </CardBody>
        </Card> */}

          <div className="row d-grid-col justify-content-evenly" style={{ overflow: "hidden", overflowY: "auto" }}>
            {renderReviews()}
          </div>

        </>
      )}

      {/* permission */}
      {openTab.permissionTab && (
        <Card className="permission-tab-popup p-0 mx-auto" style={{ maxWidth: "400px" }}>
          <CardBody className="text-start">
            <div className="row d-flex text-warp text-md-nowarp ">
              <div className="col-sm-8 col-8 d-flex justify-content-start ">
                <h4 className="PermissionFont py-1">
                  Auto-approve review submissions
                </h4>
              </div>
              <div class="col-sm-4 col-4  form-check form-switch my-1 d-flex justify-content-end">
                <input
                  class="tgglSize form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={() => {
                    console.log("to")
                    handleAutoApproved()
                  }}
                  checked={autoApproved}
                />
              </div>
            </div>
            <div className="row d-flex text-warp text-md-nowarp ">
              <div className="col-sm-8 col-8 d-flex justify-content-start ">
                <h4 className="PermissionFont py-1">Allow anonymous reviews</h4>
              </div>
              <div class="col-sm-4 col-4  form-check form-switch my-1 d-flex justify-content-end">
                <input
                  class="tgglSize form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="row d-flex text-warp text-md-nowarp ">
              <div className="col-sm-8 col-8 d-flex justify-content-start ">
                <h4 className="PermissionFont py-1">
                  Allow anonymous Likes
                </h4>
              </div>
              <div class="col-sm-4 col-4  form-check form-switch my-1 d-flex justify-content-end">
                <input
                  class="tgglSize form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={handleAnonymousLikes}
                  checked={anonymousLikes}
                />
              </div>
            </div>
            <div className="row d-flex text-warp text-md-nowarp ">
              <div className="col-sm-8 col-8 d-flex justify-content-start ">
                <h4 className="PermissionFont py-1 ">Display ‘Verified’ tag</h4>
              </div>
              <div class="col-sm-4 col-4  form-check form-switch my-1 d-flex justify-content-end">
                <input
                  class="tgglSize form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className={`row d-flex ${autoApproved ? "nonClickableDiv" : ""}`}>
              <div className="col d-flex justify-content-start ">
                <h4 className="PermissionFont py-1">
                  Auto-publish reviews that are {autoPublished} stars & above
                </h4>
              </div>
              <div className="col d-flex justify-content-end p-0">
                <select
                  className="my-1 me-1 ps-1"
                  style={{ width: "50px", height: "20px" }}
                  onChange={(e) => setAutoPublished(e.target.value)}
                  value={autoPublished}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className=" d-flex justify-content-end">
              <button className={`btn btn-primary ${autoApproved ? "nonClickableDiv" : ""}`} onClick={() => handleSubmit()}>Save</button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* email tab */}
      {openTab.emailTab && (
        <Card className="email-tab-popup p-0">
          <CardBody>
            <h2 className="text-center">Email Tab</h2>
          </CardBody>
        </Card>
      )}

      {/* Email Reminder Tab */}
      {openTab.emailReminderTab && (
        <div className="row emailReminder-tab-popup p-0">
          {/* customer */}
          <div className="col-md">
            <Card className="customer-tab-popup p-0">
              <CardBody>
                <h5 className="fw-bolder">Send XX email reminders</h5>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  1st reminder XX days after product delivery
                </p>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  2nd reminder XX days after product delivery
                </p>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  3rd reminder XX days after product delivery
                </p>
              </CardBody>
            </Card>
          </div>
          {/* Admin */}
          <div className="col-md">
            <Card className="Equal-Card admin-tab-popup p-0">
              <CardBody>
                <div>
                  <div>
                    <h4 className="fs-5 text-nowarp fw-bolder">
                      New review notification
                    </h4>
                  </div>
                  <div class="col form-check form-switch my-1 ">
                    <input
                      class="tgglSize form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <div>
                    <h6 style={{ fontSize: "11px", color: "grey", opacity: "0.8" }}>
                      Get email notice when product gets a new review
                    </h6>
                  </div>
                </div>

              </CardBody>
            </Card>
          </div>
        </div>
      )}

      {/* Custom Tab */}
      {openTab.customTab && (
        <Row className="" >
          <Col md="6">
            <div style={{ margin: "20px", padding: "20px", color: `${customStyle.fontColor}`, backgroundColor: `${customStyle.backgroundColor}`, border: `${customStyle.borderSize}px solid ${customStyle.borderColor}`, borderRadius: `${customStyle.borderRadius}px` }}>
              <div className=" d-flex justify-content-between align-items-center ">
                <div className=" d-flex justify-content-center align-items-center gap-1">
                  <img src={customStyle.defaultRating} alt="star" />
                  <img src={customStyle.defaultRating} alt="star" />
                  <img src={customStyle.defaultRating} alt="star" />
                  <img src={customStyle.defaultRating} alt="star" />
                  <img src={customStyle.blankRating} alt="blank" />
                </div>
                <p className="m-0" style={{ color: `${customStyle.fontColor}` }}>Yesterday</p>
              </div>

              <div className=" d-flex align-items-center" style={{ gap: "5px", marginTop: "8px", marginBottom: "20px" }}>
                <div className=" d-flex justify-content-center align-items-center" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: `${customStyle.secondaryColor}`, color: "#FFF" }}><span>JD</span></div>
                <h4 className=" m-0" style={{ fontWeight: "900", color: `${customStyle.fontColor}` }}>Rajeev Tikekar</h4>
                <img
                  src={blueTick}
                  alt="Blue Tick"
                  class="blue-tick"
                />
              </div>

              <p style={{ fontSize: `${customStyle.fontSize}px`, color: `${customStyle.fontColor}` }}>
                Best Service I've ever got... keep it up Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos, minus iusto! Veniam atque
                porro ipsa nobis adipisci vel facilis, laborum quidem amet eveniet
                vero maiores aliquid minus ut natus? Tempore.
              </p>

              <div className=" d-flex justify-content-end align-items-start" style={{ gap: "5px" }}>

                <button className=" bg-transparent pointer-event border-0 ">
                  <img src={arrowUp} alt="arrow up" />
                </button>

                <p>3</p>

                <button className=" bg-transparent pointer-event border-0 ">
                  <img src={arrowDown} alt="arrow down" />
                </button>

                <p>2</p>
              </div>
            </div>
          </Col>

          <Col md="6">
            <Card style={{ height: "60vh", overflowY: "scroll" }}>
              <CardBody className=" position-relative pt-0">
                <div className=" bg-white d-flex justify-content-between align-items-center pt-1 mb-2 position-sticky top-0 z-1">
                  <h3>Custom Form</h3>
                  <button className=" btn btn-primary" onClick={submitCustomStyle}>Save</button>
                </div>
                <div className=" d-flex justify-content-between align-items-center gap-1 mb-1" onClick={() => setStyleDropDown({ ...styleDropDown, basic: !styleDropDown.basic })}>
                  <h4 className="m-0" style={{ cursor: "pointer" }}>Basic</h4>
                  <IoIosArrowDown size={20} />
                </div>
                <div className={`styleDrop ${styleDropDown.basic ? " styleDropDown mb-4" : " styleDropUp mb-1"}`}>
                  <ColorsInput title="Primary Color" name='primaryColor' value={customStyle.primaryColor} handleStyling={handleStyling} />
                  <ColorsInput title="Secondary Color" name='secondaryColor' value={customStyle.secondaryColor} handleStyling={handleStyling} />
                  <ColorsInput title="Background Color" name='backgroundColor' value={customStyle.backgroundColor} handleStyling={handleStyling} />
                </div>

                <div className=" d-flex justify-content-between align-items-center gap-1 mb-1" onClick={() => setStyleDropDown({ ...styleDropDown, font: !styleDropDown.font })}>
                  <h4 className="m-0" style={{ cursor: "pointer" }}>Font</h4>
                  <IoIosArrowDown size={20} />
                </div>
                <div className={`styleDrop ${styleDropDown.font ? " styleDropDown mb-4" : " styleDropUp mb-1"}`}>
                  <NumberInput title="Font Size" name='fontSize' value={customStyle.fontSize} handleStyling={handleStyling} min={10} max={20} />
                  <ColorsInput title="Font Color" name='fontColor' value={customStyle.fontColor} handleStyling={handleStyling} />
                </div>

                <div className=" d-flex justify-content-between align-items-center gap-1 mb-1" onClick={() => setStyleDropDown({ ...styleDropDown, border: !styleDropDown.border })}>
                  <h4 className="m-0" style={{ cursor: "pointer" }}>Border</h4>
                  <IoIosArrowDown size={20} />
                </div>
                <div className={`styleDrop ${styleDropDown.border ? " styleDropDown mb-4" : " styleDropUp mb-1"}`}>
                  <ColorsInput title="Border Color" name='borderColor' value={customStyle.borderColor} handleStyling={handleStyling} />
                  <NumberInput title="Border Size" name='borderSize' value={customStyle.borderSize} handleStyling={handleStyling} min={0} max={10} />
                  <NumberInput title="Border radius" name='borderRadius' value={customStyle.borderRadius} handleStyling={handleStyling} min={0} max={30} />
                </div>

                <div className=" d-flex justify-content-between align-items-center gap-1 mb-1" onClick={() => setStyleDropDown({ ...styleDropDown, rating: !styleDropDown.rating })}>
                  <h4 className="m-0" style={{ cursor: "pointer" }}>Rating</h4>
                  <IoIosArrowDown size={20} />
                </div>
                <div className={`styleDrop ${styleDropDown.rating ? " styleDropDown mb-4" : " styleDropUp mb-1"}`}>
                  <select className="form-control mb-1 mx-0 w-75" onChange={(e) => handleRatingStyle(e)}>
                    <option className="p-1" value="Star">Star</option>
                    <option className="p-1" value="Heart">Heart</option>
                    <option className="p-1" value="Smiley">Smiley</option>
                  </select>
                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>
      )}
    </>
  )
}

export default Reviews
