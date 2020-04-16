import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenu from '../profile_menu/profile_menu';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someFile: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('videos[title]')
    }
    
       
    render() {
        console.log(this.state);
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
                    <div className="hamburger-container">
                        <img id='hamburger-logo' src={ window.hamburger } />
                    </div>
                    <Link className="new-tube-top-left-logo" to="/"><img id='new-tube-logo' src={ window.newtube } /></Link>
                </div>
                <div className="center">
                    <form className="search-bar">
                        <input type="text" placeholder="Search"/>
                        <button type="submit" className="search-button" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>

                <div className="top-right">
                    <div onClick={() => this.props.openModal('upload')} className="upload-icon-container">
                        <img src={ window.videoPlus } id='upload-icon'/>
                    </div>
                    {display}
                </div>
            </div>
        )
    }
}

export default NavBar;