import { connect } from 'react-redux';
// import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';
import { openModal, closeModal } from '../../actions/modal_actions';
import {updateUser, fetchUser} from '../../actions/session_actions';
import {createFriend, fetchFriends, updateFriend, deleteFriend} from '../../actions/friend_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser],
    // users: state.entities.users,
    // sessionId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    // currentUserId: state.session.id,
    userId: parseInt(ownProps.match.params.userId),
    url: ownProps.location.pathname,
    posts: state.entities.posts,
    history: ownProps.history
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),  
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createFriend: (userId) => dispatch(createFriend(userId)),
    fetchFriends: (userId) => dispatch(fetchFriends(userId)),
    updateFriend: (userId) => dispatch(updateFriend(userId)),
    deleteFriend: (userId) => dispatch(deleteFriend(userId)),
})

export default connect(mSTP, mDTP)(Profile);