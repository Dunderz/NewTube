import React from 'react';
import LeftNav from '../left_nav/left_nav';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.currentUser);
    }

    render() {
        return (
            <div className="user-show-container">
                <div className="left-nav-component">
                    <LeftNav />
                </div>
                <div className="user-show-content">
                    <div className="user-show-banner">
                        <div className="user-show-banner-content">
                            <div className="user-show-current-user">
                                <div className="user-show-banner-icon" style={{backgroundColor: this.props.currentUser.color}}>
                                    {this.props.currentUser.username[0].toUpperCase()}
                                </div>
                                <div className="user-show-banner-username">
                                    {this.props.currentUser.username}
                                </div>
                            </div>
                            
                            <div className="user-show-banner-nav">
                                <div className="user-show-banner-nav-home">HOME</div>
                            </div>
                        </div>
                    </div>
                    <div className="user-show-videos-container">
                        <div className="user-show-videos-content">
                            <div className="user-show-upload-header">
                                Uploads
                            </div>
                            <div className="user-show-uploaded-videos">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;