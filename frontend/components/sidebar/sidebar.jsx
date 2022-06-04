import React from 'react'
import SidebarItem from './sidebar_item'

import { FaUserCircle } from 'react-icons/fa';
import { FcAreaChart } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FaFacebookMessenger } from 'react-icons/fa';

function SideBar(props) {
    const {currentUser} = props;

    let userImag =  <FaUserCircle fontSize="3rem"/> ;
   

    return (
        <div className='sidebar'>
            
            <div className='sidebarrow'>
                {userImag}
                <h4>{currentUser.fname+' '+ currentUser.lname}</h4>
            </div>   

            <SidebarItem Icon={FcAreaChart} title='COVID-19 Tracker' currentUser = {currentUser}/> 

            <SidebarItem Icon={FcConferenceCall} title='Friends' currentUser = {currentUser} />

            <SidebarItem Icon={FaFacebookMessenger} title='Messenger' currentUser = {currentUser} color ="#1877f2"/>   
            

        </div>
    )
}

export default SideBar