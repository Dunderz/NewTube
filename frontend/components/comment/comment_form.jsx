import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            showButtons: false
        }

        this.handleBodyClick = this.handleBodyClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    handleBodyClick(e) {
        this.setState({ showButtons: true })
    }

    handleCancelClick() {
        this.setState({ showButtons: false })
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
            username: this.props.currentUser.username
        })
        .then(() => this.props.handleCreateComment())
        .then(() => this.setState({ body: "" }))
        .then(() => this.setState({ showButtons: false }))
    }

    render() {
        let show;

        if (this.state.showButtons) {
            show = "comment-buttons";
        } else {
            show = "comment-buttons-hidden";
        }

        return (
            <div className="comment-form-container">
                <FontAwesomeIcon className="comment-form-icon" icon={faUserCircle} />
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <textarea 
                        onClick={this.handleBodyClick}
                        className="comment-box" 
                        placeholder="Add a public comment..." 
                        onChange={this.handleInput('body')}
                        cols="30" 
                        rows="10" 
                        value={this.state.body}></textarea>
                    <div className={show}>
                        <div onClick={this.handleCancelClick} className="comment-cancel">CANCEL</div>
                        <input className="comment-submit" type="submit" value="COMMENT"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;