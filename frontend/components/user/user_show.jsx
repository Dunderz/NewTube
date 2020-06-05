import React from 'react';
import LeftNav from '../left_nav/left_nav';
import { Link } from 'react-router-dom';
import timeAgo from '../video/video_time';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSubscribePopUp: false
        }

        this.handleSubscribeToggle = this.handleSubscribeToggle.bind(this);
        this.handleSubPopUp = this.handleSubPopUp.bind(this);
        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleSubPopUp);
        this.props.requestUser(this.props.match.params.id)
        .then(() => this.props.requestChannelSubscriptions(this.props.user.id))
        .then(() => this.props.requestChannelSubscribers(this.props.user.id));
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleSubPopUp);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.requestUser(this.props.match.params.id)
            .then(() => this.props.requestChannelSubscriptions(this.props.user.id))
            .then(() => this.props.requestChannelSubscribers(this.props.user.id));
        }
    }

    testClick(e) {
        console.log(e.target)
    }

    handleSubPopUp(e) {
        if (this.state.showSubscribePopUp) {
            if (e.target.classList[0] == undefined) {
                if (e.target.nodeName != "H4") {
                    this.setState({ showSubscribePopUp: false });
                }
            } else if (!e.target.classList[0].includes("subscribe-pop-up")) {
                this.setState({ showSubscribePopUp: false });
            }
        }
    }

    handleSubscribeToggle(subscribeClass, subId) {
        if (this.props.currentUser) {
            if (subscribeClass == "subscribe") {
                this.props.subscribe({
                    channel_id: this.props.user.id,
                    subscriber_id: this.props.currentUser.id
                }).then(() => this.setState({ subscribeToggle: true }));
            } else if (subscribeClass == "subscribed") {
                this.props.unsubscribe(subId).then(() => this.setState({ subscribeToggle: true }));
            }
        } else if (!this.props.currentUser) {
            this.setState({ showSubscribePopUp: true });
        }
    }

    render() {
        if (this.props.user === undefined) {
            return (
                <>
                </>
            )
        }

        let subscriptions = this.props.channelSubscriptions;

        let videos = [];
        for (let id in this.props.user.videos) {
            videos.push(this.props.user.videos[id]);
        }

        let subsArr = [];
        for (let k in subscriptions) {
            subsArr.push(subscriptions[k]);
        }

        let videosContainer;
        if (videos.length > 0) {
            videosContainer = (
                <>
                    <div className="user-show-upload-header">
                        Uploads
                    </div>
                    <div className="user-show-uploaded-videos">
                        {videos.map(video => {
                            return (
                                <div key={video.id} className="video-container">
                                    <Link className="video-link" to={`/videos/${video.id}`}>                  
                                    <div className="video-index">
                                        <img src={video.thumbnailUrl} />
                                    </div>
                                    <div className="video-info">
                                        <div className="video-info-top-row">
                                        
                                        <div className="video-index-details">
                                            <div className="video-index-title">
                                            {video.title}
                                            </div>
                                            <div className="video-index-views-date-container">
                                            <div className="video-index-views">
                                                {video.views} views
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
                                </div>
                                
                            );
                        })}
                    </div>
                </>
            )
        };

        let subsContainer;
        if (subsArr.length > 0) {
            subsContainer = (
                <>
                    <div className="user-show-subscription-header">
                        Subscriptions
                    </div>
                    <div className="user-show-subscriptions">
                        {subsArr.map(sublink => {
                                return (
                                    <Link to={`/users/${sublink.subscription.id}`} key={sublink.id} className="user-show-subscriptions-link">
                                        <div className="user-show-subscriptions-icon" style={{ backgroundColor: sublink.subscription.color }}>
                                            {sublink.subscription.username[0].toUpperCase()}
                                        </div>
                                        <div className="user-show-subscriptions-username">
                                            {sublink.subscription.username}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </>
            )
        };

        // Please refactor subscription sometime in the future

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
        } else {
            for (let i in subscribers) {
                subscriberCount++;
            }
        }
        
        let subscriberCountName;

        subscriberCount === 1 ? subscriberCountName = "Subscriber" : subscriberCountName = "Subscribers";

        const { user } = this.props;

        let subscribePopUp;
        let subscribeShow;

        if (this.state.showSubscribePopUp) {
            subscribeShow = "subscribe-show";
        } else {
            subscribeShow = "";
        }

        if (!this.props.currentUser) {
            subscribePopUp = (
                <div className={`subscribe-pop-up-container user-subscribe ${subscribeShow}`}>
                    <div className="subscribe-pop-up-query flex-start">
                        Want to subscribe to this channel?
                    </div>
                    <div className="subscribe-pop-up-description flex-start">
                        Sign in to subscribe to this channel.
                    </div>
                    <div className="subscribe-pop-up-sign-in flex-start">
                        <Link className="subscribe-pop-up-sign-in-link" to="/login">SIGN IN</Link>
                    </div>
                </div>
            )
        }

        let videoButton;
        if (this.props.currentUser) {
            if (this.props.currentUser.id == user.id) {
                videoButton = (
                    <div className="videoshow-delete-video">
                        <h4 className="videoshow-delete-video-text">EDIT CHANNEL</h4>
                    </div>
                )
            } else {
                videoButton = (
                    <div className={`${subscriberClass} hover`} onClick={() => this.handleSubscribeToggle(subscriberClass, subscribeId)}>
                        { subscribePopUp }
                        <h4>{subscriberText}</h4>
                    </div>
                );
            }
        } else {
            videoButton = (
                <div className={`${subscriberClass} hover`} onClick={() => this.handleSubscribeToggle(subscriberClass, subscribeId)}>
                    { subscribePopUp }
                    <h4>{subscriberText}</h4>
                </div>
            );
        }
        
        return (
            <div onClick={this.testClick} className="user-show-container">
                <div className="left-nav-component">
                    <LeftNav />
                </div>
                <div className="user-show-content">
                    <div className="user-show-banner">
                        <div className="user-show-banner-content">
                            <div className="user-show-banner-top-row">
                                <div className="user-show-current-user">
                                    <div className="user-show-banner-icon" style={{backgroundColor: this.props.user.color}}>
                                        {this.props.user.username[0].toUpperCase()}
                                    </div>
                                    <div className="user-show-banner-username">
                                        <div className="user-show-username">
                                            {this.props.user.username}
                                        </div>
                                        <div className="user-show-sub-count">
                                            <h2>{subscriberCount} {subscriberCountName}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-show-subscribe">
                                { videoButton }
                                </div>
                            </div>
                            
                            <div className="user-show-banner-nav">
                                <div className="user-show-banner-nav-home">HOME</div>
                            </div>
                        </div>
                    </div>
                    <div className="user-show-videos-container">
                        <div className="user-show-videos-content">
                            { videosContainer }
                            { subsContainer }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;