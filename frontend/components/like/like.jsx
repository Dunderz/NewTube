import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faThumbsUp, 
    faThumbsDown
    } from '@fortawesome/free-solid-svg-icons';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        }

        this.handleLike = this.handleLike.bind(this);
        this.handleCountLike = this.handleCountLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    componentDidMount() {
        this.props.requestLikes(this.props.id)
            .then(likes => this.handleCountLike(likes.likes))
    }

    componentDidUpdate() {
        if (this.state.updated) {
            this.props.requestLikes(this.props.id)
                .then(likes => this.handleCountLike(likes.likes))
                .then(() => this.setState({ updated: false }))
        }
    }

    // Please refactor in the future lmao
    // likeAndDislikeHandler() {
    //     for (let i = 0; i < this.props.likes.length; i++) {
    //         if (this.props.likes[i]['value'] == "like") {
    //             this.setState(prevState => {
    //                 let likeIDs = Object.assign({}, prevState.likeIDs);
    //                 likeIDs[this.props.likes[i]['user_id']] = true;
    //                 // console.log(likeIDs);
    //                 return { likeIDs };
    //             })
    //         }
    //     }
    // }

    handleCountLike(likes) {
        for (let k in likes) {
            if (likes[k]['value'] == "like") {
                this.setState({ likes: this.state.likes++ });
            } else {
                this.setState({ dislikes: this.state.dislikes++ });
            }
        }
    }

    handleLike() {
        this.setState({ updated: true });

        let likesObj = {};
        let dislikesObj = {};

        let currentUserId = this.props.currentUser.id;

        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i]['value'] == 'like') {
                likesObj[this.props.likes[i]['user_id']] = true;
            } else {
                dislikesObj[this.props.likes[i]['user_id']] = true;
            }
        }

        if (likesObj[currentUserId] === undefined && dislikesObj[currentUserId] === undefined) {
            likesObj[currentUserId] = true;
            this.props.createLike({
                value: 'like',
                user_id: this.props.currentUser.id,
                likable_type: this.props.type,
                likable_id: this.props.id
            });
        } else if (likesObj[currentUserId]) {
            this.props.deleteLike(this.props.currentUser.id);
        } else if (dislikesObj[currentUserId]) {
            this.props.deleteLike(this.props.currentUser.id);
            this.props.createLike({
                value: 'like',
                user_id: this.props.currentUser.id,
                likable_type: this.props.type,
                likable_id: this.props.id
            });
        }   
    }

    handleDislike() {
        this.setState({ updated: true });

        let likesObj = {};
        let dislikesObj = {};

        let currentUserId = this.props.currentUser.id;

        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i]['value'] == 'like') {
                likesObj[this.props.likes[i]['user_id']] = true;
            } else {
                dislikesObj[this.props.likes[i]['user_id']] = true;
            }
        }

        if (likesObj[currentUserId] === undefined && dislikesObj[currentUserId] === undefined) {
            dislikesObj[currentUserId] = true;
            this.props.createLike({
                value: 'dislike',
                user_id: this.props.currentUser.id,
                likable_type: this.props.type,
                likable_id: this.props.id
            });
        } else if (dislikesObj[currentUserId]) {
            this.props.deleteLike(this.props.currentUser.id);
        } else if (likesObj[currentUserId]) {
            this.props.deleteLike(this.props.currentUser.id);
            this.props.createLike({
                value: 'dislike',
                user_id: this.props.currentUser.id,
                likable_type: this.props.type,
                likable_id: this.props.id
            });
        }
    }

    render() {

        let likeSelected;
        let dislikeSelected;
        // console.log(this.state);
        let likes = 0;
        let dislikes = 0;

        console.log(this.props.likes);
        
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i]['value'] === 'like') {
                likes++;
                if (this.props.likes[i]['user_id'] == this.props.currentUser.id) {
                    likeSelected = 'like-selected';
                    console.log('YO');
                }
            } else {
                dislikes++;
                if (this.props.likes[i]['user_id'] == this.props.currentUser.id) {
                    dislikeSelected = 'dislike-selected';
                }
            }
        }

        let testClass = "test-class";

        return (
            <>
                <div onClick={this.handleLike} className={`status-button noSelect ${likeSelected}`}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div className={`status-count noSelect ${likeSelected}`}>{likes}</div>

                <div onClick={this.handleDislike} className={`status-button noSelect ${dislikeSelected}`}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                </div>
                <div className={`status-count noSelect ${dislikeSelected}`}>{dislikes}</div>
            </>
        )
    }
}

export default Like;