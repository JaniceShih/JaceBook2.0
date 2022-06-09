import { connect } from 'react-redux';
import { createComment, fetchComments, deleteComment, updateComment } from '../../actions/comment_actions';
import {fetchPosts} from  '../../actions/post_actions';
import CommentIndex from './comments_index';
import { openModal } from "../../actions/modal_actions";
import {createLike, deleteLike} from '../../actions/like_actions';


const mSTP = state =>({
    // posts: state.entities.posts,
    currentUser: state.entities.users[state.session.currentUser], 
    comments : state.entities.comments
})

const mDTP = dispatch =>({
    createComment: (comment)=> dispatch(createComment(comment)),
    deleteComment: (commentId)=> dispatch(deleteComment(commentId)),
    updateComment: (comment)=> dispatch(updateComment(comment)),
    fetchComments: ()=>dispatch(fetchComments()), 
    fetchPosts: ()=>dispatch(fetchPosts()),
    openModal: (modal) => dispatch(openModal(modal)),
    createLike:(like) => dispatch(createLike(like)),
    deleteLike:(likeId) => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(CommentIndex);