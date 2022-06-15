import Avatar from 'react-avatar';
import React from 'react'
import { Link} from 'react-router-dom';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { BsPersonX } from 'react-icons/bs';


class  FriendList extends React.Component {
  constructor(props) {
    super(props); 
    
    this.redirectPage = this.redirectPage.bind(this);  
    this.friendRequestDelete = this.friendRequestDelete.bind(this);  
}

  redirectPage(friendId){    
    //    
    this.props.history.push({pathname: `/users/${friendId}`});
    this.props.fetchUser(friendId);
  }

  friendRequestDelete(requestId){
   
    this.props.deleteFriend(requestId);
    this.props.fetchUser(this.props.user.id);
  }


  render(){
    
    const {flexdirection, friend, url, user, currentUser} = this.props;

  
    const params = url.split("/");
    const tagName = params[params.length -1];
    
    let unfriend = ''
    if(tagName==='friends' && user.id === currentUser.id){
        unfriend = <MdOutlineMoreHoriz fontSize="2.5rem" />
    }
    
    let userImag =  <Avatar name={`${friend.fname}`} size="100" className='friendrow__img'/>
        
    if(friend.photoUrl){
        userImag =   <Avatar src={`${friend.photoUrl}`} size="100" className='friendrow__img'/>            
    }  


    if(friend.status[0].status === "Pendding"){
      return null;
    }
    return (      
      <div className={flexdirection}  >          
         <div onClick={()=>this.redirectPage(friend.id)}>
            {userImag} 
          </div>

         <div className='friendrow__info' onClick={()=>this.redirectPage(friend.id)}>
            
            <p>{friend.fname+' '+friend.lname}</p>
         </div>
         <div  className='friend__menu'>
          {unfriend} 
          <div className="friend__top__right--menu">
                  <div className="friend__option"
                    onClick={()=>this.friendRequestDelete(friend.status[0].id)}>
                    <BsPersonX fontSize="2.5rem" />
                    <button  className="post__option-button"> Unfriend </button> 
                  </div> 
                              
          </div>   
        </div>         
          
      </div>
    )
  }
}

export default FriendList

