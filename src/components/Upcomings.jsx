import React from 'react'

function Upcomings() {
    return (
        <div style={{padding:"20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Upcomings</p>
                <a href="$">View All</a>
            </div>

            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{ height: "100px", width: "100px", backgroundColor: "aqua",fontSize: "small",fontWeight:"bold" ,alignItems:"center"}}>
                <p style={{paddingTop:"40px",paddingLeft:"25px"}}>07 | Feb</p>
                </div>
                <div style={{ fontSize: "small" }}>
                    <p>Interview with Designer</p>
                    <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                    <p>10 AM TO 11 AM</p>
                </div>
                <div>
                    <button style={{color:"white",backgroundColor:"blue",padding:"5px",border:"none",borderRadius:"10px"}}>Details</button>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{ height: "100px", width: "100px", backgroundColor: "aqua",fontSize: "small",fontWeight:"bold" ,alignItems:"center"}}>
                <p style={{paddingTop:"40px",paddingLeft:"25px"}}>07 | Feb</p>
                </div>
                <div style={{ fontSize: "small" }}>
                    <p>Interview with Designer</p>
                    <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                    <p>10 AM TO 11 AM</p>
                </div>
                <div>
                    <button style={{color:"white",backgroundColor:"blue",padding:"5px",border:"none",borderRadius:"10px"}}>Details</button>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{ height: "100px", width: "100px", backgroundColor: "aqua",fontSize: "small",fontWeight:"bold" ,alignItems:"center"}}>
                <p style={{paddingTop:"40px",paddingLeft:"25px"}}>07 | Feb</p>
                </div>
                <div style={{ fontSize: "small" }}>
                    <p>Interview with Designer</p>
                    <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                    <p>10 AM TO 11 AM</p>
                </div>
                <div>
                    <button style={{color:"white",backgroundColor:"blue",padding:"5px",border:"none",borderRadius:"10px"}}>Details</button>
                </div>
            </div>

        </div>
    )
}

export default Upcomings
