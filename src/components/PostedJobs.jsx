import React from 'react'
import { MdOutlineTextSnippet } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";


function PostedJobs() {
  return (
    <div>
      <div className="HrEmployee-container-main" style={{ marginTop: "50px" }}>
        {/* <div className='HrEmployee-containerApp'> */}

          <div className="candidate-container-AppInfo">
            <div className="candidate-container-AppInfo-title">
              <h5>Posted Jobs</h5>
              <a href="$">View All</a>
              <div className="searchbox">
                    <input type="text" placeholder='Search Here'/>
                    <IoIosSearch className='search'/>
                    </div>
              <div style={{ display: "flex", backgroundColor: "#EBECF0", gap: "5px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px" }}>
                <IoFilter style={{ fontSize: '1.5em', color: "blue" }} />
                <p>Filter</p>
              </div>
            </div>

            <div className='Jobs-container-AppInfo-title'>
              <p>Active Jobs</p>
              <p>Pending Jobs</p>
            </div>
            <hr />

            <div className='post1-container-contents'>

              <div className="post1-container-AppInfo">
                <div className="post1-container-AppInfo-title">
                  <FaPython/>
                  <p style={{paddingTop:"15px"}}>Python Developers</p>
                  <HiDotsVertical/>
                </div>
                <hr />
                <div className="post1-container-AppInfo-body">
                  <p>Senior Developers</p>
                  <div style={{height:"40px",width:"50px",backgroundColor:"#7F7FF8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>258</p>
                  </div>
                  <p>Total Applicants</p>
                </div>
                <hr />

                <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5px",paddingRight:"5px"}}>
                  <p style={{fontSize:"xx-small"}}><span style={{color:'blue'}}>⬆️28%</span>VS Last Month</p>
                  <p style={{fontSize:"xx-small"}}>6 mins ago</p>
                </div>
              </div>

              <div className="post1-container-AppInfo">
                <div className="post1-container-AppInfo-title">
                  <FaPython/>
                  <p style={{paddingTop:"15px"}}>Python Developers</p>
                  <HiDotsVertical/>
                </div>
                <hr />
                <div className="post1-container-AppInfo-body">
                  <p>Senior Developers</p>
                  <div style={{height:"40px",width:"50px",backgroundColor:"#7F7FF8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>258</p>
                  </div>
                  <p>Total Applicants</p>
                </div>
                <hr />

                <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5px",paddingRight:"5px"}}>
                  <p style={{fontSize:"xx-small"}}><span style={{color:'blue'}}>⬆️28%</span>VS Last Month</p>
                  <p style={{fontSize:"xx-small"}}>6 mins ago</p>
                </div>
              </div>

              <div className="post1-container-AppInfo">
                <div className="post1-container-AppInfo-title">
                  <FaPython/>
                  <p style={{paddingTop:"15px"}}>Python Developers</p>
                  <HiDotsVertical/>
                </div>
                <hr />
                <div className="post1-container-AppInfo-body">
                  <p>Senior Developers</p>
                  <div style={{height:"40px",width:"50px",backgroundColor:"#7F7FF8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>258</p>
                  </div>
                  <p>Total Applicants</p>
                </div>
                <hr />

                <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5px",paddingRight:"5px"}}>
                  <p style={{fontSize:"xx-small"}}><span style={{color:'blue'}}>⬆️28%</span>VS Last Month</p>
                  <p style={{fontSize:"xx-small"}}>6 mins ago</p>
                </div>
              </div>
              <div className="post1-container-AppInfo">
                <div className="post1-container-AppInfo-title">
                  <FaPython/>
                  <p style={{paddingTop:"15px"}}>Python Developers</p>
                  <HiDotsVertical/>
                </div>
                <hr />
                <div className="post1-container-AppInfo-body">
                  <p>Senior Developers</p>
                  <div style={{height:"40px",width:"50px",backgroundColor:"#7F7FF8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>258</p>
                  </div>
                  <p>Total Applicants</p>
                </div>
                <hr />

                <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5px",paddingRight:"5px"}}>
                  <p style={{fontSize:"xx-small"}}><span style={{color:'blue'}}>⬆️28%</span>VS Last Month</p>
                  <p style={{fontSize:"xx-small"}}>6 mins ago</p>
                </div>
              </div>

            </div>


          </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default PostedJobs
