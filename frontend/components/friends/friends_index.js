import React from "react";

import NavBarContainer from "../navbar/navbar_container";
import FriendsBar from "./friends_bar"
import FriendsListContainer from "./friedns_list_container"

const Friends = () => {
    return (
        <>
          <NavBarContainer />
          <div className="friend-app">
              <FriendsBar /> 
              <div className="friends-request">
                   <FriendsListContainer />               

              </div>
          </div> 
        </>
    )
}

export default Friends;