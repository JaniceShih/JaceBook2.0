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
                <div className='messagesender' >
                    <div className='messagesender__top' >
                       <FaUserCircle fontSize="4rem" />
                        
                        <div                        
                            key="openCreatePostModal"
                            className='messagesender__input'>
                            What's on your mind? {currentUser.fname}
                        </div>          
                    </div>     

                    <div className='messagesender__bottom'>                    
                        <div className='messagesender__option' >
                             <MdPhotoLibrary fontSize="2.66rem" color='green'/>
                            <h3>Photo/Video</h3>
                        </div>
                        <div className='messagesender__option'>
                            <GoSmiley fontSize="2.66rem" color='orange'/>
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>
                </div>

              
            </>
        )
    }
}

export default PostIndex;