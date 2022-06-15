import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import { fetchUser} from '../../actions/session_actions';
import {updateFriend, deleteFriend} from '../../actions/friend_actions';
import {withRouter} from "react-router-dom";

class FriendsList extends React.Component {

  constructor(props){
    super(props);
    this.friendRequestDelete = this.friendRequestDelete.bind(this); 
    this.redirectPage = this.redirectPage.bind(this); 
    this.friendRequestUpdate = this.friendRequestUpdate.bind(this);
  }

  redirectPage(friendId){    
      
    this.props.history.push({pathname: `/users/${friendId}`});
    this.props.fetchUser(friendId);
  }

  friendRequestDelete(requestId){
    this.props.deleteFriend(requestId);
    this.props.fetchUser(this.props.currentUser.id);
  }

  friendRequestUpdate(friendRequst){
       
    const friend = {
        id: friendRequst.id,
        user_id: friendRequst.user_id,
        friend_id: friendRequst.friend_id,
        status: 'Friends'
    }
  
    this.props.updateFriend(friend);
    this.props.fetchUser(this.props.currentUser.id);
}

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id);
  }


  render() {
    const {currentUser} = this.props;
    const freinds = [...currentUser.following];
    
    return (  
        <div >
              <div className='friends-request__header'>Friend Requests </div>
              <div className='friends-request__list'>
                 {
                    freinds.map((friend,idx) =>{
                      if(friend.status[0].status === "Pendding"){
                            let userImag =  <Avatar name={`${friend.fname}`} size="213" className='friendbar__img' onClick={()=>this.redirectPage(friend.id)}/>            
                            if(friend.photoUrl){
                                userImag =   <Avatar src={`${friend.photoUrl}`} size="213" className='friendbar__img' onClick={()=>this.redirectPage(friend.id)}/>            
                            }
                          return (
                            <div className='friends-requestcol' key={idx}>
                              {userImag}
                              <div className='friendbar__info' onClick={()=>this.redirectPage(friend.id)}>                           
                                {friend.fname} {friend.lname}                               
                              </div>
                              <div className='friendbar__button'>
                                <button className='btn btn--primary btn--friendbar' onClick={()=>this.friendRequestUpdate(friend.status[0])}>Comfirm</button>
                                <button className='btn btn--gray btn--friendbar' onClick={()=>this.friendRequestDelete(friend.status[0].id)}>Delete</button>
                              </div>
                            </div>
                          )
                      }
                    })                   
                        
                } 
              </div>

            
        </div>     
    )
  }
}

const mSTP = (state, ownProps) =>{
  return {
    currentUser: state.entities.users[state.session.currentUser],
    history: ownProps.history
  };
};

const mDTP = dispatch =>({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateFriend: (userId) => dispatch(updateFriend(userId)),
  deleteFriend: (userId) => dispatch(deleteFriend(userId)),
})

// export default connect(mSTP, mDTP)(FriendsList);

const FriendsListContainer = connect(mSTP, mDTP)(FriendsList);
export default withRouter(FriendsListContainer);