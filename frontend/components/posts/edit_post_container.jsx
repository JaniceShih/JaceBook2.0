import { connect } from 'react-redux';
import { updatePost, fetchPosts } from '../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from "../../actions/modal_actions";

const mSTP = state =>({
    post: {
        id: state.ui.modal.post.id,
        body: state.ui.modal.post.body,
        photoFile: null,
        photoUrl: state.ui.modal.post.photoUrl,
        user_id: state.session.currentUser 
    },
    currentUser: state.entities.users[state.session.currentUser] ,    
    formType: 'Edit post'   
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal()),
    updatePost: (postId)=> dispatch(updatePost(postId))
})

export default connect(mSTP, mDTP)(PostForm);