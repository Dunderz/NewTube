import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.id);
        this.props.requestVideos();
    }

    render() {
        if (this.props.video === undefined) {
            return (
                <div>
                    nooo
                </div>
            )
        }

        const { video } = this.props;
        const upNextVideo = this.props.videos.shift();

        return (
            
            <div className="videoshow-container">
                <div className="videoshow-left-box">
                    <div className="videoshow-player">
                        <video id="video" src={video.videoUrl} controls/>
                    </div>
                    <div className="videoshow-info">
                        <div className="videoshow-title">
                            {video.title}
                        </div>
                        
                        <div className="videoshow-views-likes-options">
                            <div className="videoshow-views">
                                <h2>Test views</h2>
                                <span className="videoshow-views-dot"></span>
                            </div>

                            <div className="videoshow-date">
                                <h2>Jan 23, 2020</h2>
                            </div>

                            <div className="videoshow-thumbs-up">
                                
                            </div>

                            <div className="videoshow-thumbs-down">
                                
                            </div>

                            <div className="videoshow-share">

                            </div>

                            <div className="videoshow-save">

                            </div>

                            <div className="videoshow-more-options">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="videoshow-right-box">
                    <div className="videoshow-up-next-container">
                        <p>Up Next</p>
                        <div className="videoshow-up-next-video">
                            <Link key={upNextVideo.id} className="videoshow-link" to={`/videos/${upNextVideo.id}`}>                  
                            <div className="videoshow-index">
                                <video src={upNextVideo.videoUrl} controls={false}/>
                            </div>
                            <div className="videoshow-rec-info">
                                <h2>{upNextVideo.title}</h2>
                            </div>
                            </Link> 
                        </div>
                    </div>
                    <div className="videoshow-recommended">
                        {this.props.videos.map(video => {
                            if (video.id !== this.props.video.id) {
                                return (
                                    <div className="videoshow-up-next-video"> 
                                        <Link key={video.id} className="videoshow-link" to={`/videos/${video.id}`}>                  
                                        <div className="videoshow-index">
                                            <video src={video.videoUrl} controls={false}/>
                                        </div>
                                        <div className="videoshow-rec-info">
                                            <h2>{video.title}</h2>
                                        </div>
                                        </Link> 
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShow;