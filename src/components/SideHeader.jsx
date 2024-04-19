import React from 'react'
import { RiGalleryView2 } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { GrConfigure } from "react-icons/gr";
import { FaAddressBook } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { SiSpeedtest } from "react-icons/si";
import HrEmployee from './HrEmployee';
import MeetingsInfo from './MeetingsInfo';
import PostedJobs from './PostedJobs';
import CandidateStatus from './CandidateStatus';
import Calendar from 'react-calendar';
import Upcomings from './Upcomings';
import Activity from './Activity';
import HiringCandidates from './HiringCandidates';

function SideHeader() {
    return (
        <div>
            <div className='sideheader-container'>

                <div className='sideheader'>
                    <RiGalleryView2 style={{ fontSize: '1.5em' }} />
                    <FaEdit style={{ fontSize: '1.5em' }} />
                    <CiCircleList style={{ fontSize: '1.5em' }} />
                    <GrConfigure style={{ fontSize: '1.5em' }} />
                    <FaAddressBook style={{ fontSize: '1.5em' }} />
                    <MdCoPresent style={{ fontSize: '1.5em' }} />
                    <MdOutlineProductionQuantityLimits style={{ fontSize: '1.5em' }} />
                    <GrNotes style={{ fontSize: '1.5em' }} />
                    <SiSpeedtest style={{ fontSize: '1.5em' }} />
                </div>


                <div>
                    <HrEmployee />
                    <div className='sideheader-components'>
                        <div>
                            <MeetingsInfo />
                            <PostedJobs />
                            <CandidateStatus />
                        </div>

                        <div>
                        <div className="calander-container-AppInfo">
                            <Calendar/>
                        </div>
                            
                        <div className="upcomings-container-AppInfo">
                            <Upcomings/>
                        </div>

                        <div className="activity-container-AppInfo">
                            <Activity/>
                        </div>

                        <div className="hiringcandidates-container-AppInfo">
                            <HiringCandidates/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideHeader
