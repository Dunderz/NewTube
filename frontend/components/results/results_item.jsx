import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class ResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;
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
                            <div className="video-index-views-date-container">
                                <div className="results-video-index-uploader">
                                    {video.user.username}
                                </div>
                                <span className="videoshow-views-dot"></span>
                                <div className="video-index-views">
                                    {video.views} {video.views == 1 ? "view" : "views"}
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
            </>
        )
    }
}

export default ResultsItem;