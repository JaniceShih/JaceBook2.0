import React from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import Avatar from 'react-avatar';

import { MdLibraryAdd } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.post.body,
      photoFile: null,
      photoUrl: this.props.post.photoUrl,
      user_id: this.props.post.user_id,
      add_photo: (this.props.formType =='Create post' || !this.props.post.photoUrl) ? 'add-photo' : 'displayNone',
      photo_preview: (this.props.post.photoUrl) ? 'photo-preview' : 'displayNone',
    }
     this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);    
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    formData.append('post[user_id]', this.state.user_id);



    if(this.props.formType === 'Create post'){
      this.props.createPost(formData).then(
        () => this.props.closeModal()
      )
    }else{
      formData.append('post[id]', this.props.post.id);
      this.props.updatePost(formData)
      .then(this.setState({ body: "" }))
      .then(
        () => this.props.closeModal()
      )
    }

  }

  handleFile(e) {
    // console.log("handleFile");
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result, add_photo: 'displayNone', photo_preview: 'photo-preview'});
    };
    // console.log(this.state);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUpdate(field){
    
    return e =>(
      this.setState({
        [field]: e.currentTarget.value
      })
    )      
  }

  handleClose(){  
    return e =>(
      this.setState({ photoFile: null, photoUrl: null, add_photo: 'add-photo',
      photo_preview: 'displayNone'})
    )      
  }
  
  
  render() {   
    // console.log(this.state.photoUrl);
    const preview = this.state.photoUrl ? 
        <>
          <div className={this.state.photo_preview}> 
            <div > 
              {/* <MdEdit fontSize='1.85rem'/>  */}
              <label htmlFor="file-input" className="photo-edit">
                  <MdEdit fontSize='1.85rem'/> Edit
              </label>

              <input id="file-input" type="file" 
                      onChange={this.handleFile}
                      onClick={e => (e.target.value = null)}
                      className="custom-file-input" accept="image/*" />
         
            </div>
            <div className="close-x x-background" onClick={this.handleClose()}>X</div>
           
              <img src={this.state.photoUrl} className="photo-img"/>  
           
          </div> 
          
        </>:        
        null;

    const {currentUser} = this.props;
    let userImag =  <Avatar name={`${currentUser.fname}`} size="38" round={true} />
    
    if(currentUser.photoUrl){
        userImag =   <Avatar src={`${currentUser.photoUrl}`} size="38" round={true} />            
    }

    return (
      <div className='form__box'>   
          <div className="form__header">
              <h2>{this.props.formType}</h2>               
          </div> 
          <div onClick={this.props.closeModal} className="close-x x-background">X</div>  
            
          <form className="form__post">
              <div  className="form__avatar">
                  {userImag}
                  <p className='user-name'> {this.props.currentUser.fname} {this.props.currentUser.lname}</p>
              </div>
              <div className='form__input' >
                <input 
                  value={this.state.body}
                  placeholder={` What's on your mind, ${this.props.currentUser.fname}? `} 
                  onChange={this.handleUpdate('body')}
                  />                    
              </div> 

              <div className="form__file">
                  <div className='photo-preview'>
                    <div className={`${this.state.add_photo}`}> 
                        <input type="file" 
                          className="custom-file-input" 
                          onChange={this.handleFile}
                          onClick={e => (e.target.value = null)}
                        /> 
                        <div className='circle-background'>
                          <MdLibraryAdd fontSize="2.35rem" />
                        </div>
                        Add photos                    
                    </div>
                    {preview} 
                  </div>
                  
                 
              </div> 
              <div>
                <button 
                    className="btn btn--primary btn--post" onClick={this.handleSubmit}
                    > 
                      {(this.props.formType =='Create post') ? 'Post' : 'Save'}
                </button>                 
              </div>
          </form>
                          
      </div>
    );
  }
}
  
export default PostForm;
  