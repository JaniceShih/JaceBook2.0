import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

class NavBar extends React.Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        const {currentUser} = this.props;
        let userImag =  "";
   
        return (
            <div className='navbar'>
                <div  className='navbar__left'>
                    <div>
                         <Link to="/">
                             <img src={window.jacebook} className="navbar__logo" />
                        </Link>
                    </div>
                   
                </div>

                <div  className='navbar__center'>
                   
                </div>

                <div  className='navbar__right'>
                    <div className="navbar__info">
                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg"><Avatar /></div>
                                <div className="navbar__info--username">{currentUser.fname}</div>                                
                            </div>
                     
                        <div onClick={this.props.logout}>
                               <p>
                                 Logout
                                </p>                                   
                        </div>                           
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;