import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    handleClick(e) {
        this.setState({ show: !this.state.show });
    }

    render() {
        let dropdown = (
            <div>OH SHIT</div>
        );
        return (
            <>
                <FontAwesomeIcon icon={faUserCircle} />
                {dropdown}
                <button onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}

export default ProfileMenu;