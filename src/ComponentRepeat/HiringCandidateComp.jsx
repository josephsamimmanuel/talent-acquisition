import React from 'react'

function HiringCandidateComp(props) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                <div style={{ fontSize: "small" }}>
                    <p>{props.name}</p>
                    <p>{props.job}</p>
                    <p>Hired by {props.hr}</p>
                </div>
                <div>
                    <button style={{ color: "white", backgroundColor: "blue", padding: "5px", border: "none", borderRadius: "10px" }}>{props.button}</button>
                </div>
            </div>
        </div>
    )
}

export default HiringCandidateComp
