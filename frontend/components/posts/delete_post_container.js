import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/post_actions';
import { closeModal } from "../../actions/modal_actions";


class DeltePost extends React.Component {

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }
  

  render() {
    const {post, deletePost, closeModal} = this.props;

    return (
        <div className='form__box'>   
          <div className="form__header">
              <div className="form__header--delete"> Delete? </div>               
          </div>
          <div onClick={closeModal} className="close-x x-background">X</div> 

          <div className='form__post'>
                <div className='form__content'>Items you delete can't be restored.</div>

                <div className='from__submit'>
                    <button 
                        className="btn  btn--gray from__submit__delete--cancel" 
                        onClick={closeModal} > 
                        Cancel
                    </button>                         
                    <button 
                        className="btn btn--primary from__submit__delete" 
                        onClick={() => deletePost(post.id).then(() => this.props.closeModal())} > 
                        Delete
                    </button>  
                </div>
            
          </div>  
        </div>
    )

  }
}

const mSTP = state =>({
    post: state.ui.modal.post
})

const mDTP = dispatch =>({
    closeModal: () => dispatch(closeModal()),
    deletePost: (postId)=> dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(DeltePost);