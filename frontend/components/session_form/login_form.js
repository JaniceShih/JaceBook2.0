import React from "react";


class LoginForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            email: '',
            password: ''
        }    
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state).then(
            () => this.props.history.push("./")
        );
    }

    loginDemo(e) {
        e.preventDefault();

        this.setState({
            email: "janice@gmail.com",
            password: "123456" }, 
        () => {
            this.props.login(this.state)
        });
    };

    openSignupModal(e) {
        e.preventDefault();
        this.props.openModal({type: "create_user"});
    };

    render(){  
        const errors = this.props.errors;     
        
        return(
            <div className="splash-page">
                <div className="splash-intro">
                    <h1>jacebook</h1>
                    <h2>Connect with friends and the world around you on Jacebook.</h2>
                </div>

                <div className="login-box">
                    <div>
                        <input type="text" className="input__field login" name="email" id="email" data-testid="royal_email" placeholder="Email or phone number" autoFocus="1" aria-label="Email or phone number"  value={this.state.email}  onChange={this.handleInput("email")} />

                        <input type="password" className="input__field login" name="password" id="password" data-testid="royal_passwordl" placeholder="Password" autoFocus="2" aria-label="Password"  value={this.state.password} onChange={this.handleInput("password")} />

                        
                    </div>
                    
                    <p className="loginError" style={errors.includes("Invalid username or password") ? ({ display: "" }) : ({ display: "none" })}>
                        The email you entered isn’t connected to an account or Invalid password.
                    </p>

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