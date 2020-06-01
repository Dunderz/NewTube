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
            updated: false,
            likes: null,
            dislikes: null
        }

        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    componentDidMount() {
        this.props.requestLikes(this.props.id)
    }

    componentDidUpdate(prev) {
        if (this.state.updated) {
            console.log(prev)
            this.props.requestLikes(this.props.id)
                .then(() => this.setState({ updated: false }))
        }
        // if (prev.match.params.id !== this.props.match.params.id) {
        //     console.log("UPDATED");
        //     this.props.requestLikes(this.props.match.params.id);
        // }
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

    handleLike(e) {
        e.preventDefault();
        this.setState({ updated: true });
        if (!this.props.currentUser) {
            this.props.history.push("/login");
        }

        let likesObj = {};
        let dislikesObj = {};

        let currentUserId = this.props.currentUser.id;

        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i]['value'] == 'like') {
                likesObj[this.props.likes[i]['user_id']] = this.props.likes[i];
            } else {
                dislikesObj[this.props.likes[i]['user_id']] = this.props.likes[i];
            }
        }

        

        if (dislikesObj[currentUserId] && likesObj[currentUserId] === undefined) {
            this.props.deleteLike(dislikesObj[currentUserId].id)
            .then(() => {
                this.props.createLike({
                    value: 'like',
                    user_id: this.props.currentUser.id,
                    likable_type: this.props.type,
                    likable_id: this.props.id
                });
            });
        } else if (likesObj[currentUserId]) {
            this.props.deleteLike(likesObj[currentUserId].id);
        } else if (likesObj[currentUserId] === undefined && dislikesObj[currentUserId] === undefined) {
            this.props.createLike({
                value: 'like',
                user_id: this.props.currentUser.id,
                likable_type: this.props.type,
                likable_id: this.props.id
            });
        }
    }

    handleDislike(e) {
        e.preventDefault();
        this.setState({ updated: true });
        if (!this.props.currentUser) {
            this.props.history.push("/login");
        }

        let likesObj = {};
        let dislikesObj = {};

        let currentUserId = this.props.currentUser.id;

        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i]['value'] == 'like') {
                likesObj[this.props.likes[i]['user_id']] = this.props.likes[i];
            } else {
                dislikesObj[this.props.likes[i]['user_id']] = this.props.likes[i];
            }
        }

        if (likesObj[currentUserId] && dislikesObj[currentUserId] === undefined) {
            this.props.deleteLike(likesObj[currentUserId].id)
            .then(() => {
                this.props.createLike({
                    value: 'dislike',
                    user_id: this.props.currentUser.id,
                    likable_type: this.props.type,
                    likable_id: this.props.id
                });
            });
        } else if (dislikesObj[currentUserId]) {
            this.props.deleteLike(dislikesObj[currentUserId].id);
        } else if (likesObj[currentUserId] === undefined && dislikesObj[currentUserId] === undefined) {
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

        
        if (this.props.currentUser) {
            for (let i = 0; i < this.props.likes.length; i++) {
                if (this.props.likes[i]['value'] === 'like') {
                    likes++;
                    if (this.props.likes[i]['user_id'] == this.props.currentUser.id) {
                        likeSelected = 'like-selected';
                        console.log('YO');
                    }
                } else if (this.props.likes[i]['value'] === 'dislike'){
                    dislikes++;
                    if (this.props.likes[i]['user_id'] == this.props.currentUser.id) {
                        dislikeSelected = 'dislike-selected';
                    }
                }
            }
        } else {
            for (let i = 0; i < this.props.likes.length; i++) {
                if (this.props.likes[i]['value'] === 'like') {
                    likes++;
                } else if (this.props.likes[i]['value'] === 'dislike'){
                    dislikes++;
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