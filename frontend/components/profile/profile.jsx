import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import PostIndexContainer from "../posts/posts_index_container"
import ProfileSidebar from "./propfile_sidebar"
import PhotosContainer from "./photos_container"
import FriendsContainer from "./friends_container"

import Avatar from 'react-avatar';
import { MdEdit } from 'react-icons/md';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { BsPersonXFill } from 'react-icons/bs';



class Profile extends React.Component{

    constructor(props){
        super(props);
        this.openEditProfileModal = this.openEditProfileModal.bind(this); 
        this.friendRequest = this.friendRequest.bind(this);
    }

    openEditProfileModal(e){
        e.preventDefault();
        this.props.openModal({ type: 'edit_profile', user: this.props.user });
    }

    friendRequest(friendId){
       
        const friend = {
            user_id: this.props.currentUser.id,
            friend_id: friendId,
            status: 'Pendding'
        }
        // console.log(friend);
        this.props.createFriend(friend);
        this.props.fetchUser(this.props.userId);
    }
    
    friendRequestDelete(requestId){
        this.props.deleteFriend(requestId);
        this.props.fetchUser(this.props.userId);
    }

    componentDidMount(){
        // console.log(this.props.userId);
        this.props.fetchUser(this.props.userId);
       
    }

      
    render(){
        // debugger
        const {currentUser, user, url, posts, history, updateUser, fetchUser} = this.props;
        
        let freinds = [];
        const params = url.split("/");
        const tagName = params[params.length -1];
        let userImag ='';
        let profileButton ='';
        if (!user){
            return null  
        }else{
             userImag =  <Avatar name={`${user.fname}`} size="178" round={true} />
        
             if(user.photoUrl){
                userImag =   <Avatar src={`${user.photoUrl}`} size="178" round={true} />            
            }

            freinds = [...user.followers, ...user.following];
            
            profileButton = <>
                   <button className="btn--primary btn--profile" onClick={()=>this.friendRequest(user.id)}> 
                    <MdPersonAddAlt1 fontSize="2.3rem"/> Add Friend
                    </button></>
            if(user.id==currentUser.id){
                profileButton = <>
                    <button className="btn--gray btn--profile" onClick={this.openEditProfileModal}> 
                    <MdEdit fontSize="2.3rem"/> Edit profile
                    </button></>
            }else{
        
                for(let i=0; i < freinds.length; i++){
                    
                    if(freinds[i].id === currentUser.id && freinds[i].status[0].status === 'Friends'){
                       
                        profileButton = <>
                            <button className="btn--primary btn--profile" > 
                                    <BsFillPersonCheckFill fontSize="2.3rem"/> Friends
                            </button></> 
                        
                    }

                    if(freinds[i].id=== currentUser.id && freinds[i].status[0].status === 'Pendding'){
                     
                        profileButton = <>
                            <button className="btn--primary btn--profile" onClick={()=>this.friendRequestDelete(freinds[i].status[0].id)}> 
                                    <BsPersonXFill fontSize="2.3rem" /> Cancel Request
                            </button></> 
                        
                    }
                }

            }
            
            
            // if(freinds.includes(user.id)){
            //     profileButton = <>
            //     <button className="btn--gray btn--profile" onClick={this.openEditProfileModal}> 
            //      Friend
            //     </button></>
            // }
        }

        let profile__sidebar = '';
        if(tagName !== 'friends' && tagName !== 'photos'){  
            profile__sidebar = 
               <ProfileSidebar user={user} posts={posts} history={history} updateUser={updateUser} fetchUser={fetchUser}/>
        }

        let postactive = "";
        let friendsactive = "";
        let photosactive = "";
        switch(tagName){
            case 'friends':
                friendsactive = "navbar__option--active";
                break
            case 'photos':
                photosactive = "navbar__option--active";
                break
            default:
                postactive = "navbar__option--active";
        }

       
     

        return (
            <>
                <NavBarContainer />
                <div className='profile'>

                    <div className='profile__top'> 
                        <div className="profile__coverpotp" >
                            <div className="profile__coverbar" >
                            </div>
                        </div>
                        <div className='profile__header'>
                                <div className='profile__img story__avatar--white'>
                                    {userImag}
                                </div>
                                <div className='profile__avatar'></div>
                                <div  className='profile__userinfo'>
                                    <div className='profile__userinfo-h1'>
                                            {user.fname} {user.lname}                                     
                                    </div>
                                    <div>
                                        <p> {freinds.length} friends </p>
                                    </div>
                                </div>
                                <div className='profile__userinfo--edit'>
                                
                                 
                                        {profileButton}
                              
                                </div>

                        </div>
                        <div  className='profile__navbar'>                    
                                <div className={`profile__option   ${postactive}`}>    
                                    <Link to={`/users/${user.id}`}> Posts </Link>
                                </div>                       
                                <div className={`profile__option  ${friendsactive}`}> 
                                    <Link to={`/users/${user.id}/friends`}>Friends </Link> 
                                </div>                         
                                <div className={`profile__option ${photosactive}`}> 
                                    <Link to={`/users/${user.id}/photos`}> Photos </Link> 
                                </div>                           
                        </div>
                    </div>
                    


                    <div className='profile__bottom'>
                        <div className='profile__body'>
                            {profile__sidebar}

                            <div className='profile__posts'>
                                <Switch>                             
                                    <Route path="/users/:userId/friends" 
                                        component={FriendsContainer }/>
                                    <Route path="/users/:userId/photos" 
                                        component={PhotosContainer} />
                                    <Route path="/users/:userId" 
                                        component={PostIndexContainer} />
                                </Switch>
                               
                            </div>
                         
                        </div>

                    </div>
                </div>
            </>
        )
    }

}

export default Profile