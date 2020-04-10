import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <FontAwesomeIcon icon={faUserCircle} />
                <button onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}

export default ProfileMenu;