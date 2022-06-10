import React from 'react';
import { connect } from 'react-redux';
import FriendList from "../friends/friend_list"


class Friends extends React.Component {
  render() {
    const {user,friendsCount} = this.props;
    const freinds = [...user.followers, ...user.following];
    
    return (
  
        <div>
             <div className='profile__sidebar--info'>
                    <div className='profile__intro' >                        
                        <div className='intro__heading' >
                           Friends 
                        </div>
                        <div className='friend__list'>
                          {
                              freinds.map((friend,idx) => 
                                            <FriendList friend = {friend} 
                                                  flexdirection = 'friendrow'
                                                  key = {idx}
                                            />
                                          ) 
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
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mDTP = dispatch =>({
    
})

export default connect(mSTP, mDTP)(Friends);