import React from 'react'
import { MdOutlineTextSnippet } from "react-icons/md";

function HrEmployee() {
  return (
    <div className="HrEmployee-container-main">
      <div className='HrEmployee-container'>
        <div className="HrEmployee-container-title">
          <h3>Hr Employee</h3>
          <p>Enjoy your selecting potential candidates Tracking and Management System.</p>
        </div>
        <div className="HrEmployee-container-title">
          <button>Task Details</button>
        </div>
      </div>

      <div className='HrEmployee-containerApp'>
        <div className="HrEmployee-container-AppInfo">
          <div className="HrEmployee-container-AppInfo-title">
            <h5>Application Info</h5>
            <input type="checkbox" value={"reveived"} name='check-recieved'/> Received
            <input type="checkbox" value={"processed"} name='check-processed'/> Processed
            <select name="" id="">
              <option value="Month">Month</option>
              <option value="January">January</option>
              <option value="January">February</option>
              <option value="January">March</option>
              <option value="January">April</option>
              <option value="January">May</option>
              <option value="January">June</option>
              <option value="January">July</option>
              <option value="January">August</option>
              <option value="January">September</option>
              <option value="January">October</option>
              <option value="January">November</option>
              <option value="January">December</option>
            </select>
          </div>
          <hr />
          <div>
            <img src="./img3.png" alt="" height={"300px"} width={"700px"}/>
          </div>
        </div>
        <div className="HrEmployee-container-AppInfo" style={{ backgroundColor: "#6b6bf9d7" }}>
          <div className='flex-assesments'>
            <div className='assesments1'>
              <div className='assesments1-absolute'>
                <img src="./img2.png" alt="" height={"320px"} width={"240px"}/>
              </div>
              <MdOutlineTextSnippet style={{ fontSize: '5em', backgroundColor: "white" }} />
              <h1 style={{paddingTop:"60px", color:"white"}}>0033</h1>
            </div>
            <div className='assesments2'>
              <p style={{color:"white", fontSize:"larger"}}>New Assesments</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HrEmployee
