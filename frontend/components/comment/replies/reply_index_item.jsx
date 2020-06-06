import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import ReplyDeleteContainer from './reply_delete_container';
 
class ReplyIndexItem extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            showDeleteForm: false,
            showReplyItem: true
        }
 
        this.toggleDeleteForm = this.toggleDeleteForm.bind(this);
        this.handleHideDeleteForm = this.handleHideDeleteForm.bind(this);
        this.handleHideReplyItem = this.handleHideReplyItem.bind(this);
    }
 
    toggleDeleteForm() {
        this.setState({ showDeleteForm: true });
    }
 
    handleHideDeleteForm() {
        this.setState({ showDeleteForm: false });
    }
 
    handleHideReplyItem() {
        this.setState({ showReplyItem: false });
    }
 
    render() {
 
        let showEllipsis;
 
        if (this.props.currentUser) {
            if (this.props.currentUser.username == this.props.username) {
                showEllipsis = "comment-ellipsis";
            }
        }
 
        let deletePopUp;
        let ellipsisAnchor;
 
        if (this.state.showDeleteForm) {
            ellipsisAnchor = "comment-ellipsis-anchor";
            deletePopUp = (
                <ReplyDeleteContainer 
                    handleHideReplyItem={this.handleHideReplyItem}
                    handleHideDeleteForm={this.handleHideDeleteForm}
                    handleDeleteCommentState={this.props.handleDeleteCommentState} 
                    replyId={this.props.replyId}
                    videoId={this.props.videoId}
                />
            )
        }
 
        return (
            <>
                <div className="reply-index-item">
                    <Link to={`/users/${this.props.user.id}`} className="comment-index-link">
                        <div className="reply-user-icon" style={{backgroundColor: this.props.color}}>
                                {this.props.username[0].toUpperCase()}
                        </div>
                    </Link>
                    <div className="comment-content">
                        <div className="comment-username-date-container">
                            <div className="comment-username-date-content">
                                <Link to={`/users/${this.props.user.id}`} className="comment-index-username-link">
                                    <div className="comment-username">{this.props.username}</div>
                                </Link>
                                <div className="comment-date">{this.props.time}</div>
                            </div>
                            <div onClick={this.toggleDeleteForm} className="ellipsis-container">
                                <FontAwesomeIcon className={`hide-ellipsis ${showEllipsis} ${ellipsisAnchor}`} icon={faEllipsisV} />
                                {deletePopUp}
                            </div>
                        </div>
                        <div className="comment-body">{this.props.body}</div>
                        {/* <div className="comment-likes">
                            <LikesContainer commentId={this.props.commentId} videoId={this.props.videoId} type="Comment"/>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}
 
export default ReplyIndexItem;
