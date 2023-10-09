import React from "react"
import DataTable from "react-data-table-component"
import Avatar from '@components/avatar'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/referralstyle.css'

const RefTable = () => {

    // const status = {
    //     1: { title: 'Paid', color: 'light-success' },
    //     2: { title: 'Unpaid', color: 'badge light-danger' },
    //     3: { title: 'Rejected', color: 'light-warning' }
    //   }
    const data = [
        {  
          users: { name: "Manish Rathod", avatarUrl: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk", email:"manish23762@ggfl.com" },
          id: "5641",
          status: "Unpaid",
          value: "$9108.89",
          earnings: "$705.15"
        },
        { 
          users: {name: "Rahul Parker", avatarUrl: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", email:"rahul23sd2@dvfl.com"},
          id: "2547",
          status: "Paid",
          value: "$4538.89",
          earnings: "$985.65"
        },
        {
          users: {name: "Jhonny Sins", avatarUrl: "https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg", email:"jhonny8465@dfl.com"},
          id: "3845",
          status: "Rejected",
          value: "$4538.89",
          earnings: "$405.66"
        },
        {
          users: {name: "Gauri Singhade", avatarUrl: "https://placekitten.com/250/250", email:"gauri84756@fgdd.com"},
          id: "4486",
          status: "Paid",
          value: "$5743.89",
          earnings: "$355.95"
        }
      ]

  const columns = [
    {
      name: <span className=" fs-5 opacity-75">USERS</span>,
      selector: row => row.users,
      width:"350px",
      sortable: true,
      cell: (row) => {
        // Define a custom render function for the "Users" column
        return (
          <div className="d-flex ">
            <img className="rounded-circle" style={{height:"38px", width:"38px", marginTop:"8px"}} src={row.users.avatarUrl} alt={row.users.name} />
            <div>
              <p style={{ marginLeft: "8px", color:"#3767f0", marginBottom:"0px", marginTop:"8px", fontSize:"14px" }}>{row.users.name}</p>
              <p style={{ marginLeft: "8px", opacity:"0.6", marginBottom:"6px", fontSize:"12px" }}> {row.users.email} </p>
            </div>
          </div>
        )
      }
    },
    {
      name: <span className=" fs-5 opacity-75">REFERRED ID</span>,
      selector: row => row.id,
      sortable: true
    },
    {
      name: <span className=" fs-5 opacity-75">STATUS</span>,
      selector: row => row.status,
      sortable: true,
      cell: (row) => {
        // Define a custom render function for the "Status" column
        let badgeClassName = ""
        let statusText = ""

        switch (row.status) {
          case "Paid":
            badgeClassName = "badge BadgeColorGreen"
            statusText = "Paid"
            break
          case "Unpaid":
            badgeClassName = "badge BadgeColorYellow"
            statusText = "Unpaid"
            break
          case "Rejected":
            badgeClassName = "badge BadgeColorRed"
            statusText = "Rejected"
            break
          default:
            badgeClassName = "badge BadgeColorGrey"
            statusText = "Unknown"
        }

        return (
          <span className={badgeClassName}>{statusText}</span>
        )
      }
    },
    {
      name: <span className=" fs-5 opacity-75">VALUE</span>,
      selector: row => row.value,
      sortable: true
    },
    {
      name: <span className=" fs-5 opacity-75">EARNINGS</span>,
      selector: row => row.earnings,
      sortable: true
    }
  ]
 

  const customStyles = {
    rows: {
      style: {
        color:`grey`,
        fontSize:`14px`,
        fontWeight:"500"
      }
    }
  }

  return (
    <>
      <div className="table-container">
  <DataTable
    columns={columns}
    data={data}
    pagination
    paginationPerPage={5}
    paginationRowsPerPageOptions={[5, 10, 20]}
    paginationTotalRows={data.length}
    className="custom-datatable"
    customStyles={customStyles}
    selectableRows
  />
</div>
    </>
  )
}

export default RefTable
