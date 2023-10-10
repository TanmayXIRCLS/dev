// import React from 'react'
import { React } from 'react'

import { Link } from 'react-router-dom'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const statusObj = {
    pending: 'light-warning',
    published: 'light-success'
}

const ProdReviewTable = () => {
    const data = [{ lead: 'JJ johnson', account: 'ABC', stage: 'published' }]
    // const data = []

    const Column = [
        {
            name: <span className='fw-bold h5'>Account Name</span>,
            width: '15rem',
            sortable: true,
            sortField: 'account',
            selector: row => row.account,
            // cell: row => (
            //     <p className='fs-6 fw-medium opacity-50 '>{row.name}</p>
            // )
        },
        {
            name: <span className='fw-bold h5'>Lead Name</span>,
            minWidth: '13rem',
            sortable: true,
            sortField: 'lead',
            selector: row => row.lead,
            // cell: row => (
            //     <p className='fs-6 fw-medium opacity-50 '>{row.name}</p>
            // )
        },
        {
            name: <span className='fw-bold h5'>Stage</span>,
            minWidth: '10rem',
            sortable: true,
            selector: row => row.stage,
            // cell: row => (
            //     <div className='d-flex flex-column mt-1'>
            //         <div style={{marginBottom:'5px'}}>
            //         <FaStar size={21} color='#ff9f43'/>
            //         <FaStar size={21} color='#ff9f43'/>
            //         <FaStar size={21} color='#4b465c33'/>
            //         <FaStar size={21} color='#4b465c33'/>
            //         <FaStar size={21} color='#4b465c33'/>
            //         </div>
            //         <p className="h6" style={{marginBottom:'5px', fontSize:"14px"}}>{row.review}</p>
            //         <small >{row.reviewdesc}</small>
            //     </div>
            // )

        },
        {
            name: <span className='fw-bold h5'>ACTION</span>,
            width: '7rem',
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
                                to={`/apps/user/view/${row.id}`}
                            // onClick={() => store.dispatch(getUser(row.id))}
                            >
                                <FileText size={14} className='me-50' />
                                <span className='align-middle'>Details</span>
                            </DropdownItem>
                            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                                <Archive size={14} className='me-50' />
                                <span className='align-middle'>Edit</span>
                            </DropdownItem>
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

    return (
        <>
            <div className='react-dataTable mt-1 border-top'
                style={{ paddingTop: "4px" }}
            >
                <DataTable
                    noHeader
                    data={data}
                    columns={Column}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                // selectableRows
                //   paginationRowsPerPageOptions={[10, 25, 50, 100]}
                />
            </div>
        </>
    )
}

export default ProdReviewTable