import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import { fetchUser} from '../../actions/session_actions';

class FriendsList extends React.Component {
  render() {
    const {currentUser} = this.props;
    const freinds = [...currentUser.followers, ...currentUser.following];
    console.log(freinds);
    return (  
        <div >
              <div className='friends-request__header'>Friend Requests </div>
              <div className='friends-request__list'>
                 {
                    freinds.map((friend,idx) =>{
                      if(friend.status[0].status === "Pendding"){
                            let userImag =  <Avatar name={`${friend.fname}`} size="213" className='friendbar__img'/>            
                            if(friend.photoUrl){
                                userImag =   <Avatar src={`${friend.photoUrl}`} size="213" className='friendbar__img'/>            
                            }
                          return (
                            <div className='friends-requestcol' key={idx}>
                              {userImag}
                              <div className='friendbar__info'>
                           
                                {friend.fname} {friend.lname}
                                <button className='btn btn--primary btn--friendbar'>Comfirm</button>
                                <button className='btn btn--gray btn--friendbar'>Delete</button>
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
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mDTP = dispatch =>({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(FriendsList);