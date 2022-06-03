import React from 'react'
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        const {currentUser} = this.props;
   
        return (
            <div className='header'>
                <div  className='header__left'>
                   
                </div>

                <div  className='header__center'>
                   
                </div>

                <div  className='header__right'>
                    <div className="header__info">
                        {currentUser.fname}
                     
                        <div onClick={this.props.logout}>
                               <p>
                                 Logout
                                </p>                                   
                        </div>                           
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;