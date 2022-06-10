import Avatar from 'react-avatar';
import React from 'react'

class  FriendList extends React.Component {

  render(){
    const {flexdirection, friend} = this.props;
    // let userImag =  <img src={window.unknow} className="friend__img"/>  
    // if(friend.photoUrl){
    //     userImag =  <img src={friend.photoUrl} className="friend__img"/>          
    // }

    let userImag =  <Avatar name={`${friend.fname}`} size="100" className='friendrow__img'/>
        
    if(friend.photoUrl){
        userImag =   <Avatar src={`${friend.photoUrl}`} size="100" className='friendrow__img'/>            
    }

    return (      
      <div className={flexdirection}>          
         <div>
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