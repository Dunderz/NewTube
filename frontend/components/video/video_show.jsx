import React from 'react';
import { Link } from 'react-router-dom';
import TestContainer from '../test/test_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentsContainer from '../comment/comment_index_container';
import { 
    faThumbsUp, 
    faThumbsDown,
    faShare,
    faListUl,
    faEllipsisH,
    faUserCircle,
    faUser
    } from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newVideo: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.requestComments(this.props.match.params.id);
        this.props.requestVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.newVideo) {
            this.props.requestComments(this.props.match.params.id);
            this.setState({ newVideo: false })
        }
    }

    handleClick() {
        this.setState({ newVideo: true })
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
        let upNextVideo;

        if (video.id === this.props.videos[0].id) {
            upNextVideo = this.props.videos.pop();
        } else {
            upNextVideo = this.props.videos.shift();
        }

        return (
            
            <div key={video.id} className="videoshow-container">
                {/* <TestContainer comments={this.props.comments} videoId={this.props.match.params.id} /> */}
                <div className="videoshow-left-box">
                    <div className="videoshow-player">
                        <video id="video" src={video.videoUrl} />
                    </div>
                    <div className="videoshow-info">
                        <div className="videoshow-title">
                            {video.title}
                        </div>
                        
                        <div className="videoshow-views-likes-options">
                            <div className="videoshow-views">
                                <h2>Test views</h2>
                                <span className="videoshow-views-dot"></span>
                                <div className="videoshow-date">
                                    <h2>Jan 23, 2020</h2>
                                </div>
                            </div>
                            
                            <div className="videoshow-likes-options">
                                <div className="videoshow-thumbs-up hover">
                                    <FontAwesomeIcon className="video-option-icons" icon={faThumbsUp}/>
                                    <h2>0</h2>
                                </div>

                                <div className="videoshow-thumbs-down hover">
                                    <FontAwesomeIcon className="video-option-icons" icon={faThumbsDown}/>
                                    <h2>0</h2>
                                </div>

                                {/* <div className="videoshow-share hover">
                                    <FontAwesomeIcon className="video-option-icons" icon={faShare}/>
                                    <h2>SHARE</h2>
                                </div>

                                <div className="videoshow-save hover">
                                    <FontAwesomeIcon className="video-option-icons" icon={faListUl}/>
                                    <h2>SAVE</h2>
                                </div>

                                <div className="videoshow-more-options hover">
                                    <FontAwesomeIcon className="video-option-icons" icon={faEllipsisH}/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="videoshow-description">
                        <div className="description-top-row">
                            <div className="description-user-container hover">
                                <FontAwesomeIcon className="description-user-icon" icon={faUserCircle} />
                                <div className="description-user">
                                    <div className="description-username">
                                        <h2>TestUser</h2>
                                    </div>
                                    <div className="description-sub-count">
                                        <h2>99.9K subscribers</h2>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="subscribe hover">
                                <h2>SUBSCRIBE</h2>
                            </div> */}
                        </div>
                    </div>
                    <CommentsContainer videoId={this.props.match.params.id} />
                </div>

                <div className="videoshow-right-box">
                    <div className="videoshow-up-next-container">
                        <p>Up Next</p>
                        <div className="videoshow-up-next-video">
                            <Link onClick={this.handleClick} key={upNextVideo.id} className="videoshow-link" to={`/videos/${upNextVideo.id}`}>                  
                                <div className="videoshow-index">
                                    <video src={upNextVideo.videoUrl} controls={false}/>
                                </div>
                                <div className="videoshow-rec-info">
                                    <h2>{upNextVideo.title}</h2>
                                    <div className="uploader-name">
                                        <h2>Test Uploader</h2>
                                    </div>
                                    <div className="videoshow-rec-vid-stats">
                                        <div className="videoshow-rec-views">
                                            <h2>800K views</h2>
                                            <span className="videoshow-views-dot"></span>
                                        </div>
                                        <div className="videoshow-rec-timeago">
                                            <h2>2 months ago</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link> 
                        </div>
                    </div>
                    <div className="videoshow-recommended">
                        {this.props.videos.map(video => {
                            if (video.id !== this.props.video.id) {
                                return (
                                    <div key={video.id} className="videoshow-up-next-video"> 
                                        <Link onClick={this.handleClick} className="videoshow-link" to={`/videos/${video.id}`}>                  
                                            <div className="videoshow-index">
                                                <video src={video.videoUrl} controls={false}/>
                                            </div>
                                            <div className="videoshow-rec-info">
                                                <h2>{video.title}</h2>
                                                <div className="uploader-name">
                                                    <h2>Test Uploader</h2>
                                                </div>
                                                <div className="videoshow-rec-vid-stats">
                                                    <div className="videoshow-rec-views">
                                                        <h2>800K views</h2>
                                                        <span className="videoshow-views-dot"></span>
                                                    </div>
                                                    <div className="videoshow-rec-timeago">
                                                        <h2>2 months ago</h2>
                                                    </div>
                                                </div>
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