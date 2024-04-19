import React from 'react'

function HiringCandidates() {
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Hiring Candidates</p>
                    <a href="$">View All</a>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>John Deo</p>
                        <p>Senior Python Developer</p>
                        <p>Hired by Stella</p>
                    </div>
                    <div>
                        <button style={{ color: "white", backgroundColor: "blue", padding: "5px", border: "none", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>

            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>John Deo</p>
                        <p>Senior Python Developer</p>
                        <p>Hired by Stella</p>
                    </div>
                    <div>
                        <button style={{ color: "white", backgroundColor: "blue", padding: "5px", border: "none", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>John Deo</p>
                        <p>Senior Python Developer</p>
                        <p>Hired by Stella</p>
                    </div>
                    <div>
                        <button style={{ color: "white", backgroundColor: "blue", padding: "5px", border: "none", borderRadius: "10px" }}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiringCandidates
