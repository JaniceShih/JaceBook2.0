import React from 'react';
import { connect } from 'react-redux';
import FriendList from "./friend_list"
import { fetchUser} from '../../actions/session_actions';
import {withRouter} from "react-router-dom"
import {deleteFriend} from '../../actions/friend_actions';

class Friends extends React.Component {
  render() {
    const {user} = this.props;
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
                                                  deleteFriend={this.props.deleteFriend}
                                                  history={this.props.history}
                                                  user={this.props.user}
                                                  url = {this.props.url}
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
    history: ownProps.history,
    url: ownProps.location.pathname,
  };
};

const mDTP = dispatch =>({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deleteFriend: (userId) => dispatch(deleteFriend(userId)),
})

// export default connect(mSTP, mDTP)(Friends);

const FriendsContainer = connect(mSTP, mDTP)(Friends);
export default withRouter(FriendsContainer);