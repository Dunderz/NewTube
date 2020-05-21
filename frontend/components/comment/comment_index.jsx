import React from 'react';
import CommentFormContainer from './comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <CommentFormContainer />
                <div>Comments</div>
            </>
        )
    }
}

export default CommentIndex;