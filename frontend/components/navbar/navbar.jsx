import React from 'react'
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import Avatar from '@mui/material/Avatar';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


class NavBar extends React.Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        const {currentUser} = this.props;

        let userImag =  <Avatar sx={{ height: '28px', width: '28px' }}
            /> 
        // if(currentUser.photoUrl){
        //     userImag =  <img src={currentUser.photoUrl} className="avatar avatar--small"/>            
        // }

   
        return (
            <div className='header'>
                <div  className='header__left'>
                    {/* <div>
                         <Link to="/">
                             <img src={window.jacebook} className="header__logo" />
                        </Link>
                    </div>
                    <div className='header__input'>
                        
                        <SearchIcon />
                        <input type="text" placeholder='Search JaceBook' title='In Construction.' disabled/>
                    </div> */}
                </div>

                <div  className='header__center'>
                    {/* <div className='header__option header__option--active'> 
                        <HomeIcon  fontSize="large" />
                    </div> */}

             
                    {/* <div className='header__option'> 
                        <SubscriptionsOutlinedIcon  fontSize="large" />
                    </div> */}

                    {/* <div className='header__option'> 
                        <Tooltip  title={<p style={{ color: "white", fontSize: '14px'}}>In Construction</p>}> 
                            <StorefrontOutlinedIcon  fontSize="large" />
                        </Tooltip >
                        
                    </div>   
                    
                    <div className='header__option'>
                        <Tooltip  title={<p style={{ color: "white", fontSize: '14px'}}>In Construction</p>}> 
                            <VideoLibraryIcon  fontSize="large" />
                        </Tooltip >
                        
                    </div>           
                    <div className='header__option'> 
                        <Tooltip  title={<p style={{ color: "white", fontSize: '14px'}}>In Construction</p>}>
                            <FlagIcon  fontSize="large" />
                        </Tooltip >
                        
                    </div>

                    <div className='header__option'>  
                        <Tooltip  title={<p style={{ color: "white", fontSize: '14px'}}>In Construction</p>}> 
                            <SupervisedUserCircleRoundedIcon  fontSize="large" />
                         </Tooltip >          
                        
                    </div> */}
                </div>

                <div  className='header__right'>
                    <div className="header__info">
                        <Link to={`/users/${currentUser.id}`}>                            
                            <div className="header__info--user"> 
                                <div className="header__info--userimg">{userImag}</div>
                                <div className="header__info--username">{currentUser.fname}</div>                                
                            </div>
                        </Link>
                     
                        <div onClick={this.props.logout}>
                               <p>
                                 <a> <ExitToAppRoundedIcon sx={{fontSize: 25 }}/> </a>
                                </p>
                                   
                        </div>
                               
                      
                        {/* <div className='header__info--option'>
                                <AddIcon sx={{fontSize: 25 }}/>
                        </div> */}
                        {/* <div className='header__info--option'>
                            <ForumIcon sx={{fontSize: 25 }}/>
                        </div>
                        <div className='header__info--option'>
                            <NotificationsActiveIcon sx={{fontSize: 25 }}/>
                        </div> */}
                        {/* <div className='header__info--option--expane'>
                            <ExpandMoreIcon sx={{fontSize: 25 }}/>

                            <div className='header__info--menu'>
                                <div onClick={this.props.logout} className='header__info--option'>
                                        <a > <ExitToAppRoundedIcon sx={{fontSize: 25 }}/> Log Out</a>
                                </div>
                               
                            </div>
                        </div> */}
                        {/*  */}
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;