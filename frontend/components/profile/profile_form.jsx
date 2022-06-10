import React from 'react';

import Avatar from 'react-avatar';


class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
    
        fileReader.onloadend = () => {
          this.setState({photoFile: file, photoUrl: fileReader.result});
        };
    
        if (file) {
          fileReader.readAsDataURL(file);
        }
      }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id); 
        formData.append('user[fname]', this.state.fname); 
        formData.append('user[lname]', this.state.lname);  
        formData.append('user[email]', this.state.email);
        
        if (this.state.photoFile) {
          formData.append('user[photo]', this.state.photoFile);
        }
      
        this.props.updateUser(formData);
        this.props.closeModal()
    }

    

    render(){

        const {user, errors} = this.props;

        const preview = this.state.photoUrl ? <Avatar src={`${this.state.photoUrl}`} size="168" round={true} />: <Avatar name={`${user.fname}`} size="168" round={true} />;

        return(
            <div className='form__box '> 
                <div className="form__header">
                <h2>{this.props.formType}</h2>               
                </div>

                <div >
                    <div onClick={this.props.closeModal} className="close-x x-background">X</div> 
                    <form className='form__post form__profile'>                      
                        <div>
                            Update profile picture
                        </div>
                        <div className="profile__file">
                            <div className="profile__file--edit">
                                <input type="file" 
                                className="profile__file--edit custom-file-input" 
                                onChange={this.handleFile}/>
                            
                            </div>
                            <input type="file" 
                            className="custom-file-input" 
                            onChange={this.handleFile}/>                  
                           
                            {preview} 
                                            
                        </div>



                        <div className="">
                            <div>
                                <label>First Name
                                    <input 
                                        type="text"
                                        className="input__field profile-field" 
                                        value={this.state.fname}
                                        placeholder="First Name"  
                                        onChange={this.handleInput("fname")}      
                                    />
                                </label>

                            </div>

                            <div>
                                <label>Last Name
                                    <input 
                                        type="text"
                                        className="input__field profile-field"
                                        value={this.state.lname}
                                        placeholder="Last Name" 
                                        onChange={this.handleInput("lname")}                              
                                    />
                                </label>
                            </div>

                            <div>
                                 <label>Email
                                    <input 
                                        type="text"
                                        className="input__field profile-field"
                                        value={this.state.email}
                                        placeholder="Email or phone number"  
                                        onChange={this.handleInput("email")}                              
                                    />
                                </label>
                             
                            </div>

                        </div>
                        <div>
                            <button 
                             className="btn btn--primary btn--post"  
                            onClick={this.handleSubmit} > 
                                Save
                            </button>                 
                        </div>
                                            
                                    
                    </form>
                </div>  
            </div>
        )
    }

}

export default ProfileForm;