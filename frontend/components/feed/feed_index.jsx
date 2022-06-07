import React from "react";

import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from './../sidebar/sidebar_container'
import FriendsContainer from  './../friends/friends_container'
import StoryReel from '../feed/storyreel'

const FeedIndex = () => {
    return (
        <>
          <NavBarContainer />
          <div className="app app__body">
                <SidebarContainer />  
                <div className='feed'> 
                    <StoryReel />               
                </div>
                <FriendsContainer />              
          </div> 
        </>
    )
}

export default FeedIndex;