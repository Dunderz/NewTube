import React from 'react';

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            body: this.state.body,
            video_id: this.props.videoId,
            user_id: this.props.currentUser.id,
            username: this.props.currentUser.username,
            commentable_type: "Comment",
            commentable_id: this.props.parentCommentId
        })
        .then(() => this.props.handleCreateComment())
        .then(() => this.setState({ body: "" }))
        .then(() => this.props.hideReply())
    }

    render() {

        let commentFormClass;
        if (this.state.body.length < 1) {
            commentFormClass = "not-comment-submit";
        } else {
            commentFormClass = "comment-submit";
        }

        let commentIcon = (
            <div className="reply-user-icon" style={{backgroundColor: this.props.currentUser.color}}>
                    {this.props.currentUser.username[0].toUpperCase()}
            </div>
        )

        return (
            <>
                <div className="comment-form-container reply-container">
                    {commentIcon}
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <textarea
                            className="comment-box" 
                            placeholder="Add a public comment..." 
                            onChange={this.handleInput('body')}
                            cols="30" 
                            rows="10" 
                            value={this.state.body}></textarea>
                        <div className="comment-buttons">
                            <div onClick={this.props.hideReply} className="comment-cancel noSelect">CANCEL</div>
                            <input className={`${commentFormClass} reply-submit`} type="submit" value="REPLY"/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ReplyForm;