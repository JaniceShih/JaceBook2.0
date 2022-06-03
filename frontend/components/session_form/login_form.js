import React from "react";


class LoginForm extends React.Component {
    constructor(props){
        super(props); 
       
    }

    render(){       
        
        return(
            <div className="splash-page">
                <div className="splash-intro">
                    <h1>jacebook</h1>
                    <h2>Connect with friends and the world around you on Jacebook.</h2>
                </div>

                <div className="login-box">
                    <div>
                        <input type="text" class="input__field login" name="email" id="email" data-testid="royal_email" placeholder="Email or phone number" autofocus="1" aria-label="Email or phone number" />

                        <input type="text" class="input__field login" name="password" id="password" data-testid="royal_passwordl" placeholder="Password" autofocus="2" aria-label="Password" />
                    </div>

                    <div>                        
                        <button className="btn btn--primary btn--login" onClick={this.handleSubmit}> 
                                Log In 
                        </button>
                    </div>

                    <div className="login__demo">                        
                            <a onClick={this.loginDemo} className="link-demo"> Demo Log In </a>                                                
                    </div>

                    <div className="login__create">
                        
                        <button 
                            className="btn btn--secondary btn--create"
                            onClick={this.openSignupModal}>
                            Create new account 
                        </button>
                    </div> 

                </div>

            </div>
        )
    }
}

export default LoginForm;