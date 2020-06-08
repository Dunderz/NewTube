import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import LikesContainer from '../like/like_container';
import ReplyFormContainer from './replies/reply_form_container';
import ReplyIndexContainer from './replies/reply_index_container';
import CommentDeleteContainer from './comment_delete_container';
import { Link } from 'react-router-dom';
 
class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            showReplyForm: false,
            showReplies: false,
            showDeleteForm: false
        }
 
        this.handleShowReply = this.handleShowReply.bind(this);
        this.handleHideReply = this.handleHideReply.bind(this);
        this.replyCurrentUserCheck = this.replyCurrentUserCheck.bind(this);
        this.toggleReplies = this.toggleReplies.bind(this);
        this.toggleDeleteForm = this.toggleDeleteForm.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleHideDeleteForm = this.handleHideDeleteForm.bind(this);
    }
 
    handleShowReply() {
        if (!this.props.currentUser) {
            this.props.history.push("/login");
        } else {
            this.setState({ showReplyForm: true });
        }
    }
 
    handleHideReply() {
        this.setState({ showReplyForm: false })
    }
 
    toggleReplies() {
        this.setState({ showReplies: !this.state.showReplies })
    }
 
    toggleDeleteForm() {
        this.setState({ showDeleteForm: true });
    }
 
    handleHideDeleteForm() {
        this.setState({ showDeleteForm: false });
    }
 
    handleDeleteComment() {
 
    }
 
    replyCurrentUserCheck() {
        // later
    }
 
    render() {
 
        let replyForm;
 
        if (this.state.showReplyForm) {
            replyForm = (
                <ReplyFormContainer 
                    handleCreateComment={this.props.handleCreateComment} 
                    hideReply={this.handleHideReply}
                    parentCommentId={this.props.commentId}
                    videoId={this.props.videoId}
                />
            )
        }
 
        let deletePopUp;
        let ellipsisAnchor;
        
        if (this.state.showDeleteForm) {
            ellipsisAnchor = "comment-ellipsis-anchor";
            deletePopUp = (
                <CommentDeleteContainer
                    handleHideDeleteForm={this.handleHideDeleteForm} 
                    commentId={this.props.commentId}
                    videoId={this.props.videoId}
                />
            )
        } else {
            ellipsisAnchor = "hide-ellipsis";
        }
 
        let showHoverEllipsis;
 
        
        
        if (this.props.currentUser) {
            if (this.props.currentUser.username == this.props.username) {
                showHoverEllipsis = "comment-ellipsis";
            }
        }
 
        let repliesButtonToggle;
        let repliesText;
 
        if (!this.state.showReplies) {
            this.props.replies.length === 1 ? repliesText = "View reply" : repliesText = `View ${this.props.replies.length} replies`;
        } else {
            this.props.replies.length === 1 ? repliesText = "Hide reply" : repliesText = `Hide ${this.props.replies.length} replies`;
        }
 
        if (this.props.replies.length > 0) {
            if (!this.state.showReplies) {
                repliesButtonToggle = (
                    <div onClick={this.toggleReplies} className="replies-button-toggle">
                        <FontAwesomeIcon className="replies-arrow-down" icon={faSortDown} /> { repliesText }
                    </div>
                )
            } else {
                repliesButtonToggle = (
                    <div onClick={this.toggleReplies} className="replies-button-toggle">
                         <FontAwesomeIcon className="replies-arrow-up" icon={faSortUp} /> { repliesText }
                    </div>
                )
            }
        }
 
        let replies;
        if (this.state.showReplies) {
            replies = (
                <ReplyIndexContainer 
                    replies={this.props.replies} 
                    handleDeleteCommentState={this.props.handleDeleteCommentState}
                />
            )
        }
        
        return (
            <div onClick={this.testClick} className="comment-index-item">
                <Link to={`/users/${this.props.user.id}`} className="comment-index-link">
                    <div className="comment-user-icon" style={{backgroundColor: this.props.color}}>
                            {this.props.username[0].toUpperCase()}
                    </div>
                </Link>
                <div className="comment-content">
                    <div className="parent-comment-container">
                        <div className="comment-username-date-container">
                            <div className="comment-username-date-content">
                                <Link to={`/users/${this.props.user.id}`} className="comment-index-username-link">
                                    <div className="comment-username">{this.props.username}</div>
                                </Link>
                                <div className="comment-date">{this.props.time}</div>
                            </div>
                            <div onClick={this.toggleDeleteForm} className="ellipsis-container">
                                <FontAwesomeIcon className={`hide-ellipsis ${showHoverEllipsis} ${ellipsisAnchor}`} icon={faEllipsisV} />
                                {deletePopUp}
                            </div>
                            
                        </div>
                        <div className="comment-body">{this.props.body}</div>
                        <div className="comment-reply-button" onClick={this.handleShowReply}>
                            REPLY
                        </div>
                    </div>
                    { replyForm }
                    {/* <div className="comment-likes">
                        <LikesContainer commentId={this.props.commentId} videoId={this.props.videoId} type="Comment"/>
                    </div> */}
                    { repliesButtonToggle }
                    { replies }
                </div>
            </div>
        )
    }
}
 
export default CommentIndexItem;
