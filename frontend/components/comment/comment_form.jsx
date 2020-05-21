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
        return (
            <div>COMMENT FORM</div>
        )
    }
}

export default CommentForm;