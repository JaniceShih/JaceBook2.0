import React from 'react';

import CommentIndexItem from './comments_index_item';
// import { FaUserCircle } from 'react-icons/fa';
import Avatar from 'react-avatar';
   
class   CommentIndex extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            body: '',
            editstatus: 'edit'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchComments();
    }


    handleSubmit(e) {
        e.preventDefault();

        const comment = {
            body: this.state.body,
            post_id: this.props.post.id,
            user_id: this.props.currentUser.id
        }       


        this.setState({
            body: ''
        })

        this.props.createComment(comment);
        this.props.fetchPosts();
    }

    update(field){
        return e =>(
          this.setState({
            [field]: e.currentTarget.value
          })    
        )      
    }
    

    render(){ 
        const {currentUser, post, deleteComment, fetchPosts, updateComment,openModal, createLike,deleteLike} = this.props;
        
        let userImag =  <Avatar name={`${currentUser.fname} ${currentUser.lname}`} size="33" round={true} />
        
        if(currentUser.photoUrl){
            userImag =   <Avatar src={`${currentUser.photoUrl}`} size="33" round={true} />            
        }
        return(
            <div className='comments'>  
                <div className="post__comment">
                    {
                        Object.values(post.comments).map((comment,idx)=>
                            <CommentIndexItem 
                                comment={comment}
                                postId={post.id}
                                currentUser={currentUser}
                                deleteComment = {deleteComment}
                                updateComment = {updateComment}
                                fetchPosts= {fetchPosts}
                                openModal={openModal}
                                createLike={createLike}
                                deleteLike={deleteLike}   
                                key ={idx}
                            />
                            
                        )
                    }

                </div>

            

            <div className='comments__create' >
                        {userImag}
                        <form>

                            <input 
                                id = {`comments__input${post.id}`}
                                className='comments__input'
                                value={this.state.body}
                                placeholder={" Write a Comment... "} 
                                onChange={this.update('body')}                            
                               />   
                            <button onClick={this.handleSubmit} type="submit"
                            className='btn--hidden'
                            >Hidden submit</button>   
                        </form>
                                         
                                
                </div>  
            </div>
        )
    }
}

export default CommentIndex;