import React from 'react'
import SidebarItem from './sidebar_item'

// import {  } from 'react-icons/fa';
import Avatar from 'react-avatar';
import { FcAreaChart } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FaFacebookMessenger } from 'react-icons/fa';

function SideBar(props) {
    const {currentUser} = props;

    let userImag =  <Avatar name={`${currentUser.fname}  ${currentUser.lname}`} size="30" round={true} />
        
    if(currentUser.photoUrl){
        userImag =   <Avatar src={`${currentUser.photoUrl}`} size="30" round={true} />            
    }
   

    return (
        <div className='sidebar'>
            
            <div className='sidebarrow'>
                {userImag}
                <h4>{currentUser.fname+' '+ currentUser.lname}</h4>
            </div>   

            <SidebarItem Icon={FcAreaChart} title='COVID-19 Tracker' currentUser = {currentUser} linkurl ='https://janiceshih.github.io/the-covid-19-tracker'/> 

            <SidebarItem Icon={FcConferenceCall} title='Friends' currentUser = {currentUser} />

            <SidebarItem Icon={FaFacebookMessenger} title='Messenger' currentUser = {currentUser} color ="#1877f2"/>   
            

        </div>
    )
}

export default SideBar