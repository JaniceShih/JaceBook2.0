import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { MdSearch} from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
import Avatar from 'react-avatar';
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

import { CgMenu } from "react-icons/cg";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';




class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dropdown: 'nav__menu--none',
            avatar: '',
            icons: 'black'
        }    
        this.redirectPage = this.redirectPage.bind(this);   
    }

    handleClick() {
        return (e) => {           
            (this.state.dropdown === 'nav__menu--none') ? this.setState({dropdown: '',avatar: 'avatar--active', icons: '#1877f2'}) : this.setState({dropdown: 'nav__menu--none',avatar: '', icons: 'black'});
        };
    };

    
    redirectPage(url){         
        this.props.history.push({pathname: url});
    }

    componentDidMount(){
             this.props.closeModal();
    }

    
    render() {
      

        const {currentUser, url} = this.props;
      

        let userImag =  <Avatar name={`${currentUser.fname}`} size="35" round={true} />
        
        if(currentUser.photoUrl){
            userImag =   <Avatar src={`${currentUser.photoUrl}`} size="35" round={true} />            
        }

        let userImag_profile =  <Avatar name={`${currentUser.fname}`} size="50" round={true} />
        
        if(currentUser.photoUrl){
            userImag_profile =   <Avatar src={`${currentUser.photoUrl}`} size="50" round={true} />            
        }

        let nav__menu = this.state.dropdown;
        let avatar = this.state.avatar;
        let icons = this.state.icons;

        const params = url.split("/");
        const tagName = params[params.length -1];
        
        let homeactive = "";
        let friendsactive = "";
        
        switch(tagName){
            case 'friends':
                friendsactive = "navbar__option--active";
                break   
            case '':
                homeactive = "navbar__option--active";         
                break
            default:
                break 
        }


        return (
            <div className='navbar'>
                <div  className='navbar__left'>
                    <div>
                         <Link to="/">
                             <img src={window.jacebook} className="navbar__logo" />
                        </Link>
                    </div>

                    {/* <div className='navbar__input'>                        
                        <MdSearch color="#74787e" fontSize="2rem"/>
                        <input type="text" placeholder='Search JaceBook' className='navbar__search'/>
                       
                    </div> */}
                    
                    <div className='navbar--bookmark--small' onClick={()=>this.redirectPage('/bookmarks')}>
                        <CgMenu  color="#74787e" fontSize="3rem" />
                    </div>
                    
                </div>
                
                <div  className='navbar__center'>                   
                    <div className={`navbar__option ${homeactive}`} onClick={()=>this.redirectPage('/')}>
                       
                            <AiFillHome color={(homeactive === "" ? "#74787e": "1877f2")} fontSize="3rem" />
                       
                    </div>
                    <div className='navbar__option'> 
                        <a href="https://janiceshih.github.io/the-covid-19-tracker/" target="_blank"> 
                            <FaChartArea  color="#74787e" fontSize="2.6rem"/>
                        </a>
                    </div> 
                    <div className='navbar__option'> 
                        <a href="https://www.linkedin.com/in/hsiu-chuan-shih-466b22236/" target="_blank"> 
                            <AiOutlineLinkedin  color="#74787e" fontSize="2.8rem"/>
                        </a>
                    </div> 
                    <div className='navbar__option'> 
                        <a href="https://github.com/JaniceShih" target="_blank">
                            <VscGithub  color="#74787e" fontSize="2.8rem"/>
                        </a>
                    </div> 
                 
                    <div className={`navbar__option ${friendsactive}`}   onClick={()=>this.redirectPage('/friends')}> 
                        <FaUserFriends  color={(friendsactive === "" ? "#74787e": "1877f2")} fontSize="2.8rem"/>
                    </div> 

                    <div className='navbar__option navbar--bookmark' onClick={()=>this.redirectPage('/bookmarks')}> 
                        {/* <Link to='/bookmarks'><CgMenu  color="#74787e" fontSize="3rem"/></Link> */}
                        <CgMenu  color="#74787e" fontSize="3rem"/>
                    </div> 
                   
                </div>
                
                   

                <div  className='navbar__right'>
                    <div className="navbar__info">
                        <div className="navbar__info--user" onClick={()=>this.redirectPage(`/users/${currentUser.id}`)}> 
                                <div className="navbar__info--userimg">
                                     {userImag}
                                </div>
                                <div className="navbar__info--username">{currentUser.fname}</div>                                
                        </div>
          
                        {/* <div className="avatar avatar--medium">
                            <CgMenuGridO color="black" fontSize="2rem" />
                        </div>  */}

                
                        {/* <div className="avatar avatar--medium">
                            <FaFacebookMessenger color="black" fontSize="2rem" />
                        </div>  */}



                        {/* <div className={`avatar avatar--medium`}>
                            <MdNotifications color="black" fontSize="2rem"/>
                        </div>  */}

              
                        <div className={`nav_dropdown`}>
                            <div onClick={this.handleClick()} className={`avatar avatar--medium  ${avatar}`}>
                                <AiFillCaretDown color={icons} fontSize="1.8rem"  />
                            </div>
                           

                            <div className={`nav__menu ${nav__menu}`}>
                                <div className='nav__menu--option' onClick={()=>this.redirectPage(`/users/${currentUser.id}`)}>
                                
                                    <div className="navbar__info--userimg">
                                        {userImag_profile}
                                    </div>
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