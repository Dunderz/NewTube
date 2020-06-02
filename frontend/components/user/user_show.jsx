import React from 'react';
import LeftNav from '../left_nav/left_nav';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.requestUser(this.props.match.params.id);
    }

    testClick() {
        console.log(this.props.user);
    }

    render() {
        console.log(this.props.user);
        if (this.props.user === undefined) {
            return (
                <>
                </>
            )
        }
        let videos = [];
        for (let id in this.props.user.videos) {
            videos.push(this.props.user.videos[id]);
        }
        return (
            <div onClick={this.testClick} className="user-show-container">
                <div className="left-nav-component">
                    <LeftNav />
                </div>
                <div className="user-show-content">
                    <div className="user-show-banner">
                        <div className="user-show-banner-content">
                            <div className="user-show-current-user">
                                <div className="user-show-banner-icon" style={{backgroundColor: this.props.user.color}}>
                                    {this.props.user.username[0].toUpperCase()}
                                </div>
                                <div className="user-show-banner-username">
                                    {this.props.user.username}
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
                                {videos.map(video => {
                                    return (
                                        <div key={video.id} className="video-container">
                                            <Link className="video-link" to={`/videos/${video.id}`}>                  
                                            <div className="video-index">
                                                <img src={video.thumbnailUrl} />
                                            </div>
                                            <div className="video-info">
                                                <div className="video-info-top-row">
                                                
                                                <div className="video-index-details">
                                                    <div className="video-index-title">
                                                    {video.title}
                                                    </div>
                                                    <div className="video-index-views-date-container">
                                                    <div className="video-index-views">
                                                        {video.views} views
                                                    </div>
                                                    <span className="videoshow-views-dot"></span>
                                                    <div className="video-index-date">
                                                        {timeAgo(video.created_at)}
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>

                                            </div>
                                            </Link> 
                                        </div>
                                        
                                    );
                                })}
                            </div>
                            <div className="user-show-subscription-header">
                                Subscriptions
                            </div>
                            <div className="user-show-subscriptions">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;