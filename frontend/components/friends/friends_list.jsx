import Avatar from 'react-avatar';
import React from 'react'

function FriendList(props) {
  const {friend} = props;
  return (
    <div className='sidebarrow'>
      {
        (friend.photoUrl) ? <Avatar src={friend.photoUrl} size="40" round={true}/> :  <Avatar name={`${friend.fname}`} size="40" round={true} />
      }
        
        <h4>{friend.fname+' '+friend.lname}</h4>
    </div>
  )
}

export default FriendList