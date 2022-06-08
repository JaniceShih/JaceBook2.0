import React from 'react'

import { FaUserCircle } from 'react-icons/fa';

class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }

  }

  render(){
      const {currentUser, post, userId} = this.props; 

      if ((typeof userId !== "undefined") && userId!==post.user_id){
        return null;
      }

      let post__menu = '';

      if(post.user_id === currentUser.id){
        post__menu = <p className="post__menu">...</p>;
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