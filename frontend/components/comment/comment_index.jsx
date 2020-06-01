import React from 'react';
import CommentFormContainer from './comment_form_container';
import CommentIndexItem from './comment_index_item'
import timeAgo from '../video/video_time';

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
                        let timeSinceCommented = timeAgo(comment.created_at);
                        if (Object.values(comment).length === 0) {
                            return;
                        }
                        return (
                                <div key={comment.id}>
                                    <CommentIndexItem 
                                        body={comment.body}
                                        username={comment.username}
                                        color={comment.user.color}
                                        time={timeSinceCommented}
                                        commentId={comment.id}
                                        videoId={this.props.videoId}
                                        />
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CommentIndex;