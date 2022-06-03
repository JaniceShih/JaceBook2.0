import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";


import {logout} from "../../actions/session_actions" 


const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    };
};


const mdtp = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    });
};


export default connect(mstp, mdtp)(NavBar);


