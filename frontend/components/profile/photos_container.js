import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PhotoList from "../photos/photo_list"

class Photos extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

  render() {
    const {user, posts} = this.props;

    const photos = [];
     Object.values(posts).map(post => {       
         if(post.user_id === user.id) 
            {photos.push(post.photoUrl)} 
        })

    return (
        <div>
            <div className='profile__sidebar--info'>              
                 <div className='profile__intro' >
                    <div className='intro__heading'>
                        Photos
                    </div>
                    <div className='friend__list'>
                        {
                            photos.slice(0, 8).map(
                                (photo,idx) => 
                                    <PhotoList 
                                        photo={photo} 
                                        flexdirection='photorow'
                                        key={idx}
                                    />) 
                        }  
                                                                    
                                
                    </div>
                </div> 

            </div>
        </div>
    )

  }
}

const mSTP = (state, ownProps) =>{
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: state.entities.posts
    };
}

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(Photos);