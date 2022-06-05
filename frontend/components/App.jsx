import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from "./modal/modal_container";
import FeedIndex from "./feed/feed_index"
import BookMarks from "./bookmarks/bookmarks"
import LoginFormContainer from "./session_form/login_form_container"


const App = () => {
    return(
        <> 
          <ModalContainer /> 
          <ProtectedRoute exact path="/bookmarks" component={BookMarks}/>  
          <ProtectedRoute exact path="/" component={FeedIndex}/>
         
          <AuthRoute path="/login" component={LoginFormContainer}/>      
        </>
    );
};

export default App;