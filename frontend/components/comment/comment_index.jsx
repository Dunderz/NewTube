import React from 'react';
import CommentFormContainer from './comment_form_container';
import CommentIndexItem from './comment_index_item'

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
        console.log(this.props.comments);
        return (
            <div key="comment-index" className="comment-index">
                <CommentFormContainer handleCreateComment={this.handleCreateComment} videoId={this.props.videoId} />
                <div>
                    {Object.values(this.props.comments).map(comment => {
                        console.log(comment);
                        return (
                                <div key={comment.id}>
                                    <CommentIndexItem 
                                        body={comment.body}
                                        username={comment.username}
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