import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import FriendList from "../friends/friend_list"
import PhotoList from "../photos/photo_list"

class ProfileSidebar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            bio: this.props.user.bio,
            editstatus: ''
        }
        this.updateEditStatus = this.updateEditStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    updateEditStatus(){
        this.setState({
            editstatus: 'edit'
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[id]', this.props.user.id); 
        formData.append('user[bio]', this.state.bio); 
     
        this.props.updateUser(formData);

        this.setState({
            editstatus: ''
        })

    }

    

    update(field){
        return e =>(
          this.setState({
            [field]: e.currentTarget.value
          })    
        )      
    }

    render(){

        const {user, posts} = this.props;
        let freinds = [...user.followers, ...user.following];

        const photos = [];
        Object.values(posts).map(post => {       
             if(post.user_id === user.id && post.photoUrl) 
                {photos.push(post.photoUrl)} 
            })
        
        const bio = this.state.bio
        let user_bio = 
                <p className='intro__p'>
                    {(bio) ? bio : `Hi there 👋`}
                </p>;
        if (this.state.editstatus === 'edit'){
            user_bio =                            
               <input className='intro__bio'
               value={bio}
               onChange={this.update('bio')}                            
              /> 
              
        }
       
        return (

            <div className='profile__sidebar'>
                <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__heading' >
                                Intro                                     
                        </div>  
                        <div className='intro__bottom' >
                            <form>
                                {user_bio}  
                                <button 
                                onClick={this.handleSubmit} 
                                type="submit"
                                className='btn--hidden'>
                                Hidden submit
                                </button>   
                           </form>                        
                            
                             <button 
                                className='intro__input' 
                                onClick={this.updateEditStatus}>
                                    {(bio === null || bio === "") ? ` Add Bio` : `Edit Bio `}
                              </button>                                       
                        </div>   

                       
                    </div>
                </div>
                <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__header'>
                                <div className='intro__heading'>
                                     Photos 
                                </div>
                                <div className='intro__link'>
                                     <Link to={`/users/${user.id}/photos`}> See all photos </Link>
                                </div>   
                        </div>

                        <div className='friend__list'>
                                {
                                photos.slice(0, 8).map(
                                    (photo,idx) => 
                                        <PhotoList 
                                            photo={photo} 
                                            flexdirection='friendcol'
                                            key={idx}
                                        />) 
                                }   
                        </div>  
                                            
                    </div>
                </div>

                <div className='profile__sidebar--info profile__fix'>
                    <div className='profile__intro' >
                        
                        <div >
                            <div className='intro__header'>
                                <div className='intro__heading'>
                                     Friends 
                                </div>
                                <div className='intro__link'>
                                     <Link to={`/users/${user.id}/friends`}> See all friends </Link>
                                </div>                               
                            </div>

                            <div className='intro__header'>
                                <p>{freinds.length} Friends</p>
                            </div>

                            <div className='friend__list'>
                                {
                                freinds.slice(0, 8).map(
                                    (friend,idx) => 
                                        <FriendList 
                                            friend={friend} 
                                            flexdirection='friendcol'
                                            key={idx}
                                        />) 
                                }   
                            </div>  
                            
                        </div>  
                                            
                    </div>
                </div> 
          
             </div>

        )
    }
}

export default ProfileSidebar;