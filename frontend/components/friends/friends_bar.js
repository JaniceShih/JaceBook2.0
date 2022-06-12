import React from 'react'
import { Link} from 'react-router-dom';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';


function Friendsbar(props) {
  
    return (
        <div className='friendbar'>
            <h1>Friends</h1>
            {/* <Link to="">
              <div className='friendbar__option friendbar__option--active'>           
                    <BsFillPersonLinesFill fontSize="2.5rem" className='friendbar__icons friendbar__icons--active' color='#fff'/> All Friend 
              </div>
            </Link>  */}

            <Link to="/friends">
              <div className='friendbar__option friendbar__option--active'>           
                    <BsFillPersonPlusFill fontSize="2.5rem" className='friendbar__icons friendbar__icons--active' color='fff'/> Friend Requests
              </div>
            </Link> 

             
        </div>
    )
}

export default Friendsbar