import React from 'react'
import { Link } from 'react-router-dom';
import { MdSearch} from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import { FaChartArea } from 'react-icons/fa';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from "react-icons/vsc";
import { FaUserFriends } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdNotifications } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";




class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dropdown: 'nav__menu--none',
            avatar: '',
            icons: 'black'
        }       
    }

    handleClick() {
        return (e) => {
           
            (this.state.dropdown === 'nav__menu--none') ? this.setState({dropdown: '',avatar: 'avatar--active', icons: '#1877f2'}) : this.setState({dropdown: 'nav__menu--none',avatar: '', icons: 'black'});
        };
    };
    
    render() {
        const {currentUser} = this.props;
        let userImag =  "";

        let nav__menu = this.state.dropdown;
        let avatar = this.state.avatar;
        let icons = this.state.icons;

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
                        <input type="text" placeholder='Search JaceBook'/>
                    </div>
                   
                </div>
                
                <div  className='navbar__center'>                   
                    <div className='navbar__option navbar__option--active'> 
                        <AiFillHome color="#1877f2" fontSize="3rem" />
                    </div>
                    <div className='navbar__option'> 
                        <FaChartArea  color="#74787e" fontSize="2.6rem"/>
                    </div> 
                    <div className='navbar__option'> 
                        <AiOutlineLinkedin  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                    <div className='navbar__option'> 
                        <VscGithub  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                 
                    <div className='navbar__option navbar--friends'> 
                        <FaUserFriends  color="#74787e" fontSize="2.8rem"/>
                    </div> 
                   
                </div>

                <div  className='navbar__right'>
                    <div className="navbar__info">
                        <div className="navbar__info--user"> 
                                <div className="navbar__info--userimg"><FaUserCircle fontSize="3rem" /></div>
                                <div className="navbar__info--username">{currentUser.fname}</div>                                
                        </div>
          
                        <div className="avatar avatar--medium">
                            <CgMenuGridO color="black" fontSize="2rem" />
                        </div> 

                
                        <div className="avatar avatar--medium">
                            <FaFacebookMessenger color="black" fontSize="2rem" />
                        </div> 



                        <div className={`avatar avatar--medium`}>
                            <MdNotifications color="black" fontSize="2rem"/>
                        </div> 

              
                        <div className={`avatar avatar--medium nav_dropdown ${avatar}`}>
                            <AiFillCaretDown color={icons} fontSize="1.5rem" onClick={this.handleClick()} />

                            <div className={`nav__menu ${nav__menu}`}>
                                <div className='nav__menu--option'>
                                
                                    <div className="navbar__info--userimg"><FaUserCircle fontSize="5rem" /></div>
                                    <div className="navbar__info--username">
                                        <p>
                                            {currentUser.fname} {currentUser.lname}
                                        </p>
                                        <p className='navbar__info--profile'>
                                           See your profile
                                        </p>
                                    </div>

                                </div>

                                <hr className='navbar__info-hr'></hr>
                                <div className='nav__menu--option' onClick={this.props.logout}>
                                    <div className='avatar avatar--medium'>
                                        <IoLogOut color="black" fontSize="2.5rem" />
                                    </div>
                                    <div className='nav__menu--title'>
                                        Log Out
                                    </div>       
                                </div> 
                           </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;