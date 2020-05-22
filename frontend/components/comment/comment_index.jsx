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
            <div>
                <CommentFormContainer videoId={this.props.videoId} />
                <div>
                    {Object.values(this.props.comments).map(comment => {
                        return (
                            <>
                                <div>
                                    {comment.body}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CommentIndex;