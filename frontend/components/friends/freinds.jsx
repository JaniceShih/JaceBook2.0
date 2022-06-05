import React from 'react'
import FriendList from './friends_list'

function Friends(props) {
  const {currentUser} = props;
  return (
    <div className='friendslist'>
        <div className='ads'>
          <h3>Sponsored</h3>
          <div  className='ad'>
            <div className='ad__img'>
                <img src='https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/6269b3a19f67fd137a262d0a_A%20Logo%20Main%20-%20Red.svg'/>
            </div>
            <div className='ad__info'>
                <h3>
                    Change your career. 
                 </h3>
                 <h3>
                 Change your life
                 </h3>
                 
                   <a href='https://www.appacademy.io/' target='_blank'>
                      www.appacademy.io/  
                   </a>
                 
                 
              </div>
          </div>
        </div>

{/* 
        {
            currentUser.followers.map(
              (friend, idx)=> <FriendList  friend = {friend} key={idx}/>)
        }

        {
          currentUser.following.map(
            (friend, idx)=> <FriendList  friend = {friend} key={idx}/>)
        } */}

    </div>
  )
}

export default Friends