import React, { useState } from "react"
import { Card, Table } from "react-bootstrap"
import { CardBody, CardHeader, CardTitle } from "reactstrap"
import { RiArrowDropDownLine } from "react-icons/ri"
import { BiDownload } from "react-icons/bi"
import RefTable from "./RefTable"

const Referred_Users_Table = () => {
  const [iconFlipped, setIconFlipped] = useState(false)
  console.log(iconFlipped)

  const handleClick = (e, msg) => {
    e.preventDefault()
    alert(msg)
  }
  return (
    <>
      <Card>
        <CardBody>
          {/* Head */}
          <div className="row d-flex Headborder">
            <div className="col">
              <h5
                class="card-title text-nowrap mb-sm-2 mb-1 mt-1 text-center text-sm-start CardHead"
                style={{ fontSize: `17px` }}
              >
                Referred users
              </h5>
            </div>
            <div className="col d-flex justify-content-sm-end justify-content-center">
              <div className="row d-flex justify-content-evenly">
                {/* label */}
                {/* <div className="col">
                  <label className="LabelStyle">
                    <select
                      name="DataTables_Table_0_length"
                      aria-controls="DataTables_Table_0"
                      class="form-select"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div> */}
                {/* button */}
                <div className="col py-1 py-sm-0 ">
                  <button
                    class="btn btnborder buttons-collection dropdown-toggle btn-label-secondary "
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    style={{ paddingBottom: "6px", paddingTop: "6px" }}
                    data-bs-toggle="dropdown"
                    onClick={() => { setIconFlipped(!iconFlipped) }}
                  >
                    <BiDownload
                      style={{
                        marginRight: `2px`,
                        height: "30px",
                        fontSize: "20px"
                      }}
                    />
                    <span>Export</span>
                      <RiArrowDropDownLine className={`${iconFlipped ? "IconIsFlipped" : "IconIsNotFlipped"}`}
                        style={{ marginLeft: "2px", fontSize: "24px" }}
                      />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    onClick={() => { setIconFlipped(!iconFlipped) }}
                  >
                    <li>
                      <a class="dropdown-item" href="#" onClick={(e) => { handleClick(e, "Print") }}>
                        {" "}
                        Print
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" id="csvOption" onClick={(e) => { handleClick(e, "CSV") }}>
                        CSV
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" id="pdfOption" onClick={(e) => { handleClick(e, "PDF") }}>
                        PDF
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" id="copyOption" onClick={(e) => { handleClick(e, "COPY") }}>
                        Copy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <RefTable />
        </CardBody>
      </Card>
    </>
  )
}

export default Referred_Users_Table
