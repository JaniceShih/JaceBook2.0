import React from "react";
import {Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from "./modal/modal_container";
import FeedIndex from "./feed/feed_index"
import BookMarks from "./bookmarks/bookmarks"
import LoginFormContainer from "./session_form/login_form_container"
import NotFoundContainer from './NotFound.jsx';
import ProfileContainer from "./profile/profile_container";

const App = () => {
    return(
        <> 
          <ModalContainer /> 
          <Switch>
             <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute exact path="/bookmarks" component={BookMarks}/>  
            <ProtectedRoute exact path="/" component={FeedIndex}/>
          
            <AuthRoute path="/login" component={LoginFormContainer}/>    
            <Route component={NotFoundContainer} />
          </Switch>
         
        </>
    );
};

export default App;