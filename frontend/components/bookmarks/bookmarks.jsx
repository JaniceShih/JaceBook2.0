import React from "react";

import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from './../sidebar/sidebar_container'


const BookMarks = () => {
    return (
        <>
          <NavBarContainer />
          <div>
                <SidebarContainer />                              
          </div> 
        </>
    )
}

export default BookMarks;