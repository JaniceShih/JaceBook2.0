import Avatar from 'react-avatar';
import React from 'react'
import { Link} from 'react-router-dom';


class  FriendList extends React.Component {
  constructor(props) {
    super(props); 
    
    this.redirectPage = this.redirectPage.bind(this);   
}

  redirectPage(friendId){    
    // console.log(friendId);     
    this.props.history.push({pathname: `/users/${friendId}`});
    this.props.fetchUser(friendId);
  }

  render(){
    
    const {flexdirection, friend} = this.props;
   
    let userImag =  <Avatar name={`${friend.fname}`} size="100" className='friendrow__img'/>
        
    if(friend.photoUrl){
        userImag =   <Avatar src={`${friend.photoUrl}`} size="100" className='friendrow__img'/>            
    }

    return (      
      <div className={flexdirection}  onClick={()=>this.redirectPage(friend.id)}>          
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

