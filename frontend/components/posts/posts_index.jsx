import React from 'react';
import PostIndexItem from './posts_index_item'

// import { FaUserCircle } from 'react-icons/fa';
import Avatar from 'react-avatar';
import { MdPhotoLibrary } from 'react-icons/md';
import { GoSmiley } from "react-icons/go";




class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.posts
        }
        this.openCreatePostModal = this.openCreatePostModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
        // this.props.fetchComments();
    }

    openCreatePostModal(e) {
        e.preventDefault();
        this.props.openModal({ type: 'create_post'});
    }

    render(){   
        const {currentUser, posts, openModal, user,fetchPosts, createLike, deleteLike, userId} = this.props;  

        let userImag =  <Avatar name={`${currentUser.fname}  ${currentUser.lname}`} size="40" round={true} />
        
        if(currentUser.photoUrl){
            userImag =   <Avatar src={`${currentUser.photoUrl}`} size="40" round={true} />            
        }
        return(            
           <>
                <div className='messagesender' >
                    <div className='messagesender__top' >
                       {userImag}
                        
                        <div                        
                            key="openCreatePostModal"
                            className='messagesender__input'
                            onClick={this.openCreatePostModal}>
                            What's on your mind? {currentUser.fname}
                        </div>          
                    </div>     

                    <div className='messagesender__bottom'
                        onClick={this.openCreatePostModal}>                    
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
                            openModal ={openModal}  
                            currentUser={currentUser}
                            userId={userId}                           
                            fetchPosts={fetchPosts}
                            createLike={createLike}
                            deleteLike={deleteLike}
                            key ={idx}
                         />                    
                    )                    
                }

              
            </>
        )
    }
}

export default PostIndex;