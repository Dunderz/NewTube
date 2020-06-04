import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class RecommendedVideos extends React.Component {
    constructor(props) {
        super(props);

        this.handleRenderVideos = this.handleRenderVideos.bind(this);
    }

    handleRenderVideos() {
        this.props.videos.map(video => {
            debugger
            console.log(video);
        }) 
    }

    render() {
        console.log("RECOMMENDED VIDEOS: ");
        console.log(this);
        if (this.props.videos.length <= 1) {
            return (
                <></>
            );
        };

        let recVideos = [];
        let currentVid;
        let propVids = this.props.videos;

        for (let i = 0; i < propVids.length; i++) {
            if (propVids[i]) {
                if (propVids[i].id != this.props.match.params.id) {
                    if (i == 0) {
                        currentVid = (
                            <div className="videoshow-up-next-container">
                                <p>Up Next</p>
                                <div className="videoshow-up-next-video">
                                    <Link onClick={this.handleClick} key={propVids[i].id} className="videoshow-link" to={`/videos/${propVids[i].id}`}>                  
                                        <div className="videoshow-index">
                                            <img src={propVids[i].thumbnailUrl} />
                                        </div>
                                        <div className="videoshow-rec-info">
                                            <h2>{propVids[i].title}</h2>
                                            <Link to={`/users/${propVids[i].user.id}`} className="user-icon-link">
                                                <div className="uploader-name">
                                                    <h2>{propVids[i].user.username}</h2>
                                                </div>
                                            </Link>
                                            <div className="videoshow-rec-vid-stats">
                                                <div className="videoshow-rec-views">
                                                    <h2>{propVids[i].views} {propVids[i].views == 1 ? "view" : "views"}</h2>
                                                    <span className="videoshow-views-dot"></span>
                                                </div>
                                                <div className="videoshow-rec-timeago">
                                                    <h2>{timeAgo(propVids[i].created_at)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Link> 
                                </div>
                            </div>
                        );
                        recVideos.push(currentVid);
                        continue;
                    }
                    currentVid = (
                        <div key={propVids[i].id} className="videoshow-up-next-video"> 
                            <Link onClick={this.handleClick} className="videoshow-link" to={`/videos/${propVids[i].id}`}>                  
                                <div className="videoshow-index">
                                    <img src={propVids[i].thumbnailUrl} />
                                </div>
                                <div className="videoshow-rec-info">
                                    <h2>{propVids[i].title}</h2>
                                    <Link to={`/users/${propVids[i].user.id}`} className="user-icon-link">
                                        <div className="uploader-name">
                                            <h2>{propVids[i].user.username}</h2>
                                        </div>
                                    </Link>
                                    <div className="videoshow-rec-vid-stats">
                                        <div className="videoshow-rec-views">
                                            <h2>{propVids[i].views} {propVids[i].views == 1 ? "view" : "views"}</h2>
                                            <span className="videoshow-views-dot"></span>
                                        </div>
                                        <div className="videoshow-rec-timeago">
                                            <h2>{timeAgo(propVids[i].created_at)}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link> 
                        </div>
                    );
                    recVideos.push(currentVid);
                }
            }
        }
        
        return (
            <div className="recommended-videos-container">
                <div className="videoshow-recommended">
                    { recVideos }
                </div>
            </div>
        )
    }
}

export default RecommendedVideos;