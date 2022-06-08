import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost, fetchPosts } from '../../actions/post_actions';
import { closeModal } from "../../actions/modal_actions";

const mSTP = state =>({
    post: {
        id: null,
        body: '',
        photoFile: null,
        photoUrl: null,
        user_id: state.session.currentUser        
    },
    currentUser: state.entities.users[state.session.currentUser] ,
    formType: 'Create post'
})

const mDTP = dispatch =>({
    createPost: (formData)=> dispatch(createPost(formData)),
    fetchPosts: ()=> dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostForm);