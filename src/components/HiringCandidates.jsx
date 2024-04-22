import React from 'react'
import HiringCandidateComp from '../ComponentRepeat/HiringCandidateComp'

function HiringCandidates() {
    return (
        <div>
                <div style={{ display: "flex", justifyContent: "space-between",paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
                    <p>Hiring Candidates</p>
                    <a href="$">View All</a>
                </div>

            <div style={{ padding: "20px" }}>
            <HiringCandidateComp name={"John Deo"} job={"Senior Python Developer"} hr={"Stella"} button={"Details"}/>
            </div>

            <div style={{ padding: "20px" }}>
            <HiringCandidateComp name={"John Deo"} job={"Senior Python Developer"} hr={"Stella"} button={"Details"}/>
            </div>

            <div style={{ padding: "20px" }}>
            <HiringCandidateComp name={"John Deo"} job={"Senior Python Developer"} hr={"Stella"} button={"Details"}/>
            </div>
        </div>
    )
}

export default HiringCandidates
