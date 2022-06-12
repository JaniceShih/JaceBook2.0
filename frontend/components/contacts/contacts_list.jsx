import Avatar from 'react-avatar';
import React from 'react'
import { Link} from 'react-router-dom';

function ContactLIst(props) {
  const {friend} = props;
  if(friend.status[0].status === "Pendding"){
    return null;
  }
  return (
    <Link to={`/users/${friend.id}`}>
    <div className='sidebarrow' >
      
        {
          (friend.photoUrl) ? <Avatar src={friend.photoUrl} size="40" round={true}/> :  <Avatar name={`${friend.fname}`} size="40" round={true} />
        }
          
          <h4>{friend.fname+' '+friend.lname}</h4>
     
    </div>
    </Link>
  )
}

export default ContactLIst