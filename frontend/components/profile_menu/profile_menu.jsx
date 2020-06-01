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

        this.container = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    // fix //
    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(e) {
        const current = this.container.current;
        const outside = current ? current.contains(e.target) ? false : true : false;
        if (outside === true) {
            this.setState({ active: false });
        } 
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push("/"))
    }

    handleClick(e) {
        window.location.assign("", "blank");
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
            <div className="profile-menu" ref={this.container}>
                <div className="profile-menu-icon" style={{backgroundColor: this.props.currentUser.color}} onClick={this.toggleActive}>
                    <p className="profile-letter">{this.props.currentUser.username[0].toUpperCase()}</p>
                </div>
                <div className={isActive}>
                    <div className="dropdown-user-info">
                        <div className="user-icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="dropdown-credentials">
                            <div className="dropdown-fullname">
                                {/* implement later */}
                            </div>
                            <div className="dropdown-username">
                                {this.props.currentUser.username}
                            </div>
                            <div className="dropdown-email">
                                {this.props.currentUser.email}
                            </div>
                            {/* <div className="dropdown-google-account">
                                <p>Manage your Google Account</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="dropdown-channel">
                        <div className="dropdown-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>Your Channel</div>
                    </div>
                    <a href="https://github.com/DunderProto/NewTube" className="dropdown-github-link" target="_blank">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </div>
                            <div>Github</div>
                        </div>
                    </a>
                    <div onClick={this.handleLogout} className="dropdown-logout">
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