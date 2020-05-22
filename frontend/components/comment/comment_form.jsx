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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            comment: {
                body: this.state.body,
                videoId: this.props.videoId
            }
        }).then(() => this.setState({ body: "" }))
    }

    render() {
        console.log(this.props.videoId);
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit}>
                    <textarea className="comment-box" placeholder="Add a public comment..." name="" id="" cols="30" rows="10"></textarea>
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