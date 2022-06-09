import React from "react";


class SignupFrom extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state).then(
            () => this.props.closeModal()
        );
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };
    
    componentWillUnmount() {
        this.props.resetErrors();
    }

    render(){ 
        const errors = this.props.errors;      
        
        return(
            <div className="signup__box">
                <div className='signup__header'>
                    <h2>Sign Up</h2>
                    <p>It’s quick and easy.</p>
                </div>
                <div onClick={this.props.closeModal} className="close-x">X</div> 

                <div>
                    <label>
                        <input 
                            type="text"
                            className="input__field fname-field"       
                            placeholder="First name"
                            value={this.state.fname}
                            onChange={this.handleInput("fname")}   
                        />
                    </label>
                    <p className="fnameError" style={errors.includes("Fname can't be blank") ? ({ display: "" }) : ({ display: "none" })}>
                        First name can't be blank!
                    </p>

                    <label>
                        <input 
                            type="text"
                            className="input__field lname-field"       
                            placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.handleInput("lname")}    
                        />
                    </label>
                    <p className="lnameError" style={errors.includes("Lname can't be blank") ? ({ display: "" }) : ({ display: "none" })}>
                        Last name can't be blank!
                    </p>
                    
                    <label>
                        <input 
                            type="text"
                            className="input__field signup-field"       
                            placeholder="Email or phone number"
                            value={this.state.email}
                            onChange={this.handleInput("email")}     
                        />
                    </label>
                    <p className="emailError" style={errors.includes("Email can't be blank") || errors.includes("Email is invalid") ? ({ display: "" }) : ({ display: "none" })}>
                        Email can't be blank or Email is invalid!
                    </p>

                    <label>
                        <input 
                            type="password"
                            className="input__field signup-field"       
                            placeholder="New password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}    
                        />
                    </label>
                    <p className="passwordError" style={errors.includes("Password is too short (minimum is 6 characters)") ? ({ display: "" }) : ({ display: "none" })}>
                        Password is too short! (minimum is 6 characters)
                    </p>

                    <div className="signup__term">
                        People who use our service may have uploaded your contact information to Facebook. Learn more.
                    </div>

                    <div className="signup__term">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                    </div>

                    <div  className="signup__submit">
                      
                      <button  className="btn btn--signup" onClick={this.handleSubmit}> 
                         Sign Up
                      </button>
                  </div>

                </div>                
            </div>
        )
    }
}

export default SignupFrom;