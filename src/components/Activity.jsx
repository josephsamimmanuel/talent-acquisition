import React from 'react'
import ActivityComp from '../ComponentRepeat/ActivityComp'

function Activity() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
                <p>Activity</p>
                <a href="$">View All</a>
            </div>

            <div style={{ padding: "20px" }}>
                <ActivityComp interview={"Innterview with Designer"} created={"Stella"} time={"10 AM to 11 AM"} button={"Details"} />
            </div>

            <div style={{ padding: "20px" }}>
                <ActivityComp interview={"Innterview with Designer"} created={"Stella"} time={"10 AM to 11 AM"} button={"Details"} />
            </div>
            
            <div style={{ padding: "20px" }}>
                <ActivityComp interview={"Innterview with Designer"} created={"Stella"} time={"10 AM to 11 AM"} button={"Details"} />
            </div>
        </div>
    )
}

export default Activity
