import React from "react";

import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from './../sidebar/sidebar_container';
const FeedIndex = () => {
    return (
        <>
          <NavBarContainer />
          <div className="app app__body">
                <SidebarContainer />                
          </div> 
        </>
    )
}

export default FeedIndex;