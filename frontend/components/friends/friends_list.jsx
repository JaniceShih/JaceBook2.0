import { Avatar } from '@mui/material'
import React from 'react'

function FriendList(props) {
  const {friend} = props;
  return (
    <div className='sidebarrow'>
        <Avatar src={friend.photoUrl}/>
        <h4>{friend.fname+' '+friend.lname}</h4>
    </div>
  )
}

export default FriendList