import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class ResultsItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.video.description
        }
    }

    render() {
        const { video } = this.props;

        let sliced;

        if (this.state.description.length > 120) {
            sliced = this.state.description.slice(0, 120) + " ...";
        } else {
            sliced = this.state.description
        }

        return (
            <>
                <Link className="results-video-link" to={`/videos/${video.id}`}>                  
                    <div className="results-video-index">
                        <img src={video.thumbnailUrl} />
                    </div>
                    <div className="results-video-info">
                        <div className="video-info-top-row">
                            <div className="video-index-details">
                                <div className="results-video-index-title">
                                    {video.title}
                                </div>
                                <div className="video-index-views-date-container result margin-adjust">
                                    <Link to={`/users/${video.user.id}`} className="user-icon-link">
                                        <div className="results-video-index-uploader">
                                            {video.user.username}
                                        </div>
                                    </Link>
                                    <span className="videoshow-views-dot"></span>
                                    <div className="video-index-views">
                                        {video.views} {video.views == 1 ? "view" : "views"}
                                    </div>
                                    <span className="videoshow-views-dot"></span>
                                    <div className="video-index-date">
                                        {timeAgo(video.created_at)}
                                    </div>
                                </div>
                                <div className="results-video-description">
                                    <p>{sliced}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link> 
            </>
        )
    }
}

export default ResultsItem;