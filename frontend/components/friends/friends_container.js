import React from "react";
import { connect } from "react-redux";
import Friends from "./freinds";


const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    };
};


const mdtp = (dispatch) => {
    return ({
        
    });
};


export default connect(mstp, mdtp)(Friends);


