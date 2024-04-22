import React from 'react'
import UpcomingComp from '../ComponentRepeat/UpcomingComp'

function Upcomings() {
    return (
        <div style={{padding:"20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Upcomings</p>
                <a href="$">View All</a>
            </div>
            <UpcomingComp interview={"Interview with Designer"} created={"Stella"} time={"10 AM to 11 AM"}/>
            <UpcomingComp interview={"Interview with Designer"} created={"Stella"} time={"10 AM to 11 AM"}/>
            <UpcomingComp interview={"Interview with Designer"} created={"Stella"} time={"10 AM to 11 AM"}/>
        </div>
    )
}

export default Upcomings
