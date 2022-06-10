import React from 'react'

import CommentsContainer from '../comments/comments_index_container'

// import { FaUserCircle } from 'react-icons/fa';
import Avatar from 'react-avatar';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

import { BiComment } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";


class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.openDeletePostModal = this.openDeletePostModal.bind(this);
    this.openEditPostModal = this.openEditPostModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreateLike = this.handleCreateLike.bind(this);
    this.handleDeleteLike = this.handleDeleteLike.bind(this);

  }

   openDeletePostModal(e) {
      e.preventDefault();
      this.props.openModal({ type: 'delete_post', post: this.props.post });
   } 
  
   openEditPostModal(e){
    e.preventDefault();
    this.props.openModal({ type: 'edit_post', post: this.props.post });
   }
  
   handleClick(id){   
  
    const element = document.getElementById('comments__input'+id);
    console.log(element);
    element.focus();
   }
  
   handleCreateLike(e){
      e.preventDefault();
      const like = {like_id: this.props.post.id, like_type: "Post", user_id: this.props.currentUser.id};
      this.props.createLike(like);
      this.props.fetchPosts();
   }
  
   handleDeleteLike(likeId){
     return (e)=>{
      this.props.deleteLike(likeId);
      this.props.fetchPosts();
     }
  
  }

  render(){
    const {currentUser, post, userId} = this.props; 

      if ((typeof userId !== "undefined") && userId!==post.user_id){
        return null;
      }

      let post__menu = '';

      if(post.user_id === currentUser.id){
        post__menu = <p className="post__menu"><MdOutlineMoreHoriz fontSize="2.5rem" /> </p>;
      }

      const commentsCount = post.comments.length;
      const likesCount = post.likes.length;

      let likeId = 0;
      let likesThumbup = "";
      post.likes.map(liker=> {
        if (liker.user_id === currentUser.id) {
          likesThumbup= "jacebook__color--active"
          likeId=liker.id
        }  
      })

      let userImag =  <Avatar name={`${post.fname}  ${post.lname}`} size="40" round={true} />
        
      if(post.photoUrl){
          userImag =   <Avatar src={`${post.user_photoUrl}`} size="40" round={true} />            
      }
      

      return (
        <div className='post'>
          <div className='post__top'>
            <div className='post__top--left'>
               {userImag}
              <div className='post__topinfo'>
                <h3>{post.fname + ' ' + post.lname}</h3>
                <p>{post.updated_at.toString().split('T')[0]}</p>            
              </div>
            </div>
            
            <div className="post__top__right">

                {post__menu}

                <div className="post__top__right--menu">
                  <div className="post__option"
                  onClick={this.openEditPostModal}>
                    <MdOutlineModeEditOutline fontSize="2.5rem" />
                    <button  className="post__option-button"> Edit Post </button> 
                  </div> 
                  <div className="post__option" 
                      onClick={this.openDeletePostModal}>
                    <IoTrashOutline  fontSize="2.5rem" />
                    <button className="post__option-button"> Delete Post </button> 
                  </div>                
                </div>      
                                
            </div>
            

          </div>
          
          <div className="post__bottom">      
              <p>{post.body}</p>             
          </div>
    
          <div className="post__image">
            <img src={post.photoUrl} />
          </div>


          <div  className='post__likeComment'>    
            
              <div className='post__option--like'>
                {
                  (likesCount > 0 ) ? 
                    <p>
                        <AiFillLike fontSize='1.8rem' className='like-circle'/> {likesCount}
                    </p>
                    : ''   
                }
              </div>
              <div className='post__option--comment' >
                {
                  (commentsCount > 0)? 
                
                        <p> 
                          {commentsCount} Comments
                        </p>
                    
                    : ''   
                } 
              </div>   
          </div>

          <div className='post__options'>
            <div className={`post__option ` + likesThumbup} onClick={(likesThumbup === '') ? this.handleCreateLike : this.handleDeleteLike(likeId) }>
                {
                  (likesThumbup === '') ?  <AiOutlineLike fontSize='1.8rem'/> :  <AiFillLike fontSize='2.3rem' className={likesThumbup}/>
                }
               
                <p > 
                <button >Like</button>  
                </p>
            </div>  
            <div className='post__option' onClick={()=>this.handleClick(post.id)}>
                <FaRegCommentAlt fontSize='1.6rem' />
                <p >  Comment </p>
            </div>  
          </div>

          <div id="CommentsContainer" className='post__comments'>
            <CommentsContainer post={post} currentUser={currentUser}/>
          </div> 
    
        </div>
      )
    }  
}

export default PostIndexItem