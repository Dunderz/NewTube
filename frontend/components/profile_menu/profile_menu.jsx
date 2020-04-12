import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, 
         faSignOutAlt,
         faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
    }

    handleClick(e) {
        window.location.assign("https://github.com/DunderProto/NewTube");
    }

    toggleActive(e) {
        this.setState({ active: !this.state.active });
    }

    render() {
        let isActive;
        if (this.state.active) {
            isActive = 'dropdown-show';
        } else {
            isActive = 'dropdown-hidden';
        }
        return (
            <div className="profile-menu">
                <div className="profile-menu-icon" onClick={this.toggleActive}>
                    <p className="profile-letter">{this.props.currentUser.username[0].toUpperCase()}</p>
                </div>
                <div className={isActive}>
                    <div className="dropdown-user-info">
                        <div className="user-icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="dropdown-credentials">
                            <div className="dropdown-username">
                                {this.props.currentUser.username}
                            </div>
                            <div className="dropdown-email">
                                {this.props.currentUser.email}
                            </div>
                            <div className="dropdown-google-account">
                                <p>Manage your Google Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-channel">
                        <div className="dropdown-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>Your Channel</div>
                    </div>
                    <div onClick={this.handleClick} className="dropdown-github">
                        <div className="dropdown-icon">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </div>
                        <div>Github</div>
                    </div>
                    <div onClick={this.props.logout} className="dropdown-logout">
                        <div className="dropdown-icon">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </div>
                        <div>Sign Out</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMenu;