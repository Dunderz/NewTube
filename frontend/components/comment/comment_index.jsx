import React from 'react';
import CommentFormContainer from './comment_form_container';
import CommentIndexItemContainer from './comment_index_item_container'
import timeAgo from '../video/video_time';
 
class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createComment: false,
            showDeleteForm: false,
            deleteComment: false
        }
 
        this.handleCreateComment = this.handleCreateComment.bind(this);
        this.handleShowDeleteForm = this.handleShowDeleteForm.bind(this);
        this.handleDeleteCommentState = this.handleDeleteCommentState.bind(this);
    }
 
    componentDidUpdate() {
        if (this.state.createComment || this.state.deleteComment) {
            this.props.requestComments(this.props.videoId);
            this.setState({ createComment: false });
            this.setState({ deleteComment: false });
        }
    }
 
    // handleHideDeletePopUp(e) {
    //     if (this.state.showDeleteForm) {
    //         if (e.target.classList[0] == undefined) {
    //             if (e.target.nodeName != "svg" || e.target.nodeName != "path") {
    //                 this.setState({ showDeleteForm: false });
    //             }
    //         } else if (!e.target.classList[0].includes("comment-delete-pop-up")) {
    //             this.setState({ showDeleteForm: false });
    //         }
    //     }
    // }
 
    handleCreateComment() {
        this.setState({ createComment: true });
    }
 
    handleShowDeleteForm() {
        this.setState({ showDeleteForm: true });
    }
 
    handleDeleteCommentState() {
        this.setState({ deleteComment: true });
    }
 
    render() {
 
        let commentItems = [];
        let comments = Object.values(this.props.comments);
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].commentable_type == "Video") {
                let timeSinceCommented = timeAgo(comments[i].created_at);
                if (Object.values(comments[i]).length === 0) {
                    return;
                }
                commentItems.push(
                        <div key={comments[i].id}>
                            <CommentIndexItemContainer
                                handleShowDeleteForm={this.handleShowDeleteForm}
                                deleteFormStatus={this.state.showDeleteForm}
                                handleDeleteCommentState={this.handleDeleteCommentState}
 
                                body={comments[i].body}
                                username={comments[i].username}
                                color={comments[i].user.color}
                                time={timeSinceCommented}
                                commentId={comments[i].id}
                                videoId={this.props.videoId}
                                handleCreateComment={this.handleCreateComment}
                                replies={comments[i].replies}
                                user={comments[i].user}
                                />
                        </div>
                )
            }
        }
        
        return (
            <div key="comment-index" className="comment-index">
                <CommentFormContainer handleCreateComment={this.handleCreateComment} videoId={this.props.videoId} />
                <div>
                    { commentItems }
                </div>
            </div>
        )
    }
}
 
export default CommentIndex;
 
/* {Object.values(this.props.comments).map(comment => {
        if (comment.commentable_type == "Video") {
            let timeSinceCommented = timeAgo(comment.created_at);
            if (Object.values(comment).length === 0) {
                return;
            }
            return (
                    <div key={comment.id}>
                        <CommentIndexItemContainer
                            handleShowDeleteForm={this.handleShowDeleteForm}
                            deleteFormStatus={this.state.showDeleteForm}
 
                            body={comment.body}
                            username={comment.username}
                            color={comment.user.color}
                            time={timeSinceCommented}
                            commentId={comment.id}
                            videoId={this.props.videoId}
                            handleCreateComment={this.handleCreateComment}
                            replies={comment.replies}
                            user={comment.user}
                            />
                    </div>
            )
        }
    })} */
