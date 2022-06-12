import React from 'react'
import SidebarItem from './sidebar_item'
import { Link} from 'react-router-dom';

import Avatar from 'react-avatar';
import { FcAreaChart } from "react-icons/fc";
import { FaUserFriends } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

function SideBar(props) {
    const {currentUser} = props;

    let userImag =  <Avatar name={`${currentUser.fname}`} size="30" round={true} />
        
    if(currentUser.photoUrl){
        userImag =   <Avatar src={`${currentUser.photoUrl}`} size="30" round={true} />            
    }
   

    return (
        <div className='sidebar'>

             <Link to={`/users/${currentUser.id}`}>
                <div className='sidebarrow'>
                    {userImag}
                    <h4>{currentUser.fname+' '+ currentUser.lname}</h4>
                </div>   
            </Link>

            <SidebarItem Icon={FcAreaChart} title='COVID-19 Tracker' currentUser = {currentUser} linkurl ='https://janiceshih.github.io/the-covid-19-tracker' linktarget="_blank"/> 
            
            <SidebarItem Icon={FaUserFriends} title='Friends' currentUser = {currentUser} color="#fff" classname="user-friends" linkurl="friends" />
     
            {/* <SidebarItem Icon={FaFacebookMessenger} title='Messenger' currentUser = {currentUser} color ="#1877f2"/>    */}
            

        </div>
    )
}

export default SideBar