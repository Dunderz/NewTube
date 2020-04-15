import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenu from '../profile_menu/profile_menu';

export default ({ currentUser, logout }) => {
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
                <div className="hamburger-container">
                    <img id='hamburger-logo' src={ window.hamburger } />
                </div>
                <Link className="new-tube-top-left-logo" to="/"><img id='new-tube-logo' src={ window.newtube } /></Link>
            </div>
            <div className="center">
                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                    <button className="search-button" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="top-right">
                <div className="upload-icon-container">
                    <img src={ window.videoPlus } id='upload-icon'/>
                </div>
                {display}
            </div>
        </div>
    )
}