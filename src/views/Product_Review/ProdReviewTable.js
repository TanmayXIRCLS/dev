// import React from 'react'
import { React, useEffect, useState } from 'react'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import { BiUpvote, BiDownvote } from "react-icons/bi"
import DataTable from 'react-data-table-component'
// import { Input } from 'reactstrap'

// ** Reactstrap Imports
// import { Card, CardHeader, CardTitle } from 'reactstrap'
import { tableResponsive } from './../tables/reactstrap/TableSourceCode';

// ** React Imports
import { Link } from 'react-router-dom'
// import DataTable from 'react-data-table-component'
// import ProdReviewTable from './ProdReviewTable'

// ** Custom Components
import Avatar from '@components/avatar'
// import AvatarImg from './12-small.png'
import img from './product-9.png'

import { FaStar } from 'react-icons/fa'

// ** Store & Actions
// import { store } from '@store/store'
// import { getUser, deleteUser } from '../store'

// ** Icons Imports
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import apiData from "@src/@core/auth/api/api.json"

const ProdReviewTable = (props) => {
    const { reviewType } = props
    // const BootStrapCheckbox = forwardRef((props, ref) => {
    //     <div className='form-check'>
    //         <Input type='checkbox' ref={ref} {...props}/>
    //     </div>
    // })
    const [reviewsArray, setReviewsArray] = useState({ reviews: [], filerReviews: [] })
    const [reviewData, setReviewData] = useState([])
    const [authorized, setAuthorized] = useState(false)

    const statusObj = {
        pending: 'light-warning',
        published: 'light-success'
    }

    const renderClient = row => {
        if (row.avatar) {
            return <Avatar alt="Gisela Leppard" src="/static/images/avatar/1.jpg" width='32' height='32' />
            // return <img src={AvatarImg} className='me-1' width='32' height='32'/>
        } else {
            return (
                <Avatar
                    initials
                    className='me-1'
                    color={row.avatarColor || 'light-primary'}
                    content={row.name || 'Gisela Leppard'}
                />
            )
        }
    }

    // const customStyles = {
    //     cells: {
    //         0: { // Index of the column you want to style (0-based index)
    //             style: {
    //                 backgroundColor: 'lightcoral !important' // Change the color to your desired color
    //             }
    //         }
    //     }
    // }

    const Column = [
        {
            name: <span className='fw-bold h5'>PRODUCT</span>,
            width: '18rem',
            sortable: true,
            sortField: 'product',
            selector: row => row.product,
            cell: row => (
                <div className=' my-1 d-flex align-items-center gap-1'>
                    <img src={row.productImg} alt="" style={{ width: '20%', height: "auto" }} />
                    <div  >
                        <span className='fw-medium' style={{ fontSize: '14px' }}>{row.product}</span>
                        <small className='text-muted mb-0 w-75'>{row.productDesc}</small>
                    </div>
                </div>
            )
        },
        {
            name: <span className='fw-bold h5'>REVIEWER</span>,
            sortable: true,
            width: "16rem",
            sortField: 'reviewer',
            selector: row => row.reviewer,
            cell: row => (
                <div className='d-flex justify-content-left align-items-center'>
                    {renderClient(row)}
                    <div className='d-flex flex-column'>
                        <Link
                            to={`/apps/user/view/${row.id}`}
                            className='user_name text-truncate text-body'
                        // onClick={() => store.dispatch(getUser(row.id))}
                        >
                            <span className='fw-medium' style={{ fontSize: '14px', color: "#7367f0" }}>{row.name}</span>
                        </Link>
                        <small className='text-truncate text-muted mb-0'>{row.email}</small>
                    </div>
                </div>

            )
        },
        {
            name: <span className='fw-bold h5'>REVIEW</span>,
            sortable: true,
            sortField: 'rating',
            // width: '10rem',
            selector: row => row.review,
            cell: row => (
                <div className='d-flex flex-column mt-1'>
                    <div style={{ marginBottom: '5px' }}>
                        {Array.from({ length: row.rating }).map((_, index) => (
                            <FaStar key={index} size={21} color='#ff9f43' />
                        ))}
                        {Array.from({ length: 5 - row.rating }).map((_, index) => (
                            <FaStar key={index} size={21} color='#4b465c33' />
                        ))}
                    </div>
                    <p className="h6" style={{ marginBottom: '5px', fontSize: "14px" }}>{row.review}</p>

                </div>
            )

        },
        {
            name: <span className='fw-bold h5'>DATE</span>,
            sortable: true,
            // width: "15rem",
            selector: row => row.date,
            sortField: 'dater',
            cell: row => (
                <span className='h5'>{row.date}</span>
            )
        },
        {
            name: <span className='fw-bold h5'>STATUS</span>,
            sortable: true,
            sortField: 'status',
            selector: row => row.state,
            cell: row => (
                row.state ? (
                    <p className=" text-success" style={{ width: "9rem" }}>Approved</p>
                ) : (
                    <p className=" text-danger" style={{ width: "9rem" }}>Pending</p>
                )
            )
        },
        {
            name: <span className='fw-bold h5'>Votes</span>,
            sortable: true,
            sortField: 'votes',
            selector: row => row.votes,
            cell: row => (
                <div className=' d-flex justify-content-between align-items-center gap-1'>
                    {/* {row.likes.length + row.dislikes.length} */}
                    <BiUpvote size={20} color='green' />
                    {row.likes.length}
                    <BiDownvote size={20} color='red' />
                    {row.dislikes.length}
                </div>
            )
        },
        {
            name: <span className='fw-bold h5'>ACTION</span>,
            width: "7rem",
            cell: row => (
                <div className='column-action'>
                    <UncontrolledDropdown>
                        <DropdownToggle tag='div' className='btn btn-sm'>
                            <MoreVertical size={14} className='cursor-pointer' />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem
                                tag={Link}
                                className='w-100'
                                to={`/merchant/product-review`}
                                onClick={() => handleAuthorizeReview(row.id, row.state)}
                            >
                                <FileText size={14} className='me-50' />
                                <span className='align-middle'>{row.state ? "Unauthorise" : "Authorise"}</span>
                            </DropdownItem>
                            {/* <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                                <Archive size={14} className='me-50' />
                                <span className='align-middle'>Edit</span>
                            </DropdownItem> */}
                            <DropdownItem
                                tag='a'
                                href='/'
                                className='w-100'
                                onClick={e => {
                                    e.preventDefault()
                                    // store.dispatch(deleteUser(row.id))
                                }}
                            >
                                <Trash2 size={14} className='me-50' />
                                <span className='align-middle'>Delete</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            )
        }
    ]

    const reviewData2 = [
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "25 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "25 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "25 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 4, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." },
        { name: 'Gisela Leppard', product: 'Air Jordan', productDesc: 'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", rating: 3, review: "Ut mauris", reviewdesc: "Fusce consequat. Nulla nisl. Nunc nisl." }
    ]

    const handleAuthorizeReview = async (review_id, status) => {
        try {
            const response = await fetch(
                `${apiData.d_ngrok}/review/authorize/${review_id}/`,
                {
                    method: "POST",
                    headers: {
                        "Authorization-Action": status ? "unauthorize" : "authorize"
                    }
                }
            );
            // window.location.reload(true)
            if (!response.ok) {
                throw new Error(`Authorization failed due to:${response.status} `);
            }
            console.log("Authorization successful!");
            setAuthorized(!authorized)
        } catch (error) {
            console.error("Authorizing error: ", error);
        }
    }

    useEffect(() => {
        console.log("fetch useEffect")
        function formatDate(dateString) {
            const options = { year: "numeric", month: "short", day: "2-digit" };
            const formattedDate = new Date(dateString).toLocaleDateString(
                undefined,
                options
            );
            return formattedDate;
        }
        fetch(`${apiData.d_ngrok}/router/reviews/`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': true,
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok')
                }
                return resp.text()
            })
            .then(data => {
                // console.log("reviews", data)

                const jsonData = JSON.parse(data)
                const reviewList = jsonData?.map(ele => {
                    return {
                        name: ele.custName,
                        product: ele.productName,
                        productImg: ele.productImageUrl,
                        productDesc: "",
                        state: ele.state,
                        votes: ele.votes,
                        id: ele.id,
                        email: ele.email,
                        date: formatDate(ele.created_at),
                        rating: ele.rating,
                        review: ele.review,
                        reviewdesc: ele.review,
                        likes: ele.review_likes,
                        dislikes: ele.dislikes
                    }

                })
                setReviewData(reviewList.reverse())
                setReviewsArray({ reviews: reviewList.reverse(), filerReviews: reviewList.reverse() })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [authorized])

    useEffect(() => {
        console.log("filter useEffect")
        if (reviewType === "All") {
            setReviewsArray({ ...reviewsArray, filerReviews: reviewsArray.reviews })
        } else if (reviewType === "Published") {
            const fList = reviewData.filter(ele => {
                return ele.state === true
            })
            setReviewsArray({ ...reviewsArray, filerReviews: fList })
        } else {
            const fList = reviewData.filter(ele => {
                return ele.state === false
            })
            setReviewsArray({ ...reviewsArray, filerReviews: fList })
        }

        console.log("reviewsArray", reviewsArray)
    }, [reviewType])

    return (
        <>
            <div className="dataTableContainer">
                <DataTable
                    width="100%"
                    data={reviewsArray.filerReviews}
                    columns={Column}
                    // customStyles={customStyles}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    selectableRows
                    paginationRowsPerPageOptions={[10, 25, 50, 100]}
                    tableResponsive
                />
            </div>
        </>
    )
}

export default ProdReviewTable