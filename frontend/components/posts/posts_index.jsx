import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { GoSmiley } from "react-icons/go";



class PostIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

 


    render(){   
        const {currentUser} = this.props;      
       


        return(            
           <>
                <div className='post' >
                    <div className='post__top' >
                       <FaUserCircle fontSize="4rem"  color='gray'/>
                        
                        <div                        
                            key="openCreatePostModal"
                            className='post__input'>
                            What's on your mind? {currentUser.fname}
                        </div>          
                    </div>     

                    <div className='post__bottom'>                    
                        <div className='post__option' >
                             <MdPhotoLibrary fontSize="2.5rem" color='green'/>
                            <h3>Photo/Video</h3>
                        </div>
                        <div className='post__option'>
                            <GoSmiley fontSize="2.5rem" color='orange'/>
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>
                </div>

              
            </>
        )
    }
}

export default PostIndex;