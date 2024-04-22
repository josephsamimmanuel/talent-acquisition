import React from 'react'

function ActivityComp(props) {
    return (
        <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src="./test.jpg" alt="" height={"100px"} width={"100px"} style={{ height: "100px", width: "100px", border: "black 1px solid", borderRadius: "50px" }} />
                    <div style={{ fontSize: "small" }}>
                        <p>{props.interview}</p>
                        <p>Created by <span style={{ color: "blue" }}>{props.created}</span></p>
                        <p>{props.time}</p>
                    </div>
                    <div>
                        <button style={{ color: "blue", backgroundColor: "transparent", padding: "5px", border: "1px solid blue", borderRadius: "10px" }}>{props.button}</button>
                    </div>
                </div>
        </div>
    )
}

export default ActivityComp
