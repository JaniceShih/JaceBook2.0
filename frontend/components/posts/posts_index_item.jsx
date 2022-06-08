import React from 'react'

import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { IoTrashOutline } from "react-icons/io5";


class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.openDeletePostModal = this.openDeletePostModal.bind(this);

  }

  openDeletePostModal(e) {
    e.preventDefault();
    this.props.openModal({ type: 'delete_post', post: this.props.post });
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
      

      return (
        <div className='post'>
          <div className='post__top'>
            <div className='post__top--left'>
               <FaUserCircle fontSize="3.8rem"  color='gray'/>
              <div className='post__topinfo'>
                <h3>{post.fname + ' ' + post.lname}</h3>
                <p>{post.updated_at.toString().split('T')[0]}</p>            
              </div>
            </div>
            
            <div className="post__top__right">

                {post__menu}

                <div className="post__top__right--menu">
                  <div className="post__option"
                      >
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
  
    
        </div>
      )
    }  
}

export default PostIndexItem