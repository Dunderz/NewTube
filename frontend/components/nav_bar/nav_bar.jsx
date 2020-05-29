import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenu from '../profile_menu/profile_menu';
import Search from '../search/search';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
       
    render() {
        const { currentUser, logout } = this.props;

        const display = currentUser ? (
                <div>
                    <ProfileMenu currentUser={currentUser} logout={logout}/>
                </div>
            ) : ( 
            
                <Link className="nav-sign-in-link" to="/login">
                    <div className="nav-sign-in-container">
                        
                        <div className="sign-in-icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="nav-sign-in">SIGN IN</div>
                    </div>
                </Link>
        );
        return (
            <div className="nav-bar">
                <div className="top-left">
                    <div className="hamburger-container noSelect" onClick={() => this.props.openModal('modal-side-bar')}>
                        <img id='hamburger-logo' src={ window.hamburger } />
                    </div>
                    <Link className="new-tube-top-left-logo noSelect" to="/"><img id='new-tube-logo' src={ window.newtube } /></Link>
                </div>
                <div className="center">
                    <Search moreProps={this.props} />
                </div>

                <div className="top-right">
                    <div onClick={() => currentUser ? this.props.openModal('upload') : this.props.history.push('/login')} className="upload-icon-container">
                        <img src={ window.videoPlus } id='upload-icon'/>
                    </div>
                    {display}
                </div>
            </div>
        )
    }
}

export default NavBar;