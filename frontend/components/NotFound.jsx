import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import NavBarContainer from "./navbar/navbar_container";



class NotFound extends React.Component {
    constructor(props) {
        super(props); 
        
        this.redirectPage = this.redirectPage.bind(this);   
    }

    redirectPage(){         
        this.props.history.push({pathname: '/'});
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){
        return(
            <>
                <NavBarContainer />
                <div className="notfound">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg" className="notfound-img"/>
                    <h1>This Page Isn't Available</h1>   
                    <p>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</p> 
                    <button 
                        className="btn btn--primary btn--create"
                        onClick={()=>this.redirectPage()}
                        >
                        Go to New Feed 
                    </button>
                    <p><a onClick={()=>this.goBack()}>Go Back</a></p>
                </div> 
            </>

        )
    }
}


const mstp = (state, ownProps) => {
    return {    
        history: ownProps.history
    };
};


const mdtp = (dispatch) => {
    return ({
       
    });
};

// export default NotFound;
const NotFoundContainer = connect(mstp, mdtp)(NotFound);
export default withRouter(NotFoundContainer);