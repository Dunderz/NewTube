import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;
        return (
            <>
                <Link className="video-link" to={`/videos/${video.id}`}>                  
                    <div className="video-index">
                    <img src={video.thumbnailUrl} />
                    </div>
                    <div className="video-info">
                    <div className="video-info-top-row">
                        <FontAwesomeIcon className="video-index-user-icon" icon={ faUserCircle}/>
                        <div className="video-index-details">
                        <div className="video-index-title">
                            {video.title}
                        </div>
                        <div className="video-index-uploader">
                            <p>Bob Jenkins</p>
                        </div>
                        <div className="video-index-views-date-container">
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