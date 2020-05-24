import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {

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
            user_id: this.props.currentUser.id
        }).then(() => this.setState({ body: "" })).then(() => this.props.handleCreateComment())
    }

    render() {
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        className="comment-box" 
                        placeholder="Add a public comment..." 
                        onChange={this.handleInput('body')}
                        cols="30" 
                        rows="10" 
                        value={this.state.body}></textarea>
                    <div className="comment-buttons">
                        <button className="comment-cancel">CANCEL</button>
                        <input className="comment-submit" type="submit" value="COMMENT"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;