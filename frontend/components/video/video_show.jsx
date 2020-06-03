import React from 'react';
import { Link } from 'react-router-dom';
import TestContainer from '../test/test_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentsContainer from '../comment/comment_index_container';
import LikesContainer from '../like/like_container';
import timeAgo from './video_time';
import Subscription from '../subscriptions/subscription_container';
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
            newVideo: false,
            subscribeToggle: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubscribeToggle = this.handleSubscribeToggle.bind(this);
    }

    componentDidMount() {
        this.props.requestComments(this.props.match.params.id);
        this.props.requestVideo(this.props.match.params.id)
        .then(() => this.props.requestChannelSubscribers(this.props.video.user.id));
        
        this.props.requestVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.subscribeToggle) {
            this.props.requestChannelSubscribers(this.props.video.user.id);
            if (this.props.currentUser) {
                this.props.requestSelfSubscriptions(this.props.currentUser.id);
            }
            this.setState({ subscribeToggle: false });
        }

        if (this.state.newVideo) {
            this.props.requestComments(this.props.match.params.id);
            this.props.requestVideo(this.props.match.params.id)
            .then(() => this.props.requestChannelSubscribers(this.props.video.user.id));
            this.setState({ newVideo: false });
        }
    }

    handleClick() {
        this.setState({ newVideo: true })
    }

    handleSubscribeToggle(subscribeClass, subId) {
        
        if (subscribeClass == "subscribe") {
            
            this.props.subscribe({
                channel_id: this.props.video.user.id,
                subscriber_id: this.props.currentUser.id
            }).then(() => this.setState({ subscribeToggle: true }));
        } else if (subscribeClass == "subscribed") {
            
            this.props.unsubscribe(subId).then(() => this.setState({ subscribeToggle: true }));
        }
    }


    render() {

        if (this.props.video === undefined) {
            return (
                <>
                </>
            )
        }

        

        let commentCount = Object.values(this.props.comments).length;
        let commentWord;

        if (commentCount === 1) {
            commentWord = "Comment";
        } else {
            commentWord = "Comments";
        }
        
        let subscriberCount = 0;

        let subscribers = this.props.subscribers;

        let subscriberClass = "subscribe";
        let subscriberText = "SUBSCRIBE";
        let subscribeId;

        if (this.props.currentUser) {
            for (let k in subscribers) {
                if (this.props.currentUser.id == subscribers[k].subscriber_id) {
                    subscriberClass = "subscribed";
                    subscriberText = "SUBSCRIBED";
                    subscribeId = k;
                }
                subscriberCount++;
            }
        }

        

        console.log(subscriberClass);

        let subscriberCountName;

        subscriberCount === 1 ? subscriberCountName = "Subscriber" : subscriberCountName = "Subscribers";

        const { video } = this.props;
        
        
       
        let upNextVideo;

        const date = new Date(video.created_at);
        const dateArray = date.toDateString().split(" ").slice(1);
        dateArray[1] += ",";
        const formatted = dateArray.join(" ");

        let upNextBox;

        if (this.props.videos.length >= 1) {
            if (video.id === this.props.videos[0].id) {
                upNextVideo = this.props.videos.pop();
            } else {
                upNextVideo = this.props.videos.shift();
            }

            upNextBox = (
                <div className="videoshow-up-next-container">
                        <p>Up Next</p>
                        <div className="videoshow-up-next-video">
                            <Link onClick={this.handleClick} key={upNextVideo.id} className="videoshow-link" to={`/videos/${upNextVideo.id}`}>                  
                                <div className="videoshow-index">
                                    <img src={upNextVideo.thumbnailUrl} />
                                </div>
                                <div className="videoshow-rec-info">
                                    <h2>{upNextVideo.title}</h2>
                                    <Link to={`/users/${video.user.id}`} className="user-icon-link">
                                        <div className="uploader-name">
                                            <h2>{upNextVideo.user.username}</h2>
                                        </div>
                                    </Link>
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
            )
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
                                <LikesContainer id={video.id} type="Video"/>

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
                                        <h2>{subscriberCount} {subscriberCountName}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`${subscriberClass} hover`} onClick={() => this.handleSubscribeToggle(subscriberClass, subscribeId)}>
                                <h2>{subscriberText}</h2>
                            </div>
                        </div>
                        <div className="description">
                            <h2>{video.description}</h2>
                        </div>
                    </div>
                    <div className="video-comment-count">
                        {commentCount} {commentWord}
                    </div>
                    <CommentsContainer videoId={this.props.match.params.id} />
                </div>

                <div className="videoshow-right-box">
                    { upNextBox }
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
                                                <Link to={`/users/${video.user.id}`} className="user-icon-link">
                                                    <div className="uploader-name">
                                                        <h2>{video.user.username}</h2>
                                                    </div>
                                                </Link>
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