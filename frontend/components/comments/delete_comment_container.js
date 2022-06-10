import React from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../../actions/comment_actions';
import {fetchPosts} from  '../../actions/post_actions';
import { closeModal } from "../../actions/modal_actions";


class DelteComment extends React.Component {

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }
  

  render() {
    const {comment, deleteComment, closeModal} = this.props;

    return (



      <div className='form__box'>   
          <div className="form__header">
              <div className="form__header--delete"> Delete Comment? </div>               
          </div>
          <div onClick={closeModal} className="close-x x-background">X</div> 

          <div className='form__post'>
                <div className='form__content'>Items you delete can't be restored.</div>

                <div className='form__submit'>
                    <button 
                        className="btn  btn--gray form__submit__delete--cancel" 
                        onClick={closeModal} > 
                        No
                    </button>                         
                    <button 
                        className="btn btn--primary form__submit__delete" 
                        onClick={() => deleteComment(comment.id).then(() => {
                          this.props.closeModal()
                          this.props.fetchPosts();
                          }
                      )} > 
                        Delete
                    </button>  
                </div>
            
          </div>  
        </div>
    )

  }
}

const mSTP = state =>({
    comment: state.ui.modal.comment
})

const mDTP = dispatch =>({
    closeModal: () => dispatch(closeModal()),
    fetchPosts: ()=>dispatch(fetchPosts()),
    deleteComment: (commentId)=> dispatch(deleteComment(commentId))
})

export default connect(mSTP, mDTP)(DelteComment);