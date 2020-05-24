import React from 'react';
import CommentFormContainer from './comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createComment: false
        }

        this.handleCreateComment = this.handleCreateComment.bind(this);
    }

    handleCreateComment() {
        this.setState({ createComment: true });
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        if (this.state.createComment) {
            this.props.requestComments(this.props.videoId);
            this.setState({ createComment: false });
        }
    }

    render() {
        
        return (
            <div key="comment-index" className="comment-index">
                <CommentFormContainer handleCreateComment={this.handleCreateComment} videoId={this.props.videoId} />
                <div>
                    {Object.values(this.props.comments).map(comment => {
                        return (
                                <div key={comment.id}>
                                    {comment.body}
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CommentIndex;