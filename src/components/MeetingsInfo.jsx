import React from 'react'
import { MdOutlineTextSnippet } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import { FaClock } from "react-icons/fa";


function MeetingsInfo() {
  return (
    <div>
      <div className="HrEmployee-container-main" style={{ marginTop: "50px" }}>

        <div className="candidate-container-AppInfo">

          <div className="meeting-container-AppInfo-title">
            <h5>Today Interview Meetings Info</h5>
            <HiDotsVertical />
          </div>
          <hr />

          <div style={{ display: "flex", overflow: "auto" }}>

            <div className='meeting-container-AppInfo-candidate1'>

              <div className='meeting-container-AppInfo-candidate1-box'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "50px" }}>
                  {/* <div style={{height:"100px",width:"100px",border:"black 1px solid",borderRadius:"50px"}}> */}
                  <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                  {/* </div> */}
                  <p>John Smith</p>
                  <p style={{ fontSize: "small" }}>Senior Python Developer</p>
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: "2px solid black", paddingRight: "20px" }}>
                    <CiCalendarDate style={{ fontSize: '2em', backgroundColor: "white" }} />
                    <p style={{ fontSize: "small" }}>19th Feb 2024</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <FaClock style={{ fontSize: '2em', backgroundColor: "white" }} />
                    <p style={{ fontSize: "small" }}>10:30 AM</p>
                  </div>
                </div>
              </div>

              <div className='meeting-container-AppInfo-candidate1-box2'>
                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "100px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                  <button style={{ fontSize: "small", fontWeight: "bold", margin: "5px", color: "blue", backgroundColor: "transparent", border: "2px blue solid", padding: "2.5px", borderRadius: "10px" }}>Reshedule Meeting</button>
                  <button style={{ margin: "5px", color: "white", backgroundColor: "blue", border: "none", padding: "3px", borderRadius: "10px" }}>Join Meeting</button>
                </div>
              </div>
            </div>

            <div className='meeting-container-AppInfo-candidate1'>

              <div className='meeting-container-AppInfo-candidate1-box'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "50px" }}>
                  {/* <div style={{height:"100px",width:"100px",border:"black 1px solid",borderRadius:"50px"}}> */}
                  <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                  {/* </div> */}
                  <p>John Smith</p>
                  <p style={{ fontSize: "small" }}>Senior Python Developer</p>
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: "2px solid black", paddingRight: "20px" }}>
                    <CiCalendarDate style={{ fontSize: '2em', backgroundColor: "white" }} />
                    <p style={{ fontSize: "small" }}>19th Feb 2024</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <FaClock style={{ fontSize: '2em', backgroundColor: "white" }} />
                    <p style={{ fontSize: "small" }}>10:30 AM</p>
                  </div>
                </div>
              </div>

              <div className='meeting-container-AppInfo-candidate1-box2'>
                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "35px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", gap: "100px", paddingLeft: "5px", paddingTop: "10px", paddingBottom: "10px" }}>
                  <p>1st Level: 7/10</p>
                  <p>Interviewer: Stella</p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                  <button style={{ fontSize: "small", fontWeight: "bold", margin: "5px", color: "blue", backgroundColor: "transparent", border: "2px blue solid", padding: "2.5px", borderRadius: "10px" }}>Reshedule Meeting</button>
                  <button style={{ margin: "5px", color: "white", backgroundColor: "blue", border: "none", padding: "3px", borderRadius: "10px" }}>Join Meeting</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingsInfo
