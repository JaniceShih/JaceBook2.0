import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import NavBar from "./navbar";

import {logout} from "../../actions/session_actions" 
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUser],        
        history: ownProps.history
    };
};


const mdtp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    });
};


// export default connect(mstp, mdtp)(NavBar);
const NavBarContainer = connect(mstp, mdtp)(NavBar);
export default withRouter(NavBarContainer);

