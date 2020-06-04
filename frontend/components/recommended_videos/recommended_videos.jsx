import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class RecommendedVideos extends React.Component {
    constructor(props) {
        super(props);

        this.handleRenderVideos = this.handleRenderVideos.bind(this);
        this.handleStopPropagation = this.handleStopPropagation.bind(this);
    }

    handleRenderVideos() {
        this.props.videos.map(video => {
            console.log(video);
        }) 
    }

    handleStopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        if (this.props.videos.length <= 1) {
            return (
                <></>
            );
        };

        let recVideos = [];
        let currentVid;
        let upNextVid;
        let propVids = this.props.videos.slice();

        for (let k = 0; k < propVids.length; k++) {
            if (propVids[k].id == this.props.match.params.id) {
                propVids.splice(k, 1);
            }
        }

        for (let i = 0; i < propVids.length; i++) {
            if (propVids[i]) {
                if (propVids[i].id != this.props.match.params.id) {
                    if (i == 0) {
                        upNextVid = (
                            <div key={propVids[i].id} className="videoshow-up-next-container">
                                <p>Up Next</p>
                                <div className="videoshow-up-next-video">
                                    <div onClick={() => this.props.history.push(`/videos/${propVids[i].id}`)} key={propVids[i].id} className="videoshow-link">                  
                                        <div className="videoshow-index">
                                            <img src={propVids[i].thumbnailUrl} />
                                        </div>
                                        <div className="videoshow-rec-info">
                                            <h2>{propVids[i].title}</h2>
                                            <Link to={`/users/${propVids[i].user.id}`} onClick={this.handleStopPropagation} className="user-icon-link">
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
                                    </div> 
                                </div>
                            </div>
                        );
                        continue;
                    } else {
                        currentVid = (
                            <div key={propVids[i].id} className="videoshow-up-next-video"> 
                                <div onClick={() => this.props.history.push(`/videos/${propVids[i].id}`)} className="videoshow-link">                  
                                    <div className="videoshow-index">
                                        <img src={propVids[i].thumbnailUrl} />
                                    </div>
                                    <div className="videoshow-rec-info">
                                        <h2>{propVids[i].title}</h2>
                                        <Link to={`/users/${propVids[i].user.id}`} onClick={this.handleStopPropagation} className="user-icon-link">
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
                                </div> 
                            </div>
                        );
                        recVideos.push(currentVid);
                    }
                } 
            }
        }
        
        return (
            <div className="recommended-videos-container">
                <div className="videoshow-recommended">
                    { upNextVid }
                    { recVideos }
                </div>
            </div>
        )
    }
}

export default RecommendedVideos;