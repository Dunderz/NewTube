import React from 'react';
import { Link } from 'react-router-dom';
import TestContainer from '../test/test_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentsContainer from '../comment/comment_index_container';
import timeAgo from './video_time';
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
        this.props.requestVideo(this.props.match.params.id);
        this.props.requestVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.newVideo) {
            window.location.reload();
            this.props.requestComments(this.props.match.params.id);
            this.setState({ newVideo: false });
        }
    }

    handleClick() {
        this.setState({ newVideo: true })
    }

    render() {

        let commentCount = Object.values(this.props.comments).length;
        let commentWord;

        if (commentCount === 1) {
            commentWord = "Comment";
        } else {
            commentWord = "Comments";
        }

        if (this.props.video === undefined) {
            return (
                <div>
                    nooo
                </div>
            )
        }

        const { video } = this.props;
        let upNextVideo;

        const date = new Date(video.created_at);
        const dateArray = date.toDateString().split(" ").slice(1);
        dateArray[1] += ",";
        const formatted = dateArray.join(" ");

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
                        <video id="video" src={video.videoUrl} autoPlay={true} controls />
                    </div>
                    <div className="videoshow-info">
                        <div className="videoshow-title">
                            {video.title}
                        </div>
                        
                        <div className="videoshow-views-likes-options">
                            <div className="videoshow-views">
                                <h2>{video.views} { video.views == 1 ? "view" : "views"}</h2>
                                <span className="videoshow-views-dot"></span>
                                <div className="videoshow-date">
                                    <h2>{formatted}</h2>
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
                                <div className="description-user-icon" style={{backgroundColor: video.user.color}}>
                                    {video.user.username[0].toUpperCase()}
                                </div>
                                <div className="description-user">
                                    <div className="description-username">
                                        <h2>{video.user.username}</h2>
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
                    <div className="video-comment-count">
                        {commentCount} {commentWord}
                    </div>
                    <CommentsContainer videoId={this.props.match.params.id} />
                </div>

                <div className="videoshow-right-box">
                    <div className="videoshow-up-next-container">
                        <p>Up Next</p>
                        <div className="videoshow-up-next-video">
                            <Link onClick={this.handleClick} key={upNextVideo.id} className="videoshow-link" to={`/videos/${upNextVideo.id}`}>                  
                                <div className="videoshow-index">
                                    <img src={upNextVideo.thumbnailUrl} />
                                </div>
                                <div className="videoshow-rec-info">
                                    <h2>{upNextVideo.title}</h2>
                                    <div className="uploader-name">
                                        <h2>{upNextVideo.user.username}</h2>
                                    </div>
                                    <div className="videoshow-rec-vid-stats">
                                        <div className="videoshow-rec-views">
                                            <h2>{upNextVideo.views} {upNextVideo.views == 1 ? "view" : "views"}</h2>
                                            <span className="videoshow-views-dot"></span>
                                        </div>
                                        <div className="videoshow-rec-timeago">
                                            <h2>{timeAgo(upNextVideo.created_at)}</h2>
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
                                                <img src={video.thumbnailUrl} />
                                            </div>
                                            <div className="videoshow-rec-info">
                                                <h2>{video.title}</h2>
                                                <div className="uploader-name">
                                                    <h2>{video.user.username}</h2>
                                                </div>
                                                <div className="videoshow-rec-vid-stats">
                                                    <div className="videoshow-rec-views">
                                                        <h2>{video.views} {video.views == 1 ? "view" : "views"}</h2>
                                                        <span className="videoshow-views-dot"></span>
                                                    </div>
                                                    <div className="videoshow-rec-timeago">
                                                        <h2>{timeAgo(video.created_at)}</h2>
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