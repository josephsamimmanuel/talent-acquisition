import React from 'react'
import { MdOutlineTextSnippet } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { GrView } from "react-icons/gr";

function CandidateStatus() {
  return (
    <div>
<div className="HrEmployee-container-main" style={{ marginTop: "50px" }}>
        <div className='HrEmployee-containerApp'>
          <div className="candidate-container-AppInfo">
            
            <div className="candidate-container-AppInfo-title">
              <h5>Candidate Status</h5>
              <a href="$">View All</a>
              <div className="searchbox">
                    <input type="text" placeholder='Search Here'/>
                    <IoIosSearch className='search'/>
                    </div>
            <div style={{display:"flex",backgroundColor:"#EBECF0",gap:"5px", paddingTop:"10px", paddingLeft:"10px",paddingRight:"10px", borderRadius:"10px"}}>
            <IoFilter style={{ fontSize: '1.5em', color:"blue" }}/>
            <p>Filter</p>
            </div>
            </div>

            <div className='candidatename-container-AppInfo-title'>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>Job ID</p>
              <p style={{fontSize:"smaller" , fontWeight:"bold"}}>Name</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>Position</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>1st Level</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>2nd Level</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>3rd Level</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>4th Level</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}> Total Marks</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>Status</p>
              <p style={{fontSize:"smaller", fontWeight:"bold"}}>Actions</p> 
            </div>
            <hr />

            <div className='candidatename2-container-AppInfo-title'>
              <p style={{fontSize:"smaller"}}>Job ID</p>
              <p style={{fontSize:"smaller"}}>Name</p>
              <p style={{fontSize:"smaller"}}>Position</p>
              <p style={{fontSize:"smaller"}}>1st Level</p>
              <p style={{fontSize:"smaller"}}>2nd Level</p>
              <p style={{fontSize:"smaller"}}>3rd Level</p>
              <p style={{fontSize:"smaller"}}>4th Level</p>
              <p style={{fontSize:"smaller"}}> Total Marks</p>
              <p style={{fontSize:"smaller"}}>Status</p>
              <GrView/>
            </div>
            <hr />

            <div className='candidatename2-container-AppInfo-title'>
              <p style={{fontSize:"smaller"}}>Job ID</p>
              <p style={{fontSize:"smaller"}}>Name</p>
              <p style={{fontSize:"smaller"}}>Position</p>
              <p style={{fontSize:"smaller"}}>1st Level</p>
              <p style={{fontSize:"smaller"}}>2nd Level</p>
              <p style={{fontSize:"smaller"}}>3rd Level</p>
              <p style={{fontSize:"smaller"}}>4th Level</p>
              <p style={{fontSize:"smaller"}}> Total Marks</p>
              <p style={{fontSize:"smaller"}}>Status</p>
              <GrView/>
            </div>
            <hr />

            <div className='candidatename2-container-AppInfo-title'>
              <p style={{fontSize:"smaller"}}>Job ID</p>
              <p style={{fontSize:"smaller"}}>Name</p>
              <p style={{fontSize:"smaller"}}>Position</p>
              <p style={{fontSize:"smaller"}}>1st Level</p>
              <p style={{fontSize:"smaller"}}>2nd Level</p>
              <p style={{fontSize:"smaller"}}>3rd Level</p>
              <p style={{fontSize:"smaller"}}>4th Level</p>
              <p style={{fontSize:"smaller"}}> Total Marks</p>
              <p style={{fontSize:"smaller"}}>Status</p>
              <GrView/>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateStatus
