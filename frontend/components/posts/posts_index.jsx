import React from 'react';
import PostIndexItem from './posts_index_item'

import { FaUserCircle } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { GoSmiley } from "react-icons/go";



class PostIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchPosts();
        // this.props.fetchComments();
    }

    render(){   
        const {currentUser, posts, userId} = this.props;      
       


        return(            
           <>
                <div className='messagesender' >
                    <div className='messagesender__top' >
                       <FaUserCircle fontSize="3.5rem"  color='gray'/>
                        
                        <div                        
                            key="openCreatePostModal"
                            className='messagesender__input'>
                            What's on your mind? {currentUser.fname}
                        </div>          
                    </div>     

                    <div className='messagesender__bottom'>                    
                        <div className='messagesender__option' >
                             <MdPhotoLibrary fontSize="2.5rem" color='green'/>
                            <h3>Photo/Video</h3>
                        </div>
                        <div className='messagesender__option'>
                            <GoSmiley fontSize="2.5rem" color='orange'/>
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>
                </div>

                
                {
                    Object.values(posts).reverse().map(                      
                        (post,idx)=>                         
                        <PostIndexItem 
                            post={post}                         
                            currentUser={currentUser}                      
                            userId={userId}
                            key ={idx}
                         />                    
                    )                    
                }

              
            </>
        )
    }
}

export default PostIndex;