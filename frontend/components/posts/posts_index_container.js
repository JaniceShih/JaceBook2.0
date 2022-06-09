import { connect } from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import PostIndex from './posts_index';

import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import {fetchComments} from '../../actions/comment_actions';
import {createLike, deleteLike} from '../../actions/like_actions';


const mSTP = (state,ownProps) =>{
    let stateParams = {
        posts: state.entities.posts,
        currentUser: state.entities.users[state.session.currentUser],      
    }

  
    if(typeof ownProps.match !== "undefined"){  
        stateParams['userId'] =  parseInt(ownProps.match.params.userId);
    }

    return stateParams
}

const mDTP = dispatch =>({ 
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPosts: ()=> dispatch(fetchPosts()),
    fetchComments: (CommentId) =>dispatch(fetchComments(CommentId)),
    createLike:(like) => dispatch(createLike(like)),
    deleteLike:(likeId) => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(PostIndex);
