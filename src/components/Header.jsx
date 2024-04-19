import React from 'react'
import { GiMayanPyramid } from "react-icons/gi";
import { CiBrightnessUp } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

function Header() {
    return (

            <div className='flex-with-header'>
                <div className='flex-with-center'>
                    <GiMayanPyramid style={{ fontSize: '1.5em' }}/>
                    <p style={{fontSize:"larger", paddingTop:"10px"}}>talent acquisition</p>
                    <div className="searchbox">
                    <input type="text" placeholder='Search Here'/>
                    <IoIosSearch className='search'/>
                    </div>
                </div>
                <div className=' flex-with-end'>
                    <CiBrightnessUp style={{ fontSize: '1.5em' }}/>
                    <IoChatbubbleOutline style={{ fontSize: '1.5em' }}/>
                    <IoIosNotifications style={{ fontSize: '1.5em' }}/>
                    <CiSettings style={{ fontSize: '1.5em' }}/>
                    <img src="./test.jpg" alt="" height={"10px"} width={"10px"} style={{ height: "30px", width: "30px", border: "black 1px solid", borderRadius: "30px" }} />

                </div>
            </div>



    )
}

export default Header
