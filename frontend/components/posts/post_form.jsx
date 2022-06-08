import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.post.body,
      photoFile: null,
      photoUrl: this.props.post.photoUrl,
      user_id: this.props.post.user_id
    }
  }

  componentWillUnmount() {
    this.props.closeModal();
}
  
  render() {   
    return (
      <div className='form__box'>   
          <div className="form__header">
              <h2>{this.props.formType}</h2>               
          </div> 
          <div onClick={this.props.closeModal} className="close-x x-background">X</div>  
            
          <form className="form__post">
              <div  className="form__avatar">
                  <FaUserCircle fontSize="3.5rem"  color='gray'/>
                  <p className='user-name'> {this.props.currentUser.fname} {this.props.currentUser.lname}</p>
              </div>
              <div className='form__input' >
                <input 
                  value={this.state.body}
                  placeholder={` What's on your mind, ${this.props.currentUser.fname}? `} 
                  />                    
              </div> 

              <div className="form__file">
                  
                  <div className="add-photo"> 
                    <div className='circle-background'>
                      <MdLibraryAdd fontSize="2.35rem" />
                    </div>
                    Add photos 
                  </div>  
              </div> 
              <div>
                <button 
                    className="btn btn--primary btn--post" 
                    > 
                      Post
                </button>                 
              </div>
          </form>
                          
      </div>
    );
  }
}
  
export default PostForm;
  