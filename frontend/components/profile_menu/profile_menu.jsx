import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.toggleActive = this.toggleActive.bind(this);
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
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default ProfileMenu;