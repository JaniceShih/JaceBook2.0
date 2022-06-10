import { connect } from 'react-redux';
import { updateUser, receiveCurrentUser } from '../../actions/session_actions';
import ProfileForm from './profile_form';
import { closeModal } from "../../actions/modal_actions";

const mSTP = state =>({  
    errors: state.errors.session,  
    user: state.entities.users[state.session.currentUser] ,    
    formType: 'Edit Profile'    
})

const mDTP = dispatch =>({
    receiveCurrentUser: ()=> dispatch(receiveCurrentUser()),
    closeModal: () => dispatch(closeModal()),
    updateUser: (user)=> dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(ProfileForm);