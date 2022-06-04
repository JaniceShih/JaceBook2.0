import React from 'react'
import { Link } from 'react-router-dom';
import { MdSearch} from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from "react-icons/vsc";
import { FaUserFriends } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdNotifications } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";




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

                    <div className='navbar__input'>
                        
                        <MdSearch color="#74787e" fontSize="2rem"/>
                        <input type="text" placeholder='Search JaceBook' title='In Construction.' disabled/>
                    </div>
                   
                </div>
                
                <div  className='navbar__center'>                   
                    <div className='navbar__option navbar__option--active'> 
                        <AiFillHome color="#1877f2" fontSize="3rem" />
                    </div>
                    <div className='navbar__option'> 
                        <MdStorefront  color="#74787e" fontSize="2.6rem"/>
                    </div> 
                    <div className='navbar__option'> 
                        <AiOutlineLinkedin  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                    <div className='navbar__option'> 
                        <VscGithub  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                 
                    <div className='navbar__option'> 
                        <FaUserFriends  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                   
                </div>

                <div  className='navbar__right'>
                    <div className="navbar__info">
                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg"><FaUserCircle fontSize="3rem" /></div>
                                <div className="navbar__info--username">{currentUser.fname}</div>                                
                        </div>

                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg">
                                    <CgMenuGridO color="black" fontSize="2.5rem" />
                                </div>
                                                             
                        </div>

                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg">
                                    <FaFacebookMessenger color="black" fontSize="2rem" />
                                </div>
                                                             
                        </div>

                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg">
                                    <MdNotifications color="black" fontSize="2.5rem" />
                                </div>
                                                             
                        </div>

                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg">
                                    <AiFillCaretDown color="black" fontSize="2rem" />
                                </div>
                                                             
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