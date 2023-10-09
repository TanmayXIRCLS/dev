import { useState, useEffect } from "react"
import { Card, CardBody, CardHeader, CardTitle, Col } from "reactstrap"
import { TfiEmail } from "react-icons/tfi"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { VscVerifiedFilled } from "react-icons/vsc"
import { CgProfile } from "react-icons/cg"
import "./style/ReviewStyle.css"
import StarRating from "./StarRating"

import apiData from "@src/@core/auth/api/api.json"

const Reviews = () => {
  const [widgetTabOpen, setWidgetTabOpen] = useState(true)
  const [permissionTabOpen, setPermissionTabOpen] = useState(false)
  const [emailTabOpen, setEmailTabOpen] = useState(false)
  const [emailReminderTabOpen, setEmailReminderTabOpen] = useState(false)
  const [rating] = useState(4)
  const [ratings] = useState([0, 2, 4, 3, 2])
  const [activeTab, setActiveTab] = useState('Widget')

  const [autoApproved, setAutoApproved] = useState(false)
  const [autoPublished, setAutoPublished] = useState(0)

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

  useEffect(async () => {
    const url1 = `${apiData.d_ngrok}/router/current-status/`
    const url2 = `${apiData.d_ngrok}/router/current-min/`

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
        })
    ])

    const autoApprovedData = await responses[0].json()
    setAutoApproved(autoApprovedData[0].auto_approve)

    const autoPublishedData = await responses[1].json()
    setAutoPublished(autoPublishedData[0].minimum_rating)
    console.table({ autoApprovedData, autoPublishedData })


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
            <li class="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === 'Widget' ? 'active' : ''}`}
                onClick={() => {
                  if (!widgetTabOpen) {
                    setWidgetTabOpen(true)
                    setPermissionTabOpen(false)
                    setEmailTabOpen(false)
                    setEmailReminderTabOpen(false)
                  }
                  setActiveTab('Widget')
                }}
              >
                <BiCommentDetail style={{ fontSize: "16px" }} />Widgets
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === 'Permission' ? 'active' : ''}`}
                onClick={() => {
                  if (!permissionTabOpen) {
                    setPermissionTabOpen(true)
                    setWidgetTabOpen(false)
                    setEmailTabOpen(false)
                    setEmailReminderTabOpen(false)
                  }
                  setActiveTab('Permission')
                }}
              >
                <FiSettings style={{ fontSize: "16px" }} />Permissions
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === 'Email tab' ? 'active' : ''}`}
                onClick={() => {
                  if (!emailTabOpen) {
                    setEmailTabOpen(true)
                    setPermissionTabOpen(false)
                    setWidgetTabOpen(false)
                    setEmailReminderTabOpen(false)

                  }
                  setActiveTab("Email tab")
                }}
              >

                <TfiEmail style={{ fontSize: "16px" }} />Emails
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === 'EmailReminder' ? 'active' : ''}`}
                onClick={() => {
                  if (!emailReminderTabOpen) {
                    setEmailReminderTabOpen(true)
                    setPermissionTabOpen(false)
                    setEmailTabOpen(false)
                    setWidgetTabOpen(false)
                  }
                  setActiveTab("EmailReminder")
                }}
              >
                <AiOutlineClockCircle style={{ fontSize: "16px" }} />Integrations
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* widget tab */}
      {widgetTabOpen && (
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
      {permissionTabOpen && (
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
      {emailTabOpen && (
        <Card className="email-tab-popup p-0">
          <CardBody>
            <h2 className="text-center">Email Tab</h2>
          </CardBody>
        </Card>
      )}
      {/* Email Reminder Tab */}
      {emailReminderTabOpen && (
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
    </>
  )
}

export default Reviews
