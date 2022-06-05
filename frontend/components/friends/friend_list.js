import { Avatar } from '@mui/material'
import React from 'react'

class  FriendList extends React.Component {

  render(){
    const {flexdirection, friend} = this.props;
    let userImag =  <img src={window.unknow} className="friend__img"/>  
    if(friend.photoUrl){
        userImag =  <img src={friend.photoUrl} className="friend__img"/>          
    }

    return (      
      <div className={flexdirection}>          
         <div className='friendrow__img'>
            {userImag} 
          </div>
         <div className='friendrow__info'>
            <p>{friend.fname+' '+friend.lname}</p>
          </div>         
          
      </div>
    )
  }
}

export default FriendList