import React from 'react';
import { connect } from 'react-redux';
import FriendList from "./friend_list"
import { fetchUser} from '../../actions/session_actions';
import {withRouter} from "react-router-dom"

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
                                                  fetchUser={this.props.fetchUser}
                                                  history={this.props.history}
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
    user: state.entities.users[ownProps.match.params.userId],
    history: ownProps.history
  };
};

const mDTP = dispatch =>({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

// export default connect(mSTP, mDTP)(Friends);

const FriendsContainer = connect(mSTP, mDTP)(Friends);
export default withRouter(FriendsContainer);