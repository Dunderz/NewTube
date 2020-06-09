import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, 
         faSignOutAlt,
         faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { 
    faHome,
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub,
    faAngellist,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.dropdownBox = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleProfileLinkClick = this.handleProfileLinkClick.bind(this);
    }

    // fix //
    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(e) {
        const current = this.dropdownBox.current;

        let outside;
        if (current) {
            if (current.contains(e.target)) {
                outside = false;
            } else {
                outside = true;
            }
        } else {
            outside = false;
        }

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

    handleProfileLinkClick() {
        this.setState({ active: false })
    }

    render() {
        let isActive;
        if (this.state.active) {
            isActive = 'dropdown-show';
        } else {
            isActive = 'dropdown-hidden';
        }
        return (
            <div className="profile-menu" ref={this.dropdownBox}>
                <div className="profile-menu-icon" style={{backgroundColor: this.props.currentUser.color}} onClick={this.toggleActive}>
                    <p className="profile-letter">{this.props.currentUser.username[0].toUpperCase()}</p>
                </div>
                <div className={isActive}>
                    <div className="dropdown-user-info">
                        <div className="user-icon" style={{backgroundColor: this.props.currentUser.color}}>
                            {this.props.currentUser.username[0].toUpperCase()}
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
                    <Link to={`/users/${this.props.currentUser.id}`} className="dropdown-github-link" onClick={this.handleProfileLinkClick}>
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="dropdown-title">Your Channel</div>
                        </div>
                    </Link>
                    <a href="https://github.com/DunderProto/NewTube" className="dropdown-github-link" target="_blank">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div className="dropdown-title">Github</div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-nam-823180133/" className="dropdown-github-link" target="_blank">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                            <div className="dropdown-title">LinkedIn</div>
                        </div>
                    </a>
                    <a href="https://angel.co/u/isaac-nam" className="dropdown-github-link" target="_blank">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faAngellist} />
                            </div>
                            <div className="dropdown-title">Angelist</div>
                        </div>
                    </a>
                    <a href="https://dunderproto.github.io/" className="dropdown-github-link" target="_blank">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faFolderOpen} />
                            </div>
                            <div className="dropdown-title">Portfolio</div>
                        </div>
                    </a>
                    <div onClick={this.handleLogout} className="dropdown-github-link">
                        <div className="dropdown-github">
                            <div className="dropdown-icon">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </div>
                            <div className="dropdown-title">Sign Out</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMenu;