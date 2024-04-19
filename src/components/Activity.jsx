import React from 'react'

function Activity() {
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Activity</p>
                    <a href="$">View All</a>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>Interview with Designer</p>
                        <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                        <p>10 AM TO 11 AM</p>
                    </div>
                    <div>
                        <button style={{ color: "blue", backgroundColor: "transparent", padding: "5px", border: "1px solid blue", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>

            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>Interview with Designer</p>
                        <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                        <p>10 AM TO 11 AM</p>
                    </div>
                    <div>
                    <button style={{ color: "blue", backgroundColor: "transparent", padding: "5px", border: "1px solid blue", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>Interview with Designer</p>
                        <p>Created by <span style={{ color: "blue" }}>Stella</span></p>
                        <p>10 AM TO 11 AM</p>
                    </div>
                    <div>
                    <button style={{ color: "blue", backgroundColor: "transparent", padding: "5px", border: "1px solid blue", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
