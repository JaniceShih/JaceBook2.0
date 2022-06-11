import React from "react";
import { connect } from "react-redux";
import Contacts from "./contacts.jsx";


const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    };
};


const mdtp = (dispatch) => {
    return ({
        
    });
};


export default connect(mstp, mdtp)(Contacts);

