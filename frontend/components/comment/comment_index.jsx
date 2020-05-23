import React from 'react';
import CommentFormContainer from './comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestComments(this.props.videoId)
    }

    render() {
        
        return (
            <div key="comment-index" className="comment-index">
                <CommentFormContainer videoId={this.props.videoId} />
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