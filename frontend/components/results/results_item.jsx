import React from 'react';
import { Link } from 'react-router-dom';

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
                                2.2M views
                                </div>
                                <span className="videoshow-views-dot"></span>
                                <div className="video-index-date">
                                1 month ago
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